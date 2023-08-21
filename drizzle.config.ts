import type { Config } from "drizzle-kit";
import "dotenv/config";

export default {
  schema: "./lib/database/schema.ts",
  out: "./lib/database/migrations",
  breakpoints: true,
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
  driver: "mysql2",
} satisfies Config;
