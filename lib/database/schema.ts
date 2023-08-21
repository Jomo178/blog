import { mysqlTable, serial, text } from "drizzle-orm/mysql-core";

export const user = mysqlTable("user", {
  id: serial("id").primaryKey(),
  fullName: text("full_name"),
});
