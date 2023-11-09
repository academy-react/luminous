import { z } from "zod";

const envSchema = z.object({
  BASE_API_URL: z.string().min(1),
});

export const parsedEnv = envSchema.parse(process.env);
