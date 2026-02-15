# Getting Started

Local development setup for GotLoop.

## Prerequisites

- [Node.js 24](https://nodejs.org/) (LTS)
- [pnpm](https://pnpm.io/installation)
- [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/)

## Install dependencies

```bash
pnpm install
```

## Running apps locally

Serve a single app:

```bash
npx nx serve www        # main site (Angular SSR)
npx nx serve api        # backend (Fastify)
npx nx serve adm        # admin panel
```

Serve the SSR dev server:

```bash
npx nx run www:serve-ssr
```

## Running with Docker

1. Copy the environment file and fill in your values:

   ```bash
   cp .env.dist .env
   ```

2. Add the following entries to your `/etc/hosts` file:

   ```
   127.0.0.1 *.gotloop.local
   127.0.0.1 api.gotloop.local
   127.0.0.1 www.gotloop.local
   127.0.0.1 adm.gotloop.local
   127.0.0.1 bin.gotloop.local
   ```

3. Launch the stack:

   ```bash
   docker-compose up
   ```

## Common Nx commands

```bash
npx nx build www               # build a specific app
npx nx test www                # run unit tests for an app
npx nx lint api                # lint a specific project
npx nx e2e www-e2e             # run e2e tests

npx nx run-many -t build       # build all projects
npx nx run-many -t test        # test all projects
npx nx affected -t test        # test only affected projects

npx nx graph                   # visualize the dependency graph
npx nx format:write            # format the codebase with prettier
```
