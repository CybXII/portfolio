# syntax=docker/dockerfile:1

# Definiere Node-Version
ARG NODE_VERSION=22.12.0

################################################################################
# Build-Stufe: Angular App bauen (✅ LOKAL in CI/CD verwenden, ❌ NICHT auf dem VPS)
# Wird auf dem Server nicht benötigt, da wir die fertige App bereits im dist/ bereitstellen.
#
# Du kannst diesen Abschnitt **kommentieren oder komplett entfernen**, wenn du
# das Image auf dem Server nur noch aus dem Build-Output erzeugst.
#
# --- BEGIN BUILD-STUFE ---
# FROM node:${NODE_VERSION}-alpine AS build

# WORKDIR /app

# # Abhängigkeiten installieren
# COPY package.json package-lock.json ./
# RUN npm install

# # Restliche Quellcodes kopieren und App bauen
# COPY . .
# RUN npm run build
# --- ENDE BUILD-STUFE ---
################################################################################

# Produktions-Stufe: Mit Nginx ausliefern
FROM nginx:alpine AS final

# Entferne Standard-Nginx-Seite
RUN rm -rf /usr/share/nginx/html/*

# ⛔️ Auf dem VPS kopieren wir direkt aus dem `deploy/`-Ordner.
# Daher brauchst du **den Build-Output aus GitHub Actions (dist/...)**:
#
# ⚠️ Diese Zeile funktioniert nur, wenn du die App lokal gebaut hast (z. B. im deploy-Ordner).
COPY . /usr/share/nginx/html

# Custom Nginx config für Angular Routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Port freigeben
EXPOSE 80

# Starte Nginx im Vordergrund
CMD ["nginx", "-g", "daemon off;"]
