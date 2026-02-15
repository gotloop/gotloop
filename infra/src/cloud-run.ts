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
  sha7,
} from "./config";
import { registryUrl } from "./registry";
import { vpcConnector } from "./networking";
import { databaseUrlSecret, googleApiKeySecret, grantSecretAccess } from "./secrets";

/** Dedicated service account for Cloud Run services */
const cloudRunSa = new gcp.serviceaccount.Account(`${resourcePrefix}cloud-run-sa`, {
  accountId: `${resourcePrefix}cloud-run`,
  displayName: "GotLoop Cloud Run Service Account",
  project,
});

/** Service name suffix for staging per-PR deploys */
const serviceSuffix = sha7 ? `-${sha7}` : "";

// --- API Service ---
export const apiService = new gcp.cloudrunv2.Service(`${resourcePrefix}api${serviceSuffix}`, {
  name: `${resourcePrefix}api${serviceSuffix}`,
  location: region,
  project,
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
          {
            name: "DATABASE_URL",
            valueSource: {
              secretKeyRef: {
                secret: databaseUrlSecret.secretId,
                version: "latest",
              },
            },
          },
          {
            name: "GOOGLE_API_KEY",
            valueSource: {
              secretKeyRef: {
                secret: googleApiKeySecret.secretId,
                version: "latest",
              },
            },
          },
        ],
        resources: {
          limits: {
            cpu: isProduction ? "1" : "0.5",
            memory: isProduction ? "512Mi" : "256Mi",
          },
        },
      },
    ],
  },
});

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
export const wwwService = new gcp.cloudrunv2.Service(`${resourcePrefix}www${serviceSuffix}`, {
  name: `${resourcePrefix}www${serviceSuffix}`,
  location: region,
  project,
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
        resources: {
          limits: {
            cpu: isProduction ? "1" : "0.5",
            memory: isProduction ? "512Mi" : "256Mi",
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
                memory: "256Mi",
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
