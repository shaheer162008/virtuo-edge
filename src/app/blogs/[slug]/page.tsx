import BlogPostPage from '@/components/Blogs'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { BlogPost } from '../../../../types/pages';
import { db } from '../../../../firebase/init';
import { Metadata } from 'next';

export async function generateMetadata({
    params,
  }: {
    params: Promise<{ slug: string }>
  }): Promise<Metadata> {
    const {slug} = await params;
    const blog = await getBlogData(slug);
    if (!blog) {
      return {
        title: "Blog Not Found",
        description: "The blog you are looking for does not exist on Nexiler.",
      };
    }
    return {
      title:  blog.title,
      description: blog.excerpt,
      openGraph: {
        title: blog.title,
        description: blog.excerpt,
        url: `https://nexiler.com/blogs/${slug}`,
        siteName: "Nexiler",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: blog.title,
        description: blog.excerpt,
      },
    };
  }

 const getBlogData = async (slug: string) => {
  let foundBlog: BlogPost | {} = {};
      try {
        const blogsRef = collection(db, "blogs");
        const q = query(blogsRef, where("status", "==", "published"));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          // Generate slug from title
          const generatedSlug = generateSlug(data.title);

          if (generatedSlug === slug) {
            foundBlog = {
              id: doc.id,
              title: data.title || "",
              excerpt: data.excerpt || "",
              content: data.content || "",
              category: data.category || "",
              date: data.date || "",
              time: data.time || "",
              status: data.status,
              featuredImage: data.featuredImage || undefined,
            };
          }
        });


      } catch (error) {
        console.error("Error fetching blog:", error);
      }

      return foundBlog as BlogPost;
 }

 const generateSlug = (title: string): string => {
      return title
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .trim();
    };

const  BlogsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
  const {slug} = await params
     
  return (
    <BlogPostPage foundBlog={await getBlogData(slug)} />
  )
}

export default BlogsPage