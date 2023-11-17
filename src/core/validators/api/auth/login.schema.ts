import { z } from "zod";

export const loginResponseSchema = z.object({
  apiKey: z.string().min(1).nullable(),
  phoneNumber: z
    .string()
    .regex(/^09\d{9}$/)
    .nullable(),
  id: z.number(),
  token: z.string().min(1).nullable(),
  roles: z.array(z.union([z.literal("Administrator"), z.literal("Teacher")])),
  message: z.string().min(1),
  success: z.boolean(),
  errors: z.unknown(),
});

export type LoginResponseProps = z.infer<typeof loginResponseSchema>;
