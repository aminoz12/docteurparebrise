import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/siteConfig';

// Public, indexable routes. Keep in sync with the App Router pages.
const routes = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/rendez-vous', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/a-propos', priority: 0.7, changeFrequency: 'yearly' as const },
  { path: '/contact', priority: 0.8, changeFrequency: 'yearly' as const },
  { path: '/faq', priority: 0.6, changeFrequency: 'monthly' as const },
  { path: '/mentions-legales', priority: 0.3, changeFrequency: 'yearly' as const },
  { path: '/politique-confidentialite', priority: 0.3, changeFrequency: 'yearly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
