import * as pulumi from "@pulumi/pulumi";

const config = new pulumi.Config("gotloop");

export const environment = config.require("environment");
export const domain = config.require("domain");
export const imageTag = config.get("imageTag") || "latest";
export const commitSha = config.get("commitSha") || "";
export const cloudSqlTier = config.get("cloudSqlTier") || "db-f1-micro";
export const minInstances = parseInt(config.get("minInstances") || "0", 10);
export const maxInstances = parseInt(config.get("maxInstances") || "2", 10);

export const gcpConfig = new pulumi.Config("gcp");
export const project = gcpConfig.require("project");
export const region = gcpConfig.require("region");

export const isProduction = environment === "production";
export const isStaging = environment === "staging";

/** Prefix for resource names in staging (e.g. "staging-pr-42") */
export const resourcePrefix = isProduction ? "" : `${environment}-`;

/** Short commit SHA for subdomain routing */
export const sha7 = commitSha.substring(0, 7);
