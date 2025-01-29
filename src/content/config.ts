import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const posts = defineCollection({
    type: "content_layer",
    loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updated: z.coerce.date().optional(),
        image: z.string().optional(),
        badge: z.string().optional(),
        draft: z.boolean().optional(),
        category: z
          .array(z.string())
          .refine((items) => new Set(items).size === items.length, {
            message: "categories must be unique",
          })
          .optional(),
        tags: z
          .array(z.string())
          .refine((items) => new Set(items).size === items.length, {
            message: "tags must be unique",
          })
          .optional(),
    }),
});

export const collections = {posts};
