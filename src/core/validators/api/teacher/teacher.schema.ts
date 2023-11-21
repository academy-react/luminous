import { z } from "zod";

export const teacherSchema = z
  .object({
    teacherId: z.number(),
    fullName: z.string(),
    linkdinProfileLink: z.string(),
    pictureAddress: z.string().nullable(),
    courseCounts: z.number(),
    newsCount: z.number(),
  })
  .strict();

export type TeacherType = z.infer<typeof teacherSchema>;

export const teacherListSchema = z.array(teacherSchema);

export type TeacherListType = z.infer<typeof teacherListSchema>;
