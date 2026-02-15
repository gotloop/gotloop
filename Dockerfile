ARG NODE_VERSION=24
FROM node:${NODE_VERSION}-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app

FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm exec nx run-many -t build

ARG NODE_VERSION=24
FROM node:${NODE_VERSION}-slim AS api
WORKDIR /app
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/dist/apps/api /app/dist/apps/api
EXPOSE 3000
CMD [ "node", "dist/apps/api/main.js" ]

ARG NODE_VERSION=24
FROM node:${NODE_VERSION}-slim AS www
WORKDIR /app
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/dist/apps/www /app/dist/apps/www
EXPOSE 4000
CMD [ "node", "dist/apps/www/server/server.mjs" ]

FROM nginx:alpine AS adm
COPY --from=build /app/dist/apps/adm/browser /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
