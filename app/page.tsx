import { db } from "@/lib/database";
import { user } from "@/lib/database/schema";

export default async function Home() {
  const users = await db.select().from(user);

  const createUser = async () => {
    "use server";

    await db.insert(user).values({ fullName: "John Doe" });
  };

  return (
    <>
      <p>my users:</p>
      {users.map((user) => (
        <div key={user.id}>{user.fullName}</div>
      ))}

      <form action={createUser}>
        <button>create user</button>
      </form>
    </>
  );
}
