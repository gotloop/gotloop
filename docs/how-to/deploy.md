# Deployment Plan: GotLoop on GCP with Pulumi, Nx & GitHub Actions

## Current State

- **Apps**: `www` (Angular SSR), `api` (Fastify), `adm` (Angular SPA)
- **Libs**: `simpl`, `api-model`
- **Existing**: Dockerfile (multi-stage, multi-target), basic CI, empty `infra/` dir, docker-compose for local dev
- **Database**: PostgreSQL (Cloud SQL in prod, local container in dev)

---

## Phase 1: Per-App Dockerfiles (for module federation)

When splitting into independent deploy units, move to per-app Dockerfiles:

```
apps/
  api/Dockerfile
  www/Dockerfile
  adm/Dockerfile
```

Tag images as `gcr.io/<PROJECT_ID>/<app>:${COMMIT_SHA}` and `:latest`.

---

## Phase 2: GCP Infrastructure with Pulumi (in `infra/`)

### Stack structure

```
infra/
  Pulumi.yaml
  Pulumi.staging.yaml
  Pulumi.production.yaml
  index.ts
  src/
    networking.ts      # VPC, subnets, Cloud DNS
    registry.ts        # Artifact Registry
    cloud-run.ts       # Cloud Run services (per app)
    load-balancer.ts   # External HTTPS LB
    cloud-armor.ts     # Cloud Armor WAF policies
    dns.ts             # DNS records (www, www-{sha}, api, adm)
    secrets.ts         # Secret Manager references
    database.ts        # Cloud SQL (PostgreSQL)
    storage.ts         # Cloud Storage (replaces MinIO in prod)
```

### GCP services to provision

| Concern | GCP Service | Notes |
|---|---|---|
| Container registry | **Artifact Registry** | replaces gcr.io, regional |
| Compute | **Cloud Run** (v2) | per-app service, auto-scales to 0 |
| Load balancer | **External Application LB** | L7, HTTPS, host-based routing |
| WAF | **Cloud Armor** | attach to LB backend services |
| DNS | **Cloud DNS** | managed zone for `gotloop.com` |
| TLS | **Certificate Manager** | managed certs, wildcard `*.gotloop.com` |
| Secrets | **Secret Manager** | API keys, DB creds, MinIO keys |
| Object storage | **Cloud Storage** | replaces MinIO for prod |
| Database | **Cloud SQL** (PostgreSQL) | managed PostgreSQL, private IP via VPC connector |
| CDN | **Cloud CDN** | enable on LB for static assets |

### URL routing on the Load Balancer

```
Production:
  www.gotloop.com        -> Cloud Run: www (latest)
  api.gotloop.com        -> Cloud Run: api (latest)
  adm.gotloop.com        -> Cloud Run: adm (latest)

Staging (per-PR):
  www-{sha7}.gotloop.com -> Cloud Run: www-{sha7} (revision)
  api-{sha7}.gotloop.com -> Cloud Run: api-{sha7} (revision)
```

### Cloud Armor (WAF) policy considerations

- Rate limiting rules (per-IP)
- OWASP ModSecurity CRS (preconfigured rules)
- Geo-blocking if needed
- Bot management
- Attach policy to each backend service on the LB

---

## Phase 3: GitHub Actions Workflows

Three workflows needed:

### 1. `.github/workflows/ci.yml` (existing, enhance)

- Trigger: all PRs and pushes
- Run: `nx affected -t lint test build`
- No deploy, fast feedback

### 2. `.github/workflows/deploy-staging.yml`

```
Trigger: pull_request (opened, synchronize)

Steps:
  1. Checkout (full depth for nx affected)
  2. Setup pnpm + node
  3. Determine affected apps: nx show projects --affected --type=app
  4. Build only affected apps
  5. For each affected app:
     a. docker build --target <app> -t <registry>/<app>:${SHA7}
     b. docker push
  6. pulumi up --stack staging
     - Inputs: COMMIT_SHA, affected apps list
     - Creates/updates Cloud Run revisions
     - Updates LB URL map for www-{sha7}.* hosts
  7. Post PR comment with staging URLs
  8. Run e2e against staging URLs (optional)
```

