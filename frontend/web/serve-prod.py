#!/usr/bin/env python3
import http.server
import socketserver
import os
import sys
from pathlib import Path

# Cambiar al directorio de dist/frontend/browser
dist_dir = Path(__file__).parent / "dist" / "frontend" / "browser"
os.chdir(dist_dir)

PORT = 4200

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Agregar headers para index.html sin cache
        if self.path == "/" or self.path.endswith("index.html"):
            self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
            self.send_header("Pragma", "no-cache")
            self.send_header("Expires", "0")
        super().end_headers()

    def do_GET(self):
        # Si no hay archivo, servir index.html (para SPA routing)
        if self.path == "/" or (self.path.startswith("/") and "." not in self.path):
            self.path = "/index.html"
        return super().do_GET()

with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
    print("[OK] Production server at http://localhost:5000")
    print("[OK] Serving from: {}".format(dist_dir))
    print("[OK] Press Ctrl+C to stop")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n[OK] Server stopped")
        sys.exit(0)
