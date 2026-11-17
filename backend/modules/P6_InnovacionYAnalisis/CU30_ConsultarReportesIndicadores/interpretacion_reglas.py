"""Pistas deterministas extraídas del texto de la consulta (CU30).

Respaldo de la IA, no su reemplazo: (1) completa los campos que el modelo
omitió pero que el texto dice de forma explícita (agrupación, TOP N, "últimos
N meses", mes a mes) y (2) permite responder cuando el proveedor de IA falla
(JSON roto, corte de red). Solo produce valores de listas cerradas o enteros
acotados -- nunca SQL.
"""

import re
import unicodedata

_NUMEROS = {
    "un": 1, "una": 1, "uno": 1, "dos": 2, "tres": 3, "cuatro": 4, "cinco": 5, "seis": 6,
    "siete": 7, "ocho": 8, "nueve": 9, "diez": 10, "once": 11, "doce": 12,
}
_UNIDADES = {"dia": "dias", "dias": "dias", "semana": "semanas", "semanas": "semanas",
             "mes": "meses", "meses": "meses", "ano": "anios", "anos": "anios"}


def _norm(texto: str) -> str:
    sin_acentos = unicodedata.normalize("NFD", texto.lower())
    return "".join(c for c in sin_acentos if unicodedata.category(c) != "Mn")


def _a_entero(token: str) -> int | None:
    if token.isdigit():
        return int(token)
    return _NUMEROS.get(token)


def extraer_pistas(consulta: str) -> dict:
    t = _norm(consulta)
    pistas: dict = {}

    m = re.search(r"ultim[oa]s?\s+(\d+|[a-z]+)\s+(dias?|semanas?|meses|mes|anos?)\b", t)
    if m:
        cantidad, unidad = _a_entero(m.group(1)), _UNIDADES.get(m.group(2))
        if cantidad and unidad and 1 <= cantidad <= 120:
            pistas["ventana"] = {"cantidad": cantidad, "unidad": unidad}
    elif re.search(r"\bultimo (mes|ano|semana)\b", t):
        unidad = {"mes": "meses", "ano": "anios", "semana": "semanas"}[re.search(r"\bultimo (mes|ano|semana)\b", t).group(1)]
        pistas["ventana"] = {"cantidad": 1, "unidad": unidad}

    if re.search(r"(por|de|cada|entre|segun|agrupad\w*\s+(por|segun))\s+(cada\s+)?sucursal(es)?|las sucursales|cada sucursal", t):
        pistas["agrupacion"] = "sucursal"
    elif re.search(r"(por|de|cada|agrupad\w*\s+por)\s+(cada\s+)?categoria", t):
        pistas["agrupacion"] = "categoria"

    if re.search(r"mes a mes|por mes|mensual|cada mes", t):
        pistas["granularidad"] = "mes"
    elif re.search(r"semana a semana|por semana|semanal|cada semana", t):
        pistas["granularidad"] = "semana"

    m = re.search(r"\btop\s*(\d{1,2})\b|\b(\d{1,2})\s+(?:productos|articulos|prendas|mas vendid)", t)
    if m:
        limite = int(m.group(1) or m.group(2))
        if 1 <= limite <= 50:
            pistas["limite"] = limite
    elif "mas vendid" in t and re.search(r"\b(el|la)\s+(producto|articulo|prenda)\s+mas vendid", t):
        pistas["limite"] = 1

    if re.search(r"menos vendid", t):
        pistas["orden"] = "asc"

    # Intención (solo se usa si la IA no pudo interpretar).
    if re.search(r"mas vendid|\btop\b|ranking|menos vendid", t):
        pistas["intencion"] = "productos_mas_vendidos"
    elif re.search(r"venta|ingreso|vendi", t):
        comparar = re.search(r"compar|por sucursal|cada sucursal|las sucursales|entre sucursales", t)
        pistas["intencion"] = "ventas_por_sucursal" if comparar else "ventas"
    elif re.search(r"stock bajo|poco stock", t):
        pistas["intencion"] = "stock_bajo"
    elif re.search(r"stock|inventario", t):
        pistas["intencion"] = "inventario"
    elif re.search(r"reserva", t):
        pistas["intencion"] = "reservas"
    elif re.search(r"devolucion|cambio", t):
        pistas["intencion"] = "devoluciones_cambios"
    return pistas


def completar_interpretacion(interpretado: dict, consulta: str) -> dict:
    """La IA manda; las pistas solo rellenan lo que dejó vacío."""
    pistas = extraer_pistas(consulta)
    resultado = dict(interpretado)
    for campo in ("ventana", "agrupacion", "granularidad", "limite", "orden"):
        if resultado.get(campo) in (None, "") and campo in pistas:
            resultado[campo] = pistas[campo]
    # Con ventana relativa explícita, el periodo "absoluto" de la IA estorba.
    if "ventana" in pistas and resultado.get("ventana") == pistas["ventana"]:
        for campo in ("periodo", "mes_nombre", "fecha_desde", "fecha_hasta"):
            resultado[campo] = None
    # Un ranking pedido con agrupación explícita no puede quedar como "ventas".
    if resultado.get("agrupacion") and pistas.get("intencion") == "productos_mas_vendidos":
        resultado["intencion"] = "productos_mas_vendidos"
    return resultado
