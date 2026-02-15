import * as gcp from "@pulumi/gcp";
import * as random from "@pulumi/random";
import * as pulumi from "@pulumi/pulumi";
import { project, region, resourcePrefix, isProduction, cloudSqlTier } from "./config";
import { network, vpcPeering } from "./networking";

// Random password for the database user
const dbPassword = new random.RandomPassword(`${resourcePrefix}gotloop-db-password`, {
  length: 32,
  special: false,
});

// Cloud SQL PostgreSQL instance
export const sqlInstance = new gcp.sql.DatabaseInstance(
  `${resourcePrefix}gotloop-db`,
  {
    databaseVersion: "POSTGRES_16",
    region,
    project,
    settings: {
      tier: cloudSqlTier,
      availabilityType: isProduction ? "REGIONAL" : "ZONAL",
      backupConfiguration: {
        enabled: isProduction,
        pointInTimeRecoveryEnabled: isProduction,
        startTime: "03:00",
      },
      ipConfiguration: {
        ipv4Enabled: false,
        privateNetwork: network.id,
      },
      insightsConfig: {
        queryInsightsEnabled: isProduction,
      },
    },
    deletionProtection: isProduction,
  },
  { dependsOn: [vpcPeering] }
);

// Database
export const database = new gcp.sql.Database(`${resourcePrefix}gotloop-database`, {
  instance: sqlInstance.name,
  name: "gotloop",
  project,
});

// Database user
export const dbUser = new gcp.sql.User(`${resourcePrefix}gotloop-db-user`, {
  instance: sqlInstance.name,
  name: "gotloop",
  password: dbPassword.result,
  project,
});

// Compose the DATABASE_URL
export const databaseUrl = pulumi.interpolate`postgresql://gotloop:${dbPassword.result}@${sqlInstance.privateIpAddress}/gotloop`;
