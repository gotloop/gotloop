import * as gcp from "@pulumi/gcp";
import * as pulumi from "@pulumi/pulumi";
import { project, region, resourcePrefix } from "./config";

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

// Direct VPC Egress subnet for Cloud Run → Cloud SQL
// Cloud Run uses this subnet directly instead of a VPC Access Connector,
// eliminating the need for always-on connector VMs.
export const vpcEgressSubnet = new gcp.compute.Subnetwork(`${resourcePrefix}gotloop-vpc-egress`, {
  ipCidrRange: "10.8.0.0/28",
  region,
  network: network.id,
  project,
});
