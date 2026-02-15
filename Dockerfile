FROM node:20-slim AS base
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

FROM base as api
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/dist/apps/api /app/dist/apps/api
EXPOSE 3000
CMD [ "node", "dist/apps/api/main.js" ]

FROM base as www
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/dist/apps/www /app/dist/apps/wwww
EXPOSE 4200
CMD [ "node", "dist/apps/www/main.js" ]
