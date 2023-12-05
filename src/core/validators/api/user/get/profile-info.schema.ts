import { z } from "zod";

export const userProfileInfoSchema = z.object({
  currentPictureAddress: z.string(),
  profileCompletionPercentage: z.number().min(0).max(100),
  userImage: z.array(z.string()),
  email: z.string().email(),
  phoneNumber: z.string(),
  lName: z.string(),
  fName: z.string(),
  userAbout: z.string(),
  linkdinProfile: z.string().nullable(),
  telegramLink: z.string().nullable(),
  receiveMessageEvent: z.boolean(),
  homeAdderess: z.string(),
  nationalCode: z.string(),
  gender: z.boolean(),
  birthDay: z.string(),
  latitude: z.number().nullable(),
  longitude: z.number().nullable(),
});

export type userProfileInfoType = z.infer<typeof userProfileInfoSchema>;