### 3. `.github/workflows/deploy-production.yml`

```
Trigger: push to master (after PR merge)

Steps:
  1. Checkout
  2. Determine affected apps (since last deploy tag)
  3. Build + push images tagged :latest and :{sha}
  4. pulumi up --stack production
     - Routes www.gotloop.com to new revision
  5. Cleanup old staging Cloud Run revisions for merged PR
  6. Tag release
```

### GitHub Secrets needed

| Secret | Purpose |
|---|---|
| `GCP_PROJECT_ID` | GCP project |
| `GCP_SA_KEY` or `GCP_WORKLOAD_IDENTITY_PROVIDER` | Auth (prefer Workload Identity Federation) |
| `PULUMI_ACCESS_TOKEN` | Pulumi Cloud state backend |
| `GOOGLE_API_KEY` | App runtime secret |
| `MINIO_ROOT_USER` / `MINIO_ROOT_PASSWORD` | Object storage (or migrate to GCS) |
| `DATABASE_URL` | PostgreSQL connection string |

**Strongly recommend Workload Identity Federation** over SA key files — no secret rotation needed, more secure.

---

## Phase 4: Nx Integration Points

Add `docker` and `deploy` targets to each app's `project.json`:

```json
{
  "targets": {
    "docker": {
      "executor": "nx:run-commands",
      "options": {
        "command": "docker build -f apps/{app}/Dockerfile -t gcr.io/$PROJECT/{app}:$SHA ."
      },
      "dependsOn": ["build"]
    },
    "deploy": {
      "executor": "nx:run-commands",
      "options": {
        "command": "pulumi up --stack {stack} --yes"
      },
      "dependsOn": ["docker"]
    }
  }
}
```

This lets you run `nx affected -t docker deploy` and only build/deploy what changed.

---

## Phase 5: Module Federation Preparation

For the long-term goal of independent deploys per module:

1. **Angular side** — use `@angular-architects/native-federation` (works with Angular 21, framework-agnostic, based on import maps rather than webpack)
2. **Architecture**:
   ```
   Shell (www) — host app, loads remotes dynamically
     +-- remote: loop-editor (could become its own app)
     +-- remote: noizr (could become its own app)
     +-- remote: loops-list
     +-- remote: adm (already separate)
   ```
3. **Each remote** gets its own:
   - Dockerfile
   - Cloud Run service
   - Independent deploy pipeline
   - URL: `{module}-{sha}.gotloop.com` (staging) / `{module}.gotloop.com` (prod)
4. **The shell** loads remotes via a **manifest/registry** that maps module names to URLs, updated at deploy time
5. **Shared deps** (`@angular/core`, `rxjs`, `@ngrx/*`) declared as singletons to avoid duplication

---

## Phase 6: Staging Cleanup

Ephemeral staging environments accumulate. Handle this with:

- **GitHub Action on PR close**: `pulumi destroy --stack staging-{sha}` or delete Cloud Run revisions
- **TTL-based cleanup**: cron job that deletes staging revisions older than N days
- **Cloud Run min-instances: 0** so idle staging envs cost nothing in compute (you still pay for Artifact Registry storage)

---

## Phase 7: Local Envoy Proxy (optional, for prod parity)

Add an Envoy proxy to docker-compose to replicate the GCP Application Load Balancer locally. This is useful for testing host-based routing, path rewrites, CORS headers, and Cloud Armor-like rules before deploying.

### Files to add

```
infra/
  envoy/
    envoy.yaml          # Envoy configuration
    docker-compose.envoy.yml  # Override file to layer Envoy on top
```

### What Envoy replaces

The GCP External Application LB is Envoy-based. Running it locally lets you test:
- Host-based routing (`www.gotloop.local`, `api.gotloop.local`, `adm.gotloop.local`)
- The `www-{sha}.gotloop.local` staging URL pattern
- Rate limiting (local equivalent of Cloud Armor rules)
- Health check paths
- CORS and security headers

