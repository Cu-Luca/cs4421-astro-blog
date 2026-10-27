import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
    const startedAt = Date.now();
    const response = await next();

    console.log(
        JSON.stringify({
            timestamp: new Date().toISOString(),
            method: context.request.method,
            path: new URL(context.request.url).pathname,
            statusCode: response.status,
            durationMs: Date.now() - startedAt,
        }),
    );

    return response;
});