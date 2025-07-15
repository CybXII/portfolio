# syntax=docker/dockerfile:1

# Definiere Node-Version
ARG NODE_VERSION=22.12.0

################################################################################
# Build-Stufe: Angular App bauen
FROM node:${NODE_VERSION}-alpine AS build

WORKDIR /app

# Abhängigkeiten installieren
COPY package.json package-lock.json ./
RUN npm install

# Restliche Quellcodes kopieren und App bauen
COPY . .
RUN npm run build

################################################################################
# Produktions-Stufe: Mit Nginx ausliefern
FROM nginx:alpine AS final

# Entferne Standard-Nginx-Seite
RUN rm -rf /usr/share/nginx/html/*

# Kopiere Build-Output von Angular nach Nginx-Webroot
COPY --from=build /app/dist/portfolio/browser /usr/share/nginx/html

# Optional: Custom Nginx config für Angular Routing (z. B. Fallback auf index.html)
# (siehe unten für Datei-Inhalt)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Port freigeben
EXPOSE 80

# Starte Nginx im Vordergrund
CMD ["nginx", "-g", "daemon off;"]
