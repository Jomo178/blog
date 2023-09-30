import { InferSelectModel, eq } from "drizzle-orm";
import { db } from "./database";
import { users } from "./database/schema";
import { OmitedUserSchema } from "@/types";

export const databse = {
  createUser: async (userData: OmitedUserSchema) => {
    await db.insert(users).values({
      ...userData,
    });

    const user = await db
      .select()
      .from(users)
      .where(eq(users.email, userData.email))
      .limit(1);

    return user[0];
  },
  getUserByEmail: async (email: string) => {
    const user = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    return user[0];
  },
};
