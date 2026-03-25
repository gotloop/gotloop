import * as gcp from "@pulumi/gcp";
import { project } from "./config";

export const securityPolicy = new gcp.compute.SecurityPolicy("gotloop-cloud-armor", {
  name: "gotloop-cloud-armor",
  project,
  description: "Cloud Armor security policy for GotLoop",

  rules: [
    // Default allow rule
    {
      action: "allow",
      priority: 2147483647,
      match: {
        versionedExpr: "SRC_IPS_V1",
        config: {
          srcIpRanges: ["*"],
        },
      },
      description: "Default allow all traffic",
    },
    // Rate limiting: 100 req/min per IP (free — no per-request WAF cost)
    {
      action: "rate_based_ban",
      priority: 1000,
      match: {
        versionedExpr: "SRC_IPS_V1",
        config: {
          srcIpRanges: ["*"],
        },
      },
      rateLimitOptions: {
        conformAction: "allow",
        exceedAction: "deny(429)",
        rateLimitThreshold: {
          count: 100,
          intervalSec: 60,
        },
        enforceOnKey: "IP",
        banDurationSec: 60,
      },
      description: "Rate limit: 100 req/min per IP",
    },
  ],
});
