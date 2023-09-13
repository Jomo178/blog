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

export type UserSchema = {
  id?: string;
  name?: string;
  email: string;
  password: string;
  emailVerified?: Date;
  image?: string;
};
