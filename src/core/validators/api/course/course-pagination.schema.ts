import { z } from "zod";

export const coursePaginationSchema = z
  .object({
    teacherName: z.string(),
    classRoomName: z.string(),
    statusName: z.string(),
    levelName: z.string(),
    cost: z.number(),
    currentRegistrants: z.number(),
    likeCount: z.number(),
    commandCount: z.number(),
    userIsLiked: z.boolean(),
    userFavorite: z.boolean(),
    courseRate: z.number(),
    title: z.string(),
    describe: z.string(),
    tumbImageAddress: z.string().url().nullable(),
    lastUpdate: z.string(), // or z.date() if you convert the string to a Date object
    courseId: z.string().uuid(),
    technologyList: z.string(),
  })
  .strict();

export type CoursePaginationType = z.infer<typeof coursePaginationSchema>;

export const coursePaginationListSchema = z.array(coursePaginationSchema);

export type CoursePaginationListType = z.infer<
  typeof coursePaginationListSchema
>;
