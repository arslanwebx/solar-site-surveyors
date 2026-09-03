import type { APIRoute } from 'astro';
import { getSitemapChunks, generateUrlSetXml } from '../utils/sitemap';

export function getStaticPaths() {
  const chunks = getSitemapChunks();
  return chunks.map((chunk, index) => ({
    params: { id: String(index) },
    props: { urls: chunk }
  }));
}

export const GET: APIRoute = async ({ props }) => {
  const xml = generateUrlSetXml(props.urls);
  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'X-Robots-Tag': 'noindex, follow'
    }
  });
};
