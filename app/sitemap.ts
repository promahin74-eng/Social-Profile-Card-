import type { MetadataRoute } from 'next';

const routes = ['', '/live', '/news', '/worldcup', '/profile', '/admin', '/match/usa-mexico', '/player/mbappe', '/team/usa', '/worldcup/stadium/metlife'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://goalzone.example.com${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: route === '' ? 1 : 0.8,
  }));
}
