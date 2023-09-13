import type { Config } from "drizzle-kit";
import { env } from "./env.mjs";

export default {
  schema: "./lib/database/schema.ts",
  out: "./lib/database/migrations",
  breakpoints: true,
  dbCredentials: {
    connectionString: "mysql://root:root@localhost:3306/blogs",
  },
  driver: "mysql2",
} satisfies Config;
