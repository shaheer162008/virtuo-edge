"use client";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { LinkedInProfile } from "@/components/LinkedInProfile";
import SpecialThanks from "@/components/SpecialThanks";
import { Target, Users, Zap, Award, Heart, Lightbulb, Globe, ExternalLink } from "lucide-react";
import { teamMembers, teamExpertise } from "@/lib/team";

// Metadata is set in layout.tsx for client components

const values = [
    {
        icon: Lightbulb,
        title: "Problem Solvers",
        description: "We dig into root causes and build solutions that actually work for your business.",
    },
    {
        icon: Users,
        title: "True Partners",
        description: "We act as an extension of your team, focused on your goals and long-term success.",
    },
    {
        icon: Globe,
        title: "Transparent & Honest",
        description: "We keep communication clear, pricing fair, and decisions documented always.",
    },
    {
        icon: Award,
        title: "Craftsmanship",
        description: "We care about the details and deliver high-quality work that lasts.",
    },
];

export default function AboutPage() {
    const isOdd = teamMembers.length % 2 === 1;
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10" />
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            <span className="text-white">Meet </span>
                            <span className="text-gradient">Team Nexiler</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/70">
                            A passionate team of developers, designers, and strategists working together to help businesses grow globally.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Founder & Origin Story Section */}
            <section className="py-20 bg-white/[0.02]">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                                <span className="text-gradient">Our Story</span>
                            </h2>
                            
                            <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                                <p>
                                    Before Nexiler, we were all working individually freelancing, taking on projects solo, and doing our best to help clients one at a time. 
                                    But <strong className="text-white">Muhammad Shaheer</strong>, our founder, had a bigger vision.
                                </p>
                                <p>
                                    Since 2023, Shaheer dreamed of building a company that could help people internationally a team that combines skills in web development, 
                                    AI automation, design, and video production to deliver complete solutions. Not just websites or apps, but real business growth.
                                </p>
                                <p>
                                    In <strong className="text-white">2025</strong>, that vision became reality. Shaheer brought together a group of talented individuals                                     each an expert in their field and formed <strong className="text-white">Team Nexiler</strong>. 
                                    Now, instead of working alone, we work as one team with one goal: to grow your business and solve your problems.
                                </p>
                                <p>
                                    Our mission is simple provide solutions that actually work and save you time. We handle the tech so you can focus on what you do best.
                                </p>

                                <p>
                                    We are not here just to make money. We want to solve real problems — to help clients reach meaningful outcomes and grow the way they envision. We focus on lasting impact, honest advice, and building tools that make work easier for people.
                                </p>
                            </div>

                            {/* Vision Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                                <div className="p-6 rounded-xl glass border border-white/10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 rounded-lg bg-primary/10">
                                            <Lightbulb size={24} className="text-primary" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-white">The Vision</h3>
                                    </div>
                                    <p className="text-white/60">
                                        Build a company that helps businesses worldwide with top-tier development, automation, and design all under one roof.
                                    </p>
                                </div>
                                <div className="p-6 rounded-xl glass border border-white/10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 rounded-lg bg-primary/10">
                                            <Globe size={24} className="text-primary" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-white">Our Goal</h3>
                                    </div>
                                    <p className="text-white/60">
                                        Deliver solutions that save time, reduce stress, and help our clients grow whether they're startups or established businesses.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team Expertise Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                <span className="text-white">Our </span>
                                <span className="text-gradient">Expertise</span>
                            </h2>
                            <p className="text-lg text-white/60">
                                We have experts in every area you need to grow your business
                            </p>
                        </motion.div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        {teamExpertise.map((expertise, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="px-5 py-3 rounded-full glass border border-white/10 hover:border-primary/50 transition-all"
                            >
                                <span className="text-white/80">{expertise}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-white/[0.02]">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                <span className="text-white">Meet the </span>
                                <span className="text-gradient">Team</span>
                            </h2>
                            <p className="text-lg text-white/60 leading-relaxed">
                                We are a growing team of 11+ skilled professionals who share one goal, helping your business succeed. 
                                Below are some of our key team members. Each one brings years of experience and a genuine passion for what they do. 
                                We work together, we learn together, and we deliver together.
                                Not all of our team members use LinkedIn; where a profile is available we link to it for convenience.
                            </p>
                        </motion.div>
                    </div>

                    {/* Nexiler Company LinkedIn */}
                    <motion.a
                        href="https://www.linkedin.com/company/nexiler"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ y: -8, scale: 1.01 }}
                        className="group block max-w-3xl mx-auto mb-12 rounded-2xl overflow-hidden bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-[#0A66C2]/50 transition-all duration-300 cursor-pointer"
                    >
                        {/* Banner */}
                        <div className="relative h-32 sm:h-40 overflow-hidden">
                            <img
                                src="https://media.licdn.com/dms/image/v2/D4D3DAQE1PEP9MxAu7g/image-scale_191_1128/B4DZruYcrlJAAc-/0/1764935982743/nexiler_cover?e=1766613600&v=beta&t=-sGGEh2CBvveY4RGDH90-mbE9GGi2TIBSzry9M9IFuk"
                                alt="Nexiler Banner"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#00040F] via-transparent to-transparent" />
                        </div>
                        
                        {/* Company Info */}
                        <div className="p-6 flex items-center gap-4">
                            <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-white/20 group-hover:border-[#0A66C2]/50 transition-all shrink-0 bg-white">
                                <img
                                    src="https://media.licdn.com/dms/image/v2/D4D0BAQHX1IwndP6IFA/company-logo_200_200/B4DZre7n2dHwAQ-/0/1764676763531?e=1767830400&v=beta&t=6wG9bU8hxae0LPzyMvrJsZnVfaIMEvKlsVLD02v0be0"
                                    alt="Nexiler Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-white group-hover:text-[#0A66C2] transition-colors">
                                    Nexiler
                                </h3>
                                <p className="text-white/60 text-sm">
                                    Web Development, AI Automation & Business Growth
                                </p>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-white/50 group-hover:text-[#0A66C2] transition-colors">
                                <span className="hidden sm:inline">Follow on LinkedIn</span>
                                <ExternalLink size={18} />
                            </div>
                        </div>
                    </motion.a>

                    {/* LinkedIn Profile Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {teamMembers.map((member, index) => {
                            const isLastOdd = isOdd && index === teamMembers.length - 1;
                            return (
                                <motion.div
                                    key={member.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={isLastOdd ? "md:col-span-2 flex justify-center" : ""}
                                >
                                    <div className="w-full max-w-[380px]">
                                        <LinkedInProfile
                                            profileUrl={member.linkedinUrl}
                                            name={member.name}
                                            headline={member.headline || member.role}
                                            imageUrl={member.imageUrl}
                                            isFounder={member.isFounder}
                                            size="md"
                                        />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Special Thanks */}
                    <SpecialThanks />
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                <span className="text-white">Our </span>
                                <span className="text-gradient">Values</span>
                            </h2>
                            <p className="text-lg text-white/60">
                                The principles that guide everything we do
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-6 rounded-xl glass border border-white/10 hover:border-primary/50 transition-all text-center"
                            >
                                <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                                    <value.icon size={28} className="text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {value.title}
                                </h3>
                                <p className="text-white/60 text-sm">
                                    {value.description}
                                </p>
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
