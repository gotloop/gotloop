import * as gcp from "@pulumi/gcp";
import * as pulumi from "@pulumi/pulumi";
import { project, resourcePrefix } from "./config";
import { databaseUrl } from "./database";

const config = new pulumi.Config("gotloop");

// Secret: DATABASE_URL
export const databaseUrlSecret = new gcp.secretmanager.Secret(
  `${resourcePrefix}database-url`,
  {
    secretId: `${resourcePrefix}database-url`,
    replication: { auto: {} },
    project,
  }
);

export const databaseUrlSecretVersion = new gcp.secretmanager.SecretVersion(
  `${resourcePrefix}database-url-version`,
  {
    secret: databaseUrlSecret.id,
    secretData: databaseUrl,
  }
);

// Secret: GOOGLE_API_KEY (optional — only created if set in config)
const googleApiKey = config.getSecret("googleApiKey");

export const googleApiKeySecret = googleApiKey
  ? new gcp.secretmanager.Secret(`${resourcePrefix}google-api-key`, {
      secretId: `${resourcePrefix}google-api-key`,
      replication: { auto: {} },
      project,
    })
  : undefined;

export const googleApiKeySecretVersion =
  googleApiKeySecret && googleApiKey
    ? new gcp.secretmanager.SecretVersion(
        `${resourcePrefix}google-api-key-version`,
        {
          secret: googleApiKeySecret.id,
          secretData: googleApiKey,
        }
      )
    : undefined;

/**
 * Grant a Cloud Run service account access to the secrets.
 */
export function grantSecretAccess(
  name: string,
  serviceAccountEmail: pulumi.Output<string>
) {
  new gcp.secretmanager.SecretIamMember(`${name}-db-url-access`, {
    secretId: databaseUrlSecret.id,
    role: "roles/secretmanager.secretAccessor",
    member: pulumi.interpolate`serviceAccount:${serviceAccountEmail}`,
    project,
  });

  if (googleApiKeySecret) {
    new gcp.secretmanager.SecretIamMember(`${name}-google-api-key-access`, {
      secretId: googleApiKeySecret.id,
      role: "roles/secretmanager.secretAccessor",
      member: pulumi.interpolate`serviceAccount:${serviceAccountEmail}`,
      project,
    });
  }
}
