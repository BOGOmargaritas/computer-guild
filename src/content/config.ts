// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";
// 2. Define your collection(s)
const gameCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    imageUrl: z.string(),
    description: z.string(),
    headerInfo: z.object({
      writtenBy: z.string(),
      publishedDate: z.string(),
      suggestedBy: z.string()
    }).optional(),
    scores: z.array(
      z.object({
        reviewerSrc: z.string(),
        score: z.number(),
        taglines: z.array(z.string()),
        dunce: z.boolean().optional()
      })
    ).optional(),
    tags: z.array(z.string()),
    graphic: z.string(),
    sortIndex: z.number(),
  })
});

const ostCollection = defineCollection({
  type: "content",
  schema: z.object({
    tracks: z
      .array(
        z.object({
          name: z.string(),
          artist: z.string(),
          url: z.string(),
          cover: z.string().optional()
        })
      )
      .optional()
  })
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  games: gameCollection,
  ost: ostCollection
};
