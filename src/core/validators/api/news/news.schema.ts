import { z } from "zod";

const newsSchema = z.object({
  id: z.string(),
  title: z.string(),
  miniDescribe: z.string(),
  keyword: z.string(),
  currentRate: z.number(),
  currentView: z.number(),
  currentLikeCount: z.number(),
  currentImageAddressTumb: z.string(),
  insertDate: z.string(),
  updateDate: z.string(),
  addUserFullName: z.string(),
  newsCatregoryId: z.number(),
  newsCatregoryName: z.string(),
  currentUserIsLike: z.boolean(),
});

export type NewsType = z.infer<typeof newsSchema>;

const newsFilterPagesSchema = z.object({
  news: z.array(newsSchema),
  totalCount: z.number(),
});

export type NewsFilterPagesType = z.infer<typeof newsFilterPagesSchema>;
