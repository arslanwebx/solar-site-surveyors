import fs from 'node:fs';
import path from 'node:path';

export const SITE_URL = 'https://solarsitesurveyors.com';
export const URLS_PER_SITEMAP = 100;

/**
 * Automatically discovers all indexable routes from src/pages.
 * Strictly adheres to SEO standards:
 * - Omits 404 pages, dynamic catch-alls, API routes, and sitemaps.
 * - Enforces absolute HTTPS URLs with trailing slashes matching live canonical tags.
 * - Sorts deterministically (root '/' first, then alphabetical).
 */
export function getIndexableUrls(): string[] {
  const pagesDir = path.join(process.cwd(), 'src', 'pages');
  const urls: string[] = [];

  function scan(dir: string, relDir: string = '') {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const relEntry = path.join(relDir, entry.name).replace(/\\/g, '/');

      if (entry.isDirectory()) {
        scan(fullPath, relEntry);
      } else if (entry.isFile()) {
        // Only consider .astro and .md content files
        if (!entry.name.endsWith('.astro') && !entry.name.endsWith('.md')) {
          continue;
        }

        // Exclude internal files, dynamic params, 404 error page, and endpoints
        if (entry.name.startsWith('_') || entry.name.startsWith('[')) {
          continue;
        }

        const nameWithoutExt = entry.name.replace(/\.(astro|md)$/, '');
        if (nameWithoutExt === '404') {
          continue;
        }

        let urlPath = '';
        if (relDir === '') {
          // Root level
          if (nameWithoutExt === 'index') {
            urlPath = '/';
          } else {
            urlPath = `/${nameWithoutExt}/`;
          }
        } else {
          // Subdirectory
          if (nameWithoutExt === 'index') {
            urlPath = `/${relDir}/`;
          } else {
            urlPath = `/${relDir}/${nameWithoutExt}/`;
          }
        }

        urls.push(`${SITE_URL}${urlPath}`);
      }
    }
  }

  scan(pagesDir);

  // Deduplicate
  const uniqueUrls = Array.from(new Set(urls));

  // Deterministic sorting: root first, then alphabetical
  uniqueUrls.sort((a, b) => {
    if (a === `${SITE_URL}/`) return -1;
    if (b === `${SITE_URL}/`) return 1;
    return a.localeCompare(b);
  });

  return uniqueUrls;
}

/**
 * Splits URLs into chunks of maximum 100 URLs each.
 */
export function getSitemapChunks(): string[][] {
  const allUrls = getIndexableUrls();
  if (allUrls.length === 0) {
    return [[]];
  }

  const chunks: string[][] = [];
  for (let i = 0; i < allUrls.length; i += URLS_PER_SITEMAP) {
    chunks.push(allUrls.slice(i, i + URLS_PER_SITEMAP));
  }

  return chunks;
}

/**
 * Generates the main sitemap index XML string (/sitemap.xml)
 * referencing only child sitemaps (sitemap-0.xml, sitemap-1.xml, etc.).
 */
export function generateSitemapIndexXml(): string {
  const chunks = getSitemapChunks();
  const sitemapsXml = chunks
    .map((_, index) => {
      const loc = `${SITE_URL}/sitemap-${index}.xml`;
      return `  <sitemap>\n    <loc>${loc}</loc>\n  </sitemap>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapsXml}\n</sitemapindex>\n`;
}

/**
 * Generates a valid <urlset> XML string for a child sitemap.
 */
export function generateUrlSetXml(urls: string[]): string {
  const urlsXml = urls
    .map((url) => `  <url>\n    <loc>${url}</loc>\n  </url>`)
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlsXml}\n</urlset>\n`;
}
