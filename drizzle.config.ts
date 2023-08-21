import type { Config } from "drizzle-kit";
import { env } from "./env.mjs";

export default {
  schema: "./lib/database/schema.ts",
  out: "./lib/database/migrations",
  breakpoints: true,
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
  driver: "mysql2",
} satisfies Config;
