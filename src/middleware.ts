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

  // Only modify headers for HTML responses, preserve Content-Type for API routes
  const originalContentType = response.headers.get('Content-Type');
  const isHtmlResponse = !originalContentType ||
    originalContentType.includes('text/html') ||
    (!originalContentType.includes('application/') && !originalContentType.includes('text/plain') && !originalContentType.includes('text/xml'));

  if (isHtmlResponse) {
    const headers = new Headers(response.headers);
    headers.set('Content-Type', 'text/html; charset=UTF-8');

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers
    });
  }

  // Return response as-is for non-HTML content (XML, JSON, plain text, etc.)
  return response;
});
