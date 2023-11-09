import { z } from "zod";

export const signInInputSchema = z.object({
  username: z.string().min(5).max(35),
  password: z.string().min(1),
  remember: z.boolean().default(true).optional(),
});

export type SignInInputProps = z.infer<typeof signInInputSchema>;

export const firstSignUpInputSchema = z.object({
  phone: z.string().regex(/^09\d{9}$/),
});

export type FirstSignUpInputProps = z.infer<typeof firstSignUpInputSchema>;

export const secondSignUpInputSchema = z.object({
  code: z.string().min(1),
});

export type SecondSignUpInputProps = z.infer<typeof secondSignUpInputSchema>;

export const thirdSignUpInputSchema = z.object({
  email: z.string().email(),
});

export type ThirdSignUpInputProps = z.infer<typeof thirdSignUpInputSchema>;

export const resetPasswordInputSchema = z.object({
  email: z.string().email(),
});

export type ResetPasswordInputProps = z.infer<typeof resetPasswordInputSchema>;
