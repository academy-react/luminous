import { z } from "zod";

export const signInInputValidator = z.object({
  username: z.string().min(5).max(35),
  password: z.string().min(1),
  remember: z.boolean().default(true).optional(),
});

export type SignInInputs = z.infer<typeof signInInputValidator>;
