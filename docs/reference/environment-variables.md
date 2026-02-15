# Environment Variables

## Docker Build

| Variable | Default | Description |
|---|---|---|
| `NODE_VERSION` | `24` | Node.js major version used in Docker image base (`node:{version}-slim`). Passed as a build arg to the Dockerfile. |

## S3 / MinIO

| Variable | Default | Description |
|---|---|---|
| `MINIO_ROOT_USER` | — | Root user for MinIO (S3-compatible object storage). |
| `MINIO_ROOT_PASSWORD` | — | Root password for MinIO. |

## PostgreSQL

| Variable | Default | Description |
|---|---|---|
| `POSTGRES_USER` | `gotloop` | PostgreSQL user. |
| `POSTGRES_PASSWORD` | — | PostgreSQL password. |
| `POSTGRES_DB` | `gotloop` | PostgreSQL database name. |
| `DATABASE_URL` | — | Full connection string. Composed automatically in docker-compose as `postgresql://{user}:{password}@dat:5432/{db}`. |

## Application

| Variable | Default | Description |
|---|---|---|
| `DEV_LOCALE` | `fr_fr` | Locale used in development. |
| `WATCH_MODE` | `false` | Enable file watching in development. |
| `GOOGLE_API_KEY` | — | Google API key (used by the `googleapis` dependency). |

## Runtime (Cloud Run / Docker)

| Variable | Default | Description |
|---|---|---|
| `PORT` | `3000` (api) / `4000` (www) | Port the application listens on. Cloud Run sets this automatically. |
| `HOST` | `localhost` | Host the API server binds to. Set to `0.0.0.0` in containers. |
