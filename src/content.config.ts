import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
    loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            pubDate: z.coerce.date(),
            updatedDate: z.coerce.date().optional(),
            heroImage: z.optional(image()),
            author: z.string().optional(),
        }),
});

const authors = defineCollection({
    loader: glob({ base: './src/content/authors', pattern: '**/*.{md,mdx}' }),
    schema: ({ image }) =>
        z.object({
            name: z.string(),
            title: z.string().optional(),
            bio: z.string(),
            avatar: z.optional(image()),
            socials: z
                .array(
                    z.object({
                        label: z.string(),
                        url: z.string().url(),
                    }),
                )
                .optional(),
        }),
});

export const collections = { blog, authors };
