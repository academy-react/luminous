import { z } from "zod";

export const newsCommentSchema = z
  .object({
    id: z.string(),
    newsId: z.string(),
    parentId: z.string(),
    userIpAddress: z.string(),
    title: z.string(),
    describe: z.string(),
    userId: z.number(),
    insertDate: z.string(),
    commentLike: z.number(),
    replyCount: z.number(),
  })
  .strict();

export type NewsCommentType = z.infer<typeof newsCommentSchema>;

export const newsCommentListSchema = z.array(newsCommentSchema);

export type NewsCommentListType = z.infer<typeof newsCommentListSchema>;

export const newsCommentReplyListSchema = z.array(newsCommentSchema);

export type NewsCommentReplyListType = z.infer<
  typeof newsCommentReplyListSchema
>;
