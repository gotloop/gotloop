import * as gcp from "@pulumi/gcp";
import * as pulumi from "@pulumi/pulumi";
import { project, region, domain } from "./config";
import { apiService, wwwService, admService } from "./cloud-run";
import { securityPolicy } from "./cloud-armor";
import { certificateMap } from "./certificates";

// --- Serverless NEGs ---
const apiNeg = new gcp.compute.RegionNetworkEndpointGroup("api-neg", {
  region,
  project,
  networkEndpointType: "SERVERLESS",
  cloudRun: { service: apiService.name },
});

const wwwNeg = new gcp.compute.RegionNetworkEndpointGroup("www-neg", {
  region,
  project,
  networkEndpointType: "SERVERLESS",
  cloudRun: { service: wwwService.name },
});

const admNeg = admService
  ? new gcp.compute.RegionNetworkEndpointGroup("adm-neg", {
      region,
      project,
      networkEndpointType: "SERVERLESS",
      cloudRun: { service: admService.name },
    })
  : undefined;

// --- Backend Services ---
const apiBackend = new gcp.compute.BackendService("api-backend", {
  project,
  protocol: "HTTP",
  loadBalancingScheme: "EXTERNAL_MANAGED",
  securityPolicy: securityPolicy.id,
  backends: [{ group: apiNeg.id }],
});

const wwwBackend = new gcp.compute.BackendService("www-backend", {
  project,
  protocol: "HTTP",
  loadBalancingScheme: "EXTERNAL_MANAGED",
  securityPolicy: securityPolicy.id,
  backends: [{ group: wwwNeg.id }],
});

const admBackend = admNeg
  ? new gcp.compute.BackendService("adm-backend", {
      project,
      protocol: "HTTP",
      loadBalancingScheme: "EXTERNAL_MANAGED",
      securityPolicy: securityPolicy.id,
      backends: [{ group: admNeg.id }],
    })
  : undefined;

// --- URL Map (host-based routing) ---
const hostRules: gcp.types.input.compute.URLMapHostRule[] = [
  {
    hosts: [`www.${domain}`, domain],
    pathMatcher: "www",
  },
  {
    hosts: [`api.${domain}`],
    pathMatcher: "api",
  },
];

const pathMatchers: gcp.types.input.compute.URLMapPathMatcher[] = [
  {
    name: "www",
    defaultService: wwwBackend.id,
  },
  {
    name: "api",
    defaultService: apiBackend.id,
  },
];

if (admBackend) {
  hostRules.push({
    hosts: [`adm.${domain}`],
    pathMatcher: "adm",
  });
  pathMatchers.push({
    name: "adm",
    defaultService: admBackend.id,
  });
}

const urlMap = new gcp.compute.URLMap("gotloop-url-map", {
  name: "gotloop-url-map",
  project,
  defaultService: wwwBackend.id,
  hostRules,
  pathMatchers,
});

// --- Global IP Address ---
export const globalIp = new gcp.compute.GlobalAddress("gotloop-lb-ip", {
  name: "gotloop-lb-ip",
  project,
});

export const lbIpAddress = globalIp.address;

// --- HTTPS Proxy + Forwarding Rule ---
const httpsProxy = new gcp.compute.TargetHttpsProxy("gotloop-https-proxy", {
  name: "gotloop-https-proxy",
  project,
  urlMap: urlMap.id,
  certificateMap: pulumi.interpolate`//certificatemanager.googleapis.com/${certificateMap.id}`,
});

export const httpsForwardingRule = new gcp.compute.GlobalForwardingRule(
  "gotloop-https-forwarding",
  {
    name: "gotloop-https-forwarding",
    project,
    target: httpsProxy.id,
    ipAddress: globalIp.id,
    portRange: "443",
    loadBalancingScheme: "EXTERNAL_MANAGED",
  }
);

// --- HTTP → HTTPS Redirect ---
const httpRedirectUrlMap = new gcp.compute.URLMap("gotloop-http-redirect", {
  name: "gotloop-http-redirect",
  project,
  defaultUrlRedirect: {
    httpsRedirect: true,
    stripQuery: false,
    redirectResponseCode: "MOVED_PERMANENTLY_DEFAULT",
  },
});

const httpProxy = new gcp.compute.TargetHttpProxy("gotloop-http-proxy", {
  name: "gotloop-http-proxy",
  project,
  urlMap: httpRedirectUrlMap.id,
});

export const httpForwardingRule = new gcp.compute.GlobalForwardingRule(
  "gotloop-http-forwarding",
  {
    name: "gotloop-http-forwarding",
    project,
    target: httpProxy.id,
    ipAddress: globalIp.id,
    portRange: "80",
    loadBalancingScheme: "EXTERNAL_MANAGED",
  }
);
