import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/siteConfig';

// AI / LLM crawlers we explicitly welcome (GEO / AEO — Generative & Answer
// Engine Optimization). Listing them grants explicit consent to be cited.
const aiCrawlers = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'ClaudeBot',
  'Claude-Web',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot',
  'Applebot-Extended',
  'Amazonbot',
  'Bytespider',
  'CCBot',
  'cohere-ai',
  'Meta-ExternalAgent',
  'DuckAssistBot',
  'YouBot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api/',
      },
      {
        userAgent: aiCrawlers,
        allow: '/',
        disallow: '/api/',
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
