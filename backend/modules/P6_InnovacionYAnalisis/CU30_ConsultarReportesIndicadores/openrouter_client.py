"""Cliente OpenRouter (OPCIONAL) para la "consulta inteligente" de CU30.

Solo se usa cuando IA_PROVIDER=openrouter (ver gemini_client.proveedor_activo);
con la configuración por defecto (Gemini) este módulo ni siquiera se importa.
OpenRouter expone una API compatible con OpenAI (`/chat/completions`).

Mismo contrato que la ruta de Gemini de gemini_client.py:
  - interpretar_consulta_reporte_openrouter(prompt) -> dict
  - generar_resumen_reporte_openrouter(prompt) -> str
y el mismo criterio de errores: CUALQUIER fallo (clave ausente, red, timeout,
límite de peticiones, HTTP de error, respuesta vacía o con JSON inválido) se
traduce a GeminiNoDisponibleError -- el nombre es heredado de CU29, pero lo
usan ambos proveedores -- y CU30 responde con su fallback amigable. El
dashboard base nunca se cae por esto.

Seguridad:
  - Usa httpx (ya declarado en requirements.txt); no agrega dependencias.
  - La clave solo viaja en la cabecera Authorization sobre HTTPS; nunca se
    registra. Tampoco se registran prompts ni cuerpos de respuesta (pueden
    contener datos de la empresa): solo el tipo de fallo y el código HTTP.
  - Solo se envían parámetros que la API soporta (model, messages,
    temperature, max_tokens, response_format) y la cabecera opcional
    X-Title; no se envía HTTP-Referer.
  - Reintentos acotados; 401/403/4xx de solicitud NO se reintentan.
"""

import json
import logging
import re
import time

import httpx

from app.core.config import settings
from modules.P6_InnovacionYAnalisis.CU29_ObtenerRecomendacionesIA.gemini_client import (
    GeminiNoDisponibleError,
)

logger = logging.getLogger(__name__)

_INTENTOS_HTTP = 3
_INTENTOS_JSON = 2  # si el modelo devuelve JSON roto se vuelve a pedir una vez
_ESPERA_BASE_SEGUNDOS = 0.6
_ESPERA_MAXIMA_SEGUNDOS = 5.0
_TIMEOUT = httpx.Timeout(30.0, connect=10.0)
_MAX_TOKENS = 3000
_ESTADOS_REINTENTABLES = {408, 429}  # además de todo 5xx


def _crear_cliente() -> httpx.Client:
    return httpx.Client(timeout=_TIMEOUT)


def _configuracion() -> tuple[str, str, str]:
    clave = (settings.OPENROUTER_API_KEY or "").strip()
    modelo = (settings.OPENROUTER_MODEL or "").strip()
    base = (settings.OPENROUTER_BASE_URL or "").strip().rstrip("/")
    if not clave:
        raise GeminiNoDisponibleError("OPENROUTER_API_KEY no está configurada.")
    if not modelo:
        raise GeminiNoDisponibleError("OPENROUTER_MODEL no está configurada.")
    if not base.lower().startswith("https://"):
        # La clave nunca debe viajar por HTTP plano.
        raise GeminiNoDisponibleError("OPENROUTER_BASE_URL debe empezar con https://.")
    return clave, modelo, base


def _espera_reintento(respuesta: httpx.Response | None, intento: int) -> float:
    if respuesta is not None:
        try:
            pedida = float(respuesta.headers.get("Retry-After", ""))
            return max(0.0, min(pedida, _ESPERA_MAXIMA_SEGUNDOS))
        except ValueError:
            pass
    return min(_ESPERA_BASE_SEGUNDOS * (2 ** (intento - 1)), _ESPERA_MAXIMA_SEGUNDOS)


def _extraer_texto(respuesta: httpx.Response) -> tuple[str | None, str]:
    """(texto, motivo_si_falla). Nunca devuelve ni registra el cuerpo."""
    try:
        datos = respuesta.json()
    except ValueError:
        return None, "respuesta no JSON"
    if not isinstance(datos, dict):
        return None, "respuesta inesperada"
    if "error" in datos:  # OpenRouter puede responder 200 con un error en el cuerpo
        error = datos["error"]
        codigo = error.get("code") if isinstance(error, dict) else None
        return None, f"error del proveedor ({codigo})"
    try:
        contenido = datos["choices"][0]["message"]["content"]
    except (KeyError, IndexError, TypeError):
        return None, "respuesta incompleta"
    if not isinstance(contenido, str) or not contenido.strip():
        # Los modelos "razonadores" gratuitos a veces devuelven content=None.
        return None, "contenido vacío"
    return contenido.strip(), ""


