import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);

  // Force WWW to non-WWW redirect (SEO best practice)
  if (url.hostname.startsWith('www.')) {
    const nonWwwUrl = `https://${url.hostname.replace('www.', '')}${url.pathname}${url.search}`;
    return Response.redirect(nonWwwUrl, 301);
  }

  // Force redirect from Railway URL to custom domain
  if (url.hostname.includes('railway.app')) {
    const redirectUrl = `https://placement.quest${url.pathname}${url.search}`;
    return Response.redirect(redirectUrl, 301);
  }

  // Continue to the next middleware/page
  const response = await next();

  // Add SEO-friendly headers
  const headers = new Headers(response.headers);
  headers.set('Content-Type', 'text/html; charset=UTF-8');

  // Note: GZip/Brotli compression should be handled by Railway/reverse proxy
  // If not, consider installing 'compression' middleware package

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
});
