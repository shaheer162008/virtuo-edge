"use client";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    return (
        <main className="min-h-screen">
            <Navbar />

            <article className="pt-32 pb-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    {/* Back Link */}
                    <Link
                        href="/blogs"
                        className="inline-flex items-center gap-2 text-primary hover:text-cyan-bright transition-colors mb-8"
                    >
                        <ArrowLeft size={18} />
                        Back to Blog
                    </Link>

                    {/* Header */}
                    <div className="mb-12">
                        <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                            <span className="text-primary">AI Insights</span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                                <Calendar size={14} />
                                Jan 15, 2024
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                                <Clock size={14} />
                                5 min read
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            {params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        </h1>
                    </div>

                    {/* Featured Image Placeholder */}
                    <div className="aspect-[2/1] rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 mb-12" />

                    {/* Content */}
                    <div className="prose prose-invert max-w-none">
                        <p className="text-lg text-white/80 leading-relaxed mb-6">
                            This is a sample blog post article. In a real application, you would fetch the content from a CMS or markdown files based on the slug parameter.
                        </p>
                        <p className="text-white/70 leading-relaxed mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Key Takeaways</h2>
                        <p className="text-white/70 leading-relaxed mb-6">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <ul className="space-y-2 text-white/70 mb-6">
                            <li>Understanding the fundamentals of AI and automation</li>
                            <li>Identifying opportunities for automation in your business</li>
                            <li>Best practices for implementing AI solutions</li>
                            <li>Measuring ROI and success metrics</li>
                        </ul>
                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Conclusion</h2>
                        <p className="text-white/70 leading-relaxed">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
