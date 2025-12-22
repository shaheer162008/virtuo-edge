export type BlogPost ={
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  time: string;
  status: "published" | "draft";
  featuredImage?: string;
}