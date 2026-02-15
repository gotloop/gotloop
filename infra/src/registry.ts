import * as gcp from "@pulumi/gcp";
import * as pulumi from "@pulumi/pulumi";
import { project, region } from "./config";

export const registry = new gcp.artifactregistry.Repository("gotloop", {
  repositoryId: "gotloop",
  format: "DOCKER",
  location: region,
  project,
  description: "GotLoop Docker images",
});

export const registryUrl = pulumi.interpolate`${region}-docker.pkg.dev/${project}/gotloop`;
