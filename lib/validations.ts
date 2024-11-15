import { z } from "zod";

export const SignInSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters." })
    .max(24, { message: "Username must be at most 24 characters." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." })
    .max(24, { message: "Password must be at most 24 characters." }),
});

export const SignUpSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long." })
    .max(24, { message: "Username cannot exceed 30 characters." })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: "Username can only contain letters, numbers, and underscores.",
    }),

  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." })
    .max(24, { message: "Password cannot exceed 24 characters." }),
});
