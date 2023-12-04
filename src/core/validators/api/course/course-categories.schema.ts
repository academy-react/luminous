import { z } from "zod";

export const courseCategorySchema = z.object({
  id: z.number(),
  techName: z.string(),
  parentId: z.number().nullable(),
  describe: z.string(),
  iconAddress: z.string(),
});

export type CourseCategorySchemaType = z.infer<typeof courseCategorySchema>;

export const courseCategoriesSchema = z.array(courseCategorySchema);

export type CourseCategoriesSchemaType = z.infer<typeof courseCategoriesSchema>;