def _llamar(prompt: str, *, json_mode: bool, temperature: float) -> str:
    clave, modelo, base = _configuracion()
    payload: dict = {
        "model": modelo,
        "messages": [{"role": "user", "content": prompt}],
        "temperature": temperature,
        "max_tokens": _MAX_TOKENS,
    }
    if json_mode:
        payload["response_format"] = {"type": "json_object"}
    cabeceras = {"Authorization": f"Bearer {clave}", "Content-Type": "application/json", "X-Title": "FashionStore"}

    ultimo_fallo = "desconocido"
    with _crear_cliente() as http:
        for intento in range(1, _INTENTOS_HTTP + 1):
            respuesta: httpx.Response | None = None
            try:
                respuesta = http.post(f"{base}/chat/completions", json=payload, headers=cabeceras)
            except httpx.TimeoutException:
                ultimo_fallo = "timeout"
            except httpx.HTTPError as exc:
                ultimo_fallo = type(exc).__name__
            else:
                codigo = respuesta.status_code
                if codigo == 200:
                    texto, motivo = _extraer_texto(respuesta)
                    if texto is not None:
                        return texto
                    ultimo_fallo = motivo
                elif codigo in _ESTADOS_REINTENTABLES or codigo >= 500:
                    ultimo_fallo = f"HTTP {codigo}"
                else:
                    # 400/401/402/403/404/...: error de configuración o de solicitud, reintentar no ayuda.
                    logger.warning("CU30/OpenRouter -- la solicitud fue rechazada (HTTP %s).", codigo)
                    raise GeminiNoDisponibleError(f"OpenRouter rechazó la solicitud (HTTP {codigo}).")
            if intento < _INTENTOS_HTTP:
                logger.info("CU30/OpenRouter -- intento %s/%s falló (%s), reintentando.", intento, _INTENTOS_HTTP, ultimo_fallo)
                time.sleep(_espera_reintento(respuesta, intento))
    logger.warning("CU30/OpenRouter -- falló tras %s intentos (%s).", _INTENTOS_HTTP, ultimo_fallo)
    raise GeminiNoDisponibleError(f"OpenRouter no respondió: {ultimo_fallo}.")


def _json_tolerante(texto: str) -> dict:
    """Extrae el objeto JSON aunque venga dentro de ``` o con texto alrededor,
    y tolera comas finales. ValueError si no hay forma de leerlo."""
    inicio, fin = texto.find("{"), texto.rfind("}")
    if inicio == -1 or fin <= inicio:
        raise ValueError("sin objeto JSON")
    crudo = re.sub(r",\s*([}\]])", r"\1", texto[inicio : fin + 1])
    datos = json.loads(crudo)  # JSONDecodeError es subclase de ValueError
    if not isinstance(datos, dict):
        raise ValueError("la respuesta no fue un objeto JSON")
    return datos


def interpretar_consulta_reporte_openrouter(prompt: str) -> dict:
    """`prompt` ya viene formateado (mismo prompt que usa la ruta de Gemini)."""
    try:
        for intento in range(1, _INTENTOS_JSON + 1):
            texto = _llamar(prompt, json_mode=True, temperature=0.1)
            try:
                return _json_tolerante(texto)
            except ValueError as exc:
                logger.info("CU30/OpenRouter -- JSON inválido (%s), intento %s/%s.", type(exc).__name__, intento, _INTENTOS_JSON)
        raise GeminiNoDisponibleError("OpenRouter no devolvió un JSON válido.")
    except GeminiNoDisponibleError:
        raise
    except Exception as exc:  # defensivo: nada debe tumbar el backend
        logger.warning("CU30/OpenRouter -- interpretación falló (%s).", type(exc).__name__)
        raise GeminiNoDisponibleError("OpenRouter no pudo interpretar la consulta.") from exc


def generar_resumen_reporte_openrouter(prompt: str) -> str:
    """`prompt` ya viene formateado (mismo prompt que usa la ruta de Gemini)."""
    try:
        return _llamar(prompt, json_mode=False, temperature=0.3)
    except GeminiNoDisponibleError:
        raise
    except Exception as exc:  # defensivo
        logger.warning("CU30/OpenRouter -- resumen falló (%s).", type(exc).__name__)
        raise GeminiNoDisponibleError("OpenRouter no pudo generar el resumen.") from exc
