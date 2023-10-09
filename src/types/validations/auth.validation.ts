import { z } from "zod";

export const signInInputValidator = z.object({
  username: z.string().min(5).max(35),
  password: z.string().min(1),
  remember: z.boolean().default(true).optional(),
});

export type SignInInputProps = z.infer<typeof signInInputValidator>;

export const firstSignUpInputValidator = z.object({
  phone: z.string().regex(/^09\d{9}$/),
});

export type FirstSignUpInputProps = z.infer<typeof firstSignUpInputValidator>;

export const secondSignUpInputValidator = z.object({
  code: z.number().min(1),
});

export type SecondSignUpInputProps = z.infer<typeof secondSignUpInputValidator>;

export const thirdSignUpInputValidator = z.object({
  email: z.string().email(),
});

export type ThirdSignUpInputProps = z.infer<typeof thirdSignUpInputValidator>;
