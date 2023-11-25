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
    currentImageAddressTumb: z.string().nullable(),
    insertDate: z.string(),
    updateDate: z.string(),
    addUserFullName: z.string(),
    addUserProfileImage: z.string(),
    newsCatregoryId: z.number(),
    newsCatregoryName: z.string(),
    currentUserIsLike: z.boolean(),
    likeId: z.string(),
    isCurrentUserFavorite: z.boolean(),
    currentUserFavoriteId: z.string(),
    totalCount: z.number(),
  })
  .strict();

export type NewsType = z.infer<typeof newsSchema>;

export const allNewsSchema = z.array(newsSchema);

export type AllNewsType = z.infer<typeof allNewsSchema>;

export const newsFilterPagesSchema = z.object({
  news: z.array(newsSchema),
  totalCount: z.number(),
});

export type NewsFilterPagesType = z.infer<typeof newsFilterPagesSchema>;
