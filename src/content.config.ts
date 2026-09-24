import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    slug: z.string(),
    lastModified: z.string().optional(),
    description: z.string().optional(),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    slug: z.string(),
    lastModified: z.string().optional(),
    description: z.string().optional(),
  }),
});

const rm_content_editor = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/rm_content_editor" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    slug: z.string(),
    lastModified: z.string().optional(),
    description: z.string().optional(),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const rank_math_schema = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/rank_math_schema" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    slug: z.string(),
    lastModified: z.string().optional(),
    description: z.string().optional(),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
  }),
});
export const collections = { posts, pages, rm_content_editor, rank_math_schema };
