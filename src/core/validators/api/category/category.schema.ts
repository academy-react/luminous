import { z } from 'zod';

export const categorySchema = z.object({
 id: z.number(),
 techName: z.string(),
 parentId: z.number().nullable(),
 describe: z.string(),
 iconAddress: z.string(),
});


export type CategoryType = z.infer<typeof categorySchema>;

export const categoryListSchema = z.array(categorySchema);

export type CategoryListType = z.infer<typeof categoryListSchema>;