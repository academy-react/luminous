import { z } from "zod";

export const firstSignUpResponseSchema = z
  .object({
    id: z.number(),
    message: z.string(),
    success: z.boolean,
    errors: z.string().nullable(),
  })
  .strict();

export type FirstSignUpResponseProps = z.infer<
  typeof firstSignUpResponseSchema
>;

export const secondSignUpSchema = z
  .object({
    id: z.number(),
    message: z.string(),
    success: z.boolean,
    errors: z.string().nullable,
  })
  .strict();

export type SecondSignUpProps = z.infer<typeof secondSignUpSchema>;

export const thirdSignUpSchema = z
  .object({
    id: z.number(),
    message: z.string().nullable(),
    success: z.boolean(),
    errors: z.string(),
  })
  .strict();

export type ThirdSignUpProps = z.infer<typeof thirdSignUpSchema>;
