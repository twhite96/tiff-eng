import { SITE } from "@config";
import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content_layer",
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image()
        .refine((img) => img.width >= 1200 && img.height >= 630, {
          message: "OpenGraph image must be at least 1200 X 630 pixels!",
        })
        .or(z.string())
        .optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      editPost: z
        .object({
          disabled: z.boolean().optional(),
          url: z.string().optional(),
          text: z.string().optional(),
          appendFilePath: z.boolean().optional(),
        })
        .optional(),
    }),
});

const snippetsCollectiom = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./",
  }),
});

const changeCollection = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/changelog",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z
      .string()
      .transform((str) => new Date(str))
      .optional()
      .nullable(),
  }),
});

const nowCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/now" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z
      .string()
      .transform((str) => new Date(str))
      .optional()
      .nullable(),
  }),
});

const linksCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/links" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z
      .string()
      .transform((str) => new Date(str))
      .optional()
      .nullable(),
  }),
});

const usesCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/uses" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z
      .string()
      .transform((str) => new Date(str))
      .optional()
      .nullable(),
  }),
});

const readsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/reads" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z
      .string()
      .transform((str) => new Date(str))
      .optional()
      .nullable(),
    keywords: z.string().array(),
  }),
});

export const collections = { blog };
