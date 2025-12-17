"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { ExternalLink } from "lucide-react";
import { projects, projectCategories } from "@/lib/projects";

// Metadata is set in layout.tsx for client components

export default function OurWorkPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-[180px] h-[180px] sm:w-[320px] sm:h-[320px] lg:w-[500px] lg:h-[500px] bg-cyan-bright/15 rounded-full blur-[120px] animate-pulse pointer-events-none -z-10" style={{ animationDuration: '5s' }} />
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            <span className="text-white">Our </span>
                            <span className="text-gradient">Work</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/70">
                            Explore our latest projects and success stories across various industries.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter */}
            <section className="py-6 border-y border-white/10 sticky top-16 md:top-20 z-40 backdrop-blur-xl overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#00040F] via-[#00040F]/95 to-[#00040F]" />
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-3">
                        {projectCategories.map((category, index) => (
                            <motion.button
                                key={category}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 md:px-6 py-2 md:py-2.5 rounded-lg font-medium text-sm md:text-base transition-all duration-300 ${
                                    activeCategory === category
                                        ? "bg-white/10 text-white border-2 border-white/30"
                                        : "bg-white/5 text-white/70 hover:text-white border-2 border-white/10 hover:border-white/20 hover:bg-white/10"
                                }`}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="group rounded-2xl overflow-hidden glass border border-white/10 hover:border-primary/50 transition-all"
                            >
                                {/* Image or Video */}
                                <div className="aspect-16/10 relative overflow-hidden">
                                    {project.type === "video" && project.videoUrl ? (
                                        // YouTube Video Embed
                                        <div className="w-full h-full">
                                            <iframe
                                                src={`https://www.youtube.com/embed/${project.videoUrl}`}
                                                title={project.title}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="w-full h-full"
                                            />
                                        </div>
                                    ) : (
                                        // Image with optional link
                                        <>
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                            {project.link && (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100"
                                                >
                                                    <ExternalLink size={32} className="text-white" />
                                                </a>
                                            )}
                                        </>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="text-primary text-sm font-medium mb-2">
                                        {project.category}
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-white/60 text-sm">
                                        {project.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Newsletter />
            <Footer />
        </main>
    );
}
