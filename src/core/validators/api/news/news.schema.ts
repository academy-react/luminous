import { z } from "zod";

export const newsSchema = z
  .object({
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
  })
  .strict();

export type NewsType = z.infer<typeof newsSchema>;

export const newsFilterPagesSchema = z.object({
  news: z.array(newsSchema),
  totalCount: z.number(),
});

export type NewsFilterPagesType = z.infer<typeof newsFilterPagesSchema>;
