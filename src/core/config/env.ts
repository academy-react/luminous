import { z } from "zod";

const envSchema = z.object({
  BASE_API_URL: z.string().min(1),
  NEXT_AUTH_SECRET: z.string().length(32),
  NEXT_AUTH_URL: z
    .string()
    .min(1)
    .refine((url) => url.endsWith("/api/auth")),
});

export const parsedEnv = envSchema.parse(process.env);
