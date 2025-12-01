"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { Calendar, Clock, ArrowRight } from "lucide-react";

// Metadata is set in layout.tsx for client components

const blogPosts = [
    {
        title: "The Future of AI in Business Automation",
        excerpt: "Discover how artificial intelligence is revolutionizing business processes and what it means for the future of work.",
        category: "AI Insights",
        date: "2024-01-15",
        readTime: "5 min read",
        slug: "future-of-ai-automation",
    },
    {
        title: "Building Scalable Web Applications in 2024",
        excerpt: "Best practices and modern frameworks for developing high-performance web applications that scale.",
        category: "Development",
        date: "2024-01-10",
        readTime: "7 min read",
        slug: "scalable-web-apps-2024",
    },
    {
        title: "Machine Learning for Business: A Beginner's Guide",
        excerpt: "Everything you need to know about leveraging machine learning to solve real-world business problems.",
        category: "AI Insights",
        date: "2024-01-05",
        readTime: "10 min read",
        slug: "ml-for-business-beginners",
    },
    {
        title: "Microservices Architecture: Pros and Cons",
        excerpt: "An in-depth look at microservices architecture and when it's the right choice for your project.",
        category: "Development",
        date: "2023-12-28",
        readTime: "6 min read",
        slug: "microservices-pros-cons",
    },
    {
        title: "Data Privacy in the Age of AI",
        excerpt: "Understanding data privacy regulations and best practices for AI-powered applications.",
        category: "Security",
        date: "2023-12-20",
        readTime: "8 min read",
        slug: "data-privacy-ai",
    },
    {
        title: "How to Choose the Right Tech Stack",
        excerpt: "A comprehensive guide to selecting technologies that align with your project goals and team expertise.",
        category: "Development",
        date: "2023-12-15",
        readTime: "9 min read",
        slug: "choosing-tech-stack",
    },
];

export default function BlogPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-bright/20 rounded-full blur-3xl -z-10" />
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            <span className="text-white">Insights & </span>
                            <span className="text-gradient">Updates</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/70">
                            Stay up to date with the latest trends in AI, automation, and software development.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link href={`/blogs/${post.slug}`} className="group block">
                                    <div className="rounded-2xl overflow-hidden glass border border-white/10 hover:border-primary/50 transition-all h-full">
                                        {/* Image Placeholder */}
                                        <div className="aspect-[16/9] bg-gradient-to-br from-primary/20 to-purple-500/20 relative overflow-hidden">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="text-6xl font-bold text-white/10">{index + 1}</div>
                                            </div>
                                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <div className="flex items-center gap-4 text-sm text-primary mb-3">
                                                <span>{post.category}</span>
                                                <span className="text-white/40">•</span>
                                                <span className="flex items-center gap-1 text-white/60">
                                                    <Clock size={14} />
                                                    {post.readTime}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                                                {post.title}
                                            </h3>
                                            <p className="text-white/60 text-sm mb-4 line-clamp-2">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2 text-sm text-white/40">
                                                    <Calendar size={14} />
                                                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                                </div>
                                                <div className="flex items-center gap-1 text-primary text-sm font-medium">
                                                    Read More
                                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <Newsletter />
            <Footer />
        </main>
    );
}
