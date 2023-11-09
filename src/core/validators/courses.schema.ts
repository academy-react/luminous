import { z } from "zod";

export const courseSchema = z.object({
  teacherName: z.string(),
  classRoomName: z.string(),
  typeName: z.string(),
  statusName: z.string(),
  levelName: z.string(),
  cost: z.string(),
  likeCount: z.number(),
  commandCount: z.number(),
  userIsLiked: z.boolean(),
  userFavorite: z.number(),
  title: z.string(),
  describe: z.string(),
  tumbImageAddress: z.string().nullable(),
  lastUpdate: z.string().refine((value) => {
    return new Date(value).getTime() > 0;
  }),
  courseId: z.string(),
});

export type CourseType = z.infer<typeof courseSchema>;

export const courseListSchema = z.array(courseSchema);

export type CourseListType = z.infer<typeof courseListSchema>;
