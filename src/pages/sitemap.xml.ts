import type { APIRoute } from 'astro';
import { generateSitemapIndexXml } from '../utils/sitemap';

export const GET: APIRoute = async () => {
  const xml = generateSitemapIndexXml();
  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'X-Robots-Tag': 'noindex, follow'
    }
  });
};
