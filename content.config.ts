import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        title: z.string(),
        slug: z.string(),
        author: z.string().optional(),
        publishedOn: z.string().optional(),
        category: z.string().optional(),
        cover: z.string().optional(),
        excerpt: z.string().optional(),
      }),
    }),
  },
})
