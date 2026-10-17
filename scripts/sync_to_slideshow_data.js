import fs from 'fs';

const data = JSON.parse(fs.readFileSync('src/data/extractedPitchers.json', 'utf8'));

const tsContent = `import { SlideItem } from '../types';

/**
 * 36 Industry Automation Pitcher & Operational Blueprint Slides
 * Exactly matched to the titles, solving objectives, and 6-tool workflows on each pitcher diagram.
 */
export const INDUSTRY_SLIDESHOW_ITEMS: SlideItem[] = ${JSON.stringify(data, null, 2)};

export const SLIDESHOW_CATEGORIES = [
  'All 36 Blueprints',
  'Automotive & Workshops',
  'Healthcare & Clinics',
  'Beauty & Wellness',
  'Education & Licensing',
  'Food & Beverage',
  'Real Estate & Properties',
  'Retail & E-Commerce',
  'Professional Services',
  'Financial Services'
];
`;

fs.writeFileSync('src/data/slideshowData.ts', tsContent);
console.log('✅ Synchronized extractedPitchers.json to src/data/slideshowData.ts!');
