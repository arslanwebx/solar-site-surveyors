import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://solarsitesurveyors.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'always'
  },
  redirects: {
    '/texas': '/texas-solar-site-surveyors/'
  }
});
