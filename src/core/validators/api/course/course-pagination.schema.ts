import { z } from "zod";

export const courseFilterDtoSchema = z.object({
  teacherName: z.string(),
  classRoomName: z.string(),
  statusName: z.string(),
  levelName: z.string(),
  cost: z.number(),
  currentRegistrants: z.number(),
  likeCount: z.number(),
  commandCount: z.number(),
  userIsLiked: z.boolean(),
  userLikedId: z.string(),
  userFavorite: z.boolean(),
  userFavoriteId: z.string(),
  courseRate: z.number(),
  title: z.string(),
  describe: z.string(),
  tumbImageAddress: z.string().nullable(),
  lastUpdate: z.string().refine((value) => {
    return new Date(value).getTime() > 0;
  }),
  courseId: z.string(),
  technologyList: z.string(),
});

export const courseByPaginationSchema = z.object({
  courseFilterDtos: z.array(courseFilterDtoSchema),
  totalCount: z.number(),
});

export type CourseFilterDtoType = z.infer<typeof courseFilterDtoSchema>;

export type CourseByPaginationType = z.infer<typeof courseByPaginationSchema>;
