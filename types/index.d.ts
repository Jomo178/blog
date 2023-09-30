import { users } from "@/lib/database/schema";
import { type InferSelectModel, type InferInsertModel } from "drizzle-orm";

export type NavbarItems = {
  name: string;
  href: string;
};

export type CredentialsAuthorization =
  | {
      email: string;
      password: string;
      redirect: string;
      callbackUrl: string;
      csrfToken: string;
      json: string;
    }
  | undefined;

type SelectUser = InferSelectModel<typeof users>;

export type OmitedUserSchema = Omit<
  SelectUser,
  "id" | "image" | "emailVerified" | "name"
>;

export type UserSession =
  | {
      name: string | null | undefined;
      email: string | null | undefined;
      image: string | null | undefined;
    }
  | undefined;
