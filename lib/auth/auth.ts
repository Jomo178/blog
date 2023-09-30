import { NextAuthOptions } from "next-auth";
import EmailProvider, { EmailConfig } from "next-auth/providers/email";
import GitHubProvider from "next-auth/providers/github";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { createTransport } from "nodemailer";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import { env } from "@/env.mjs";
import { db } from "../database";
import { databse } from "../drizzle-adaptar";
import { CredentialsAuthorization } from "@/types";

export const authOptions: NextAuthOptions = {
  adapter: DrizzleAdapter(db),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    newUser: "/register",
  },
  providers: [
    GitHubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "login",
      credentials: {},
      async authorize(credentials, req) {
        const typedCredential = credentials as CredentialsAuthorization;
        if (!typedCredential) return null;

        const { email, password } = typedCredential;
        const saltRounds = 5;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPassword = bcrypt.hashSync(password, salt);

        let findUser = await databse.getUserByEmail(email);
        if (!findUser) {
          findUser = await databse.createUser({
            email,
            password: hashedPassword,
          });

          return findUser;
        }

        const isPasswordValid = bcrypt.compareSync(password, findUser.password);

        if (isPasswordValid) {
          return findUser;
        } else {
          return null;
        }
      },
    }),
  ],
  // callbacks: {
  //   async session({ token, session }) {
  //     if (token) {
  //       session.user.id = token.id;
  //       session.user.name = token.name;
  //       session.user.email = token.email;
  //       session.user.image = token.picture;
  //     }

  //     return session;
  //   },
  //   async jwt({ token, user }) {
  //     const dbUser = await db.user.findFirst({
  //       where: {
  //         email: token.email,
  //       },
  //     });

  //     if (!dbUser) {
  //       if (user) {
  //         token.id = user?.id;
  //       }
  //       return token;
  //     }

  //     return {
  //       id: dbUser.id,
  //       name: dbUser.name,
  //       email: dbUser.email,
  //       picture: dbUser.image,
  //     };
  //   },
  // },
};

function template(template: "signIn" | "activate", url: string) {
  const color = {
    background: "#020817",
    text: "#fff",
    mainBackground: "#020817",
    buttonBackground: "#1e293b",
    buttonBorder: "#444",
    buttonText: "#fff",
  };

  return `
  <body style="background: ${color.background};">
    <table width="100%" border="0" cellspacing="20" cellpadding="0"
      style="background: ${color.mainBackground}; max-width: 600px; margin: auto; border-radius: 10px;">
      <tr>
        <td align="center"
          style="padding: 10px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
          Welcome to <strong>Blog Maker</strong>,
        </td>
      </tr>
      <tr>
        <td align="center"
          style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
          Click the link below to activate your account.
        </td>
      </tr>
      <tr>
        <td align="center" style="padding: 20px 0;">
          <table border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td align="center" style="border-radius: 5px;" bgcolor="${color.buttonBackground}"><a href="${url}"
                  target="_blank"
                  style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${color.buttonText}; text-decoration: none; border-radius: 5px; padding: 10px 20px; border: 1px solid ${color.buttonBorder}; display: inline-block; font-weight: bold;">Activate Account</a></td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td align="center"
          style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
          This link expires in 24 hours and can only be used once.
        </td>
      </tr>
    </table>
  </body>
  `;
}

async function handleEmail({
  identifier,
  url,
  provider,
}: {
  identifier: string;
  url: string;
  provider: EmailConfig;
}) {
  const transport = createTransport(provider.server);
  const result = await transport.sendMail({
    to: identifier,
    from: `"Blog Maker App"${provider.from}`,
    subject: `Activate your account`,
    html: template("signIn", url),
    headers: [
      // Set this to prevent Gmail from threading emails.
      // See https://stackoverflow.com/questions/23434110/force-emails-not-to-be-grouped-into-conversations/25435722.

      { key: "X-Entity-Ref-ID", value: new Date().getTime() + "" },
    ],
  });
  const failed = result.rejected.concat(result.pending).filter(Boolean);

  if (failed.length) {
    throw new Error(`Email(s) (${failed.join(", ")}) could not be sent`);
  }
}
