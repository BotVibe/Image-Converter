# This app is a *static* browser bundle, not a Node service. app.js contains bare
# imports (@jsquash/*) that only Vite can resolve — running it with `node app.js`
# fails with ERR_MODULE_NOT_FOUND. Build with Vite, then serve dist/ with nginx.

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
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
