# syntax=docker/dockerfile:1
#
# This app is a *static* browser bundle, not a Node service. app.js contains bare
# imports (@jsquash/*) that only Vite can resolve — running it with `node app.js`
# fails with ERR_MODULE_NOT_FOUND. Build with Vite, then serve dist/ with nginx.
#
# CI publishes this image to ghcr.io/botvibe/image-converter
# (.github/workflows/docker-publish.yml); deploy/compose.yml pulls it behind Caddy.

# ---- Build ----
FROM node:22-alpine AS build
WORKDIR /app

# --omit=dev keeps vite (a runtime dependency here) but skips Playwright,
# so no browser download runs during the image build.
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY . .
RUN npm run build

# ---- Serve ----
FROM nginx:1.27-alpine

ARG APP_REVISION=unknown
LABEL org.opencontainers.image.revision=$APP_REVISION

COPY nginx.conf /etc/nginx/conf.d/default.conf
# Bake the revision into the X-App-Revision response header.
RUN sed -i "s/__APP_REVISION__/${APP_REVISION}/g" /etc/nginx/conf.d/default.conf \
 && nginx -t
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://127.0.0.1/healthz || exit 1
