import { MetadataRoute } from 'next';

import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase/init';

const slugify = (text: string) =>
  text.toLowerCase().trim().replace(/\s+/g, "-");


export const getBlogTitles = async (): Promise<string[]> => {
  try {
    const blogsRef = collection(db, "blogs");
    const snapshot = await getDocs(blogsRef);

    const titles: string[] = snapshot.docs
      .map(doc => doc.data().title)
      .filter((title): title is string => typeof title === "string");

    return titles;
  } catch (error) {
    console.error("Error fetching blog titles:", error);
    return [];
  }
};


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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

  
  const blogPosts = await getBlogTitles();
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blogs/${slugify(post)}`,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...routes, ...blogRoutes];
}
