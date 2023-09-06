import * as z from "zod";

export const userAuthSchema = z.object({
  email: z.string().email(),
  // password: z.string().min(8),
  password: z
    .string()
    .min(8)
    .refine(
      (password) => {
        // Define your regular expression pattern
        const pattern =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        // Use the regex method to match the password against the pattern
        return pattern.test(password);
      },
      {
        message:
          "Password must contain at least one lowercase letter (a-z), one uppercase letter (A-Z), one digit (0-9), and one special character (@$!%*?&).",
      }
    ),
});
