import type { Config } from "drizzle-kit";
import { env } from "./env.mjs";

export default {
  schema: "./lib/database/schema.ts",
  out: "./lib/database/migrations",
  breakpoints: true,
  dbCredentials: {
    connectionString:
      "mysql://root:QkFNkqIUVIoKMy0JihyW@containers-us-west-98.railway.app:6678/railway",
  },
  driver: "mysql2",
} satisfies Config;
