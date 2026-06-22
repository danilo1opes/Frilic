import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://frilic.com',
      lastModified: new Date(),
      priority: 1,
    },
  ];
}
