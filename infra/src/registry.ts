import { project, region } from "./config";

// Artifact Registry is created manually (not managed by Pulumi)
// See docs/how-to/setup-cd.md for setup instructions
export const registryUrl = `${region}-docker.pkg.dev/${project}/gotloop`;
