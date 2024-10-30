import {defineCollection, z} from 'astro:content';

// define the collection and its shape

const blogCollection = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      title: z.string().max(1000),
      description: z.string().max(200),
      isDraft: z.boolean().default(false),
      publishDate: z.string().transform((s) => new Date(s)),
      readingTimeMins: z.number().min(1),
    }),
});
export const collections = {
  posts: blogCollection,
};
