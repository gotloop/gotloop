import * as pulumi from "@pulumi/pulumi";
import { isProduction } from "./src/config";
import { registryUrl } from "./src/registry";
import { apiUrl, wwwUrl, admUrl } from "./src/cloud-run";

// Always provision: networking, registry, database, secrets, Cloud Run services
import "./src/networking";
import "./src/registry";
import "./src/database";
import "./src/secrets";
import "./src/cloud-run";

// Production-only: load balancer, DNS, certificates, Cloud Armor
if (isProduction) {
  const { lbIpAddress } = require("./src/load-balancer");
  const { createDnsRecords } = require("./src/dns");

  // These are imported as side effects (they register resources on import)
  require("./src/certificates");
  require("./src/cloud-armor");

  // Create DNS records pointing to the LB IP
  createDnsRecords(lbIpAddress as pulumi.Output<string>);

  // Export LB IP
  exports.lbIpAddress = lbIpAddress;
}

// Exports
export { registryUrl };
export { apiUrl, wwwUrl, admUrl };
