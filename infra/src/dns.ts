import * as gcp from "@pulumi/gcp";
import * as pulumi from "@pulumi/pulumi";
import { project, domain } from "./config";

// Cloud DNS managed zone
export const dnsZone = new gcp.dns.ManagedZone("gotloop-zone", {
  name: "gotloop-zone",
  dnsName: `${domain}.`,
  project,
  description: "DNS zone for gotloop.io",
});

/**
 * Create DNS A records pointing to the load balancer IP.
 */
export function createDnsRecords(lbIpAddress: pulumi.Output<string>) {
  // Apex domain
  new gcp.dns.RecordSet("gotloop-apex", {
    name: `${domain}.`,
    type: "A",
    ttl: 300,
    managedZone: dnsZone.name,
    rrdatas: [lbIpAddress],
    project,
  });

  // Wildcard for subdomains (www, api, adm, www-{sha}, etc.)
  new gcp.dns.RecordSet("gotloop-wildcard", {
    name: `*.${domain}.`,
    type: "A",
    ttl: 300,
    managedZone: dnsZone.name,
    rrdatas: [lbIpAddress],
    project,
  });
}
