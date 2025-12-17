import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nexiler.tech';
  
  // Static pages
  const routes = [
    '',
    '/about',
    '/services',
    '/our-work',
    '/pricing',
    '/blogs',
    '/contact',
    '/consultation',
    '/site-map',
    '/privacy-policy',
    '/terms-of-service',
    '/cookie-policy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: (route === '' || route === '/blogs' ? 'daily' : 'weekly') as 'daily' | 'weekly',
    priority: route === '' ? 1 : route === '/contact' || route === '/pricing' ? 0.9 : 0.8,
  }));

  // Add blog posts (you can dynamically fetch these from your CMS/database)
  // Example:
  // const blogPosts = await fetchBlogPosts();
  // const blogRoutes = blogPosts.map((post) => ({
  //   url: `${baseUrl}/blogs/${post.slug}`,
  //   lastModified: post.updatedAt,
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.7,
  // }));

  return routes;
}
