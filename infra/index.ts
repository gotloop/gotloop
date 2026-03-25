import * as pulumi from "@pulumi/pulumi";
import { isProduction } from "./src/config";
import { registryUrl } from "./src/registry";
import { apiUrl, wwwUrl, admUrl } from "./src/cloud-run";

// Always provision: networking, registry, database, secrets, Cloud Run services
import "./src/networking";
import "./src/database";
import "./src/secrets";
import "./src/cloud-run";

// Production-only: load balancer, certificates, Cloud Armor
// DNS is managed externally — see setup guide for required A and CNAME records
if (isProduction) {
  const { lbIpAddress } = require("./src/load-balancer");

  // These are imported as side effects (they register resources on import)
  require("./src/certificates");
  require("./src/cloud-armor");

  // Export LB IP (needed to configure external DNS)
  exports.lbIpAddress = lbIpAddress;
}

// Exports
export { registryUrl };
export { apiUrl, wwwUrl, admUrl };
