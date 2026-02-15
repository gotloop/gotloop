import * as gcp from "@pulumi/gcp";
import { project, domain } from "./config";

// DNS authorization for certificate validation
export const dnsAuth = new gcp.certificatemanager.DnsAuthorization("gotloop-dns-auth", {
  name: "gotloop-dns-auth",
  domain: domain,
  project,
});

// Google-managed wildcard certificate
export const certificate = new gcp.certificatemanager.Certificate("gotloop-cert", {
  name: "gotloop-cert",
  managed: {
    domains: [domain, `*.${domain}`],
    dnsAuthorizations: [dnsAuth.id],
  },
  project,
});

// Certificate map
export const certificateMap = new gcp.certificatemanager.CertificateMap("gotloop-cert-map", {
  name: "gotloop-cert-map",
  project,
});

// Certificate map entry for apex domain
export const certMapEntryApex = new gcp.certificatemanager.CertificateMapEntry(
  "gotloop-cert-map-entry-apex",
  {
    name: "gotloop-cert-map-entry-apex",
    map: certificateMap.name,
    hostname: domain,
    certificates: [certificate.id],
    project,
  }
);

// Certificate map entry for wildcard
export const certMapEntryWildcard = new gcp.certificatemanager.CertificateMapEntry(
  "gotloop-cert-map-entry-wildcard",
  {
    name: "gotloop-cert-map-entry-wildcard",
    map: certificateMap.name,
    hostname: `*.${domain}`,
    certificates: [certificate.id],
    project,
  }
);
