import * as gcp from "@pulumi/gcp";
import * as pulumi from "@pulumi/pulumi";
import { project, region, resourcePrefix, isProduction } from "./config";

// VPC Network
export const network = new gcp.compute.Network(`${resourcePrefix}gotloop-vpc`, {
  autoCreateSubnetworks: false,
  project,
});

// Subnet
export const subnet = new gcp.compute.Subnetwork(`${resourcePrefix}gotloop-subnet`, {
  ipCidrRange: "10.0.0.0/24",
  region,
  network: network.id,
  project,
});

// Private IP range for Cloud SQL peering
const privateIpRange = new gcp.compute.GlobalAddress(`${resourcePrefix}gotloop-private-ip`, {
  purpose: "VPC_PEERING",
  addressType: "INTERNAL",
  prefixLength: 16,
  network: network.id,
  project,
});

// VPC peering for Cloud SQL
export const vpcPeering = new gcp.servicenetworking.Connection(`${resourcePrefix}gotloop-vpc-peering`, {
  network: network.id,
  service: "servicenetworking.googleapis.com",
  reservedPeeringRanges: [privateIpRange.name],
});

// VPC Access Connector for Cloud Run → Cloud SQL
export const vpcConnector = new gcp.vpcaccess.Connector(`${resourcePrefix}gl-conn`, {
  name: isProduction ? "gl-connector" : `stg-gl-conn`,
  region,
  ipCidrRange: "10.8.0.0/28",
  network: network.name,
  machineType: "e2-micro",
  minInstances: 2,
  maxInstances: 3,
  project,
});
