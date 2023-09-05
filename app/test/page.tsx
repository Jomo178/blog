import { db } from "@/lib/database";
import { verificationTokens } from "@/lib/database/schema";
import { InferSelectModel, eq } from "drizzle-orm";

type test = InferSelectModel<typeof verificationTokens>;

async function page() {
  const users = await db
    .select()
    .from(verificationTokens)
    .where(eq(verificationTokens.identifier, "shadmehrshahbazi79@gmail.com"))
    .limit(1);
  return (
    <div>
      {users.map((user) => (
        <>
          <p>{user.token}</p>
          <p>{user.identifier}</p>
          <p>{user.expires.toString()}</p>
        </>
      ))}
    </div>
  );
}

export default page;
