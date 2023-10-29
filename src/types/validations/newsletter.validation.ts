import { z } from "zod";

export const newsletterRegisterInputValidator = z.object({
  email: z.string().email(),
});

export type NewsletterRegisterInputProps = z.infer<
  typeof newsletterRegisterInputValidator
>;
