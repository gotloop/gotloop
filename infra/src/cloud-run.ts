import * as gcp from "@pulumi/gcp";
import * as pulumi from "@pulumi/pulumi";
import {
  project,
  region,
  resourcePrefix,
  imageTag,
  minInstances,
  maxInstances,
  isProduction,
} from "./config";
import { registryUrl } from "./registry";
import { vpcConnector } from "./networking";
import {
  databaseUrlSecret,
  databaseUrlSecretVersion,
  googleApiKeySecret,
  googleApiKeySecretVersion,
  grantSecretAccess,
} from "./secrets";

/** Dedicated service account for Cloud Run services */
const cloudRunSa = new gcp.serviceaccount.Account(`${resourcePrefix}cloud-run-sa`, {
  accountId: `${resourcePrefix}cloud-run`,
  displayName: "GotLoop Cloud Run Service Account",
  project,
});

// No suffix needed: each PR gets its own Pulumi stack, so service names
// are already unique via the resourcePrefix (e.g. "staging-api", "staging-www").

// --- API Service ---
const apiDependencies: pulumi.Resource[] = [databaseUrlSecretVersion];
if (googleApiKeySecretVersion) apiDependencies.push(googleApiKeySecretVersion);

export const apiService = new gcp.cloudrunv2.Service(
  `${resourcePrefix}api`,
  {
    name: `${resourcePrefix}api`,
    location: region,
    project,
    deletionProtection: false,
    ingress: isProduction ? "INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER" : "INGRESS_TRAFFIC_ALL",
    template: {
      serviceAccount: cloudRunSa.email,
      scaling: {
        minInstanceCount: minInstances,
        maxInstanceCount: maxInstances,
      },
      vpcAccess: {
        connector: vpcConnector.id,
        egress: "PRIVATE_RANGES_ONLY",
      },
      containers: [
        {
          image: pulumi.interpolate`${registryUrl}/api:${imageTag}`,
          ports: { containerPort: 3000 },
          envs: [
            { name: "HOST", value: "0.0.0.0" },
            {
              name: "DATABASE_URL",
              valueSource: {
                secretKeyRef: {
                  secret: databaseUrlSecret.secretId,
                  version: "latest",
                },
              },
            },
            ...(googleApiKeySecret
              ? [
                  {
                    name: "GOOGLE_API_KEY",
                    valueSource: {
                      secretKeyRef: {
                        secret: googleApiKeySecret.secretId,
                        version: "latest",
                      },
                    },
                  },
                ]
              : []),
          ],
          resources: {
            limits: {
              cpu: "1",
              memory: "512Mi",
            },
          },
        },
      ],
    },
  },
  { dependsOn: apiDependencies }
);

// Grant secret access to the Cloud Run service account
grantSecretAccess(`${resourcePrefix}cloud-run`, cloudRunSa.email);

// Make API publicly accessible (IAM invoker)
const apiInvoker = new gcp.cloudrunv2.ServiceIamMember(`${resourcePrefix}api-invoker`, {
  name: apiService.name,
  location: region,
  project,
  role: "roles/run.invoker",
  member: "allUsers",
});

// --- WWW Service ---
export const wwwService = new gcp.cloudrunv2.Service(`${resourcePrefix}www`, {
  name: `${resourcePrefix}www`,
  location: region,
  project,
  deletionProtection: false,
  ingress: isProduction ? "INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER" : "INGRESS_TRAFFIC_ALL",
  template: {
    serviceAccount: cloudRunSa.email,
    scaling: {
      minInstanceCount: minInstances,
      maxInstanceCount: maxInstances,
    },
    containers: [
      {
        image: pulumi.interpolate`${registryUrl}/www:${imageTag}`,
        ports: { containerPort: 4000 },
        envs: [{ name: "HOST", value: "0.0.0.0" }],
        resources: {
          limits: {
            cpu: "1",
            memory: "512Mi",
          },
        },
      },
    ],
  },
});

const wwwInvoker = new gcp.cloudrunv2.ServiceIamMember(`${resourcePrefix}www-invoker`, {
  name: wwwService.name,
  location: region,
  project,
  role: "roles/run.invoker",
  member: "allUsers",
});

// --- ADM Service (production only) ---
export const admService = isProduction
  ? new gcp.cloudrunv2.Service(`adm`, {
      name: "adm",
      location: region,
      project,
      deletionProtection: false,
      ingress: "INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER",
      template: {
        scaling: {
          minInstanceCount: 0,
          maxInstanceCount: 2,
        },
        containers: [
          {
            image: pulumi.interpolate`${registryUrl}/adm:${imageTag}`,
            ports: { containerPort: 80 },
            resources: {
              limits: {
                cpu: "1",
                memory: "512Mi",
              },
            },
          },
        ],
      },
    })
  : undefined;

if (admService) {
  new gcp.cloudrunv2.ServiceIamMember("adm-invoker", {
    name: admService.name,
    location: region,
    project,
    role: "roles/run.invoker",
    member: "allUsers",
  });
}

// Export Cloud Run URLs
export const apiUrl = apiService.uri;
export const wwwUrl = wwwService.uri;
export const admUrl = admService?.uri;
