import { z } from "zod";

export const reserveCourseSchema = z
  .object({
    reserveId: z.string(),
    courseId: z.string(),
    courseName: z.string(),
    studentId: z.number(),
    studentName: z.string(),
    reserverDate: z.string(),
    accept: z.boolean(),
  })
  .strict();

export type ReserveCourseSchemaType = z.infer<typeof reserveCourseSchema>;

export const allUserReservedCoursesListSchema = z.array(reserveCourseSchema);

export type AllUserReservedCoursesListSchemaType = z.infer<
  typeof allUserReservedCoursesListSchema
>;
