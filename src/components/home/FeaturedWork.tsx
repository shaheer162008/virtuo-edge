"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { projects as allProjects } from "@/lib/projects";

// Use only projects explicitly marked `featured: true`. Fallback to first 6 if none.
const featuredProjects = allProjects.filter((p) => p.featured).length
    ? allProjects.filter((p) => p.featured)
    : allProjects.slice(0, 6);

export const FeaturedWork = () => {
    return (
        <section className="py-20 sm:py-24 md:py-32 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                <span className="text-white">Virtuo Edge's </span>
                                <span className="text-gradient">Client Success Stories</span>
                            </h2>
                            <p className="text-lg text-white/60">
                                See how Virtuo Edge has helped businesses build better websites, automate operations, and grow faster.
                            </p>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link
                            href="/our-work"
                            className="px-6 py-3 glass rounded-lg font-semibold text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 border border-white/20 inline-flex items-center gap-2"
                        >
                            View All Projects
                            <ExternalLink size={18} />
                        </Link>
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            whileHover={{ y: -12, scale: 1.02 }}
                            className="group relative rounded-2xl overflow-hidden glass border border-white/10 hover:border-primary/50 transition-all duration-300 cursor-pointer"
                        >
                            {/* Image Placeholder with Gradient Overlay */}
                            <div className="aspect-4/3 relative overflow-hidden bg-black/5">
                                {/* Project image */}
                                {project.image && (
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                )}

                                {/* Subtle overlay and hover icon */}
                                <div className="absolute inset-0 bg-linear-to-t from-dark/60 to-transparent group-hover:from-dark/80 transition-all duration-300" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <div className="p-4 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
                                        <ExternalLink size={32} className="text-primary" />
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 relative">
                                {/* Inner Spotlight */}
                                <div className="absolute inset-0 bg-linear-to-t from-primary/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <div className="text-primary text-sm font-medium mb-2">
                                        {project.category}
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-white/60 text-base sm:text-lg">
                                        {project.description}
                                    </p>
                                </div>
                            </div>

                            {/* Hover Glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10">
                                <div className="absolute inset-0 bg-primary/5 blur-xl" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
