import type { Config } from "drizzle-kit";
import { env } from "./env.mjs";

export default {
  schema: "./lib/database/schema.ts",
  out: "./lib/database/migrations",
  breakpoints: true,
  dbCredentials: {
    connectionString: "mysql://root:HalloHallo1@localhost:3306/blog",
  },
  driver: "mysql2",
} satisfies Config;