### Envoy configuration outline

```yaml
# envoy.yaml
static_resources:
  listeners:
    - address:
        socket_address: { address: 0.0.0.0, port_value: 80 }
      filter_chains:
        - filters:
            - name: envoy.filters.network.http_connection_manager
              typed_config:
                route_config:
                  virtual_hosts:
                    - name: www
                      domains: ["www.gotloop.local", "www-*.gotloop.local"]
                      routes:
                        - match: { prefix: "/" }
                          route: { cluster: www }
                    - name: api
                      domains: ["api.gotloop.local", "api-*.gotloop.local"]
                      routes:
                        - match: { prefix: "/" }
                          route: { cluster: api }
                    - name: adm
                      domains: ["adm.gotloop.local"]
                      routes:
                        - match: { prefix: "/" }
                          route: { cluster: adm }
  clusters:
    - name: www
      load_assignment:
        endpoints:
          - lb_endpoints:
              - endpoint:
                  address:
                    socket_address: { address: www, port_value: 4000 }
    - name: api
      load_assignment:
        endpoints:
          - lb_endpoints:
              - endpoint:
                  address:
                    socket_address: { address: api, port_value: 3000 }
    - name: adm
      load_assignment:
        endpoints:
          - lb_endpoints:
              - endpoint:
                  address:
                    socket_address: { address: adm, port_value: 80 }
```

### Usage

Run with the Envoy overlay when you need LB-level testing:

```bash
# Default: no proxy, direct port access
docker compose up

# With Envoy: host-based routing on port 80
docker compose -f docker-compose.yml -f infra/envoy/docker-compose.envoy.yml up
```

Add to `/etc/hosts`:
```
127.0.0.1 www.gotloop.local api.gotloop.local adm.gotloop.local
```

### When to add this

After the GCP LB is configured in Pulumi (Phase 2). Mirror the Pulumi LB URL map config into `envoy.yaml` so local and prod routing stay in sync. This becomes especially valuable once module federation adds more services and routing complexity.

---

## Key Considerations & Gotchas

1. **Wildcard TLS cert** — you need `*.gotloop.com` via Certificate Manager for `www-{sha}.gotloop.com` to work without per-PR cert provisioning
2. **DNS propagation** — use a wildcard DNS record `*.gotloop.com -> LB IP` so any `www-{sha}` subdomain resolves immediately. The LB URL map handles routing to the right Cloud Run revision
3. **Cloud Run concurrency** — set appropriately for SSR (Angular SSR is single-threaded per request, set concurrency to ~80)
4. **Environment variables at runtime** — inject via Cloud Run env vars or Secret Manager references, NOT baked into Docker images
5. **Build cache** — use GitHub Actions cache for `node_modules` (pnpm store) AND Docker layer cache (`docker/build-push-action` with `cache-from` / `cache-to`)
6. **Nx Cloud** — consider enabling (commented out in CI) for distributed task execution and remote caching, especially once module federation multiplies build targets
7. **Cloud SQL (PostgreSQL)** — use Cloud SQL with private IP via a Serverless VPC Connector for Cloud Run. Enable automated backups, point-in-time recovery, and high availability for production. For staging, a single smaller instance is sufficient
8. **MinIO -> Cloud Storage** — in prod, replace MinIO with GCS. Keep MinIO for local dev only. App code should use an abstraction layer (or the S3-compatible API since GCS supports it via interop)
9. **Cost control** — Cloud Run scale-to-zero is your friend for staging. Set `max-instances: 1` for staging, higher for prod

---

## Recommended Implementation Order

1. Set up GCP project + Workload Identity Federation for GitHub Actions
2. Set up Artifact Registry
3. Write Pulumi stack for a single app (`api`) — get the Cloud Run + LB + DNS loop working
4. Extend to `www` and `adm`
5. Add staging workflow (PR-based ephemeral deploys)
6. Add production workflow (merge-to-master)
7. Add cleanup workflow (PR close)
8. Add Cloud Armor WAF policies
9. Later: migrate to module federation, split remotes into independent deploy units
