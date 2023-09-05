import { InferSelectModel, eq } from "drizzle-orm";
import { db } from "./database";
import { users } from "./database/schema";

export const databse = {
  createUser: async (userData: InferSelectModel<typeof users>) => {
    await db.insert(users).values({
      ...userData,
      id: crypto.randomUUID(),
    });

    await db
      .select()
      .from(users)
      .where(eq(users.email, userData.email))
      .limit(1)
      .then((res) => res[0]);
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
