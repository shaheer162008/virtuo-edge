"use client";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { LinkedInProfile } from "@/components/LinkedInProfile";
import { Lightbulb, Users, Globe, Award, ExternalLink } from "lucide-react";
import { teamExpertise } from "@/lib/team";

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

const leaders = [
    {
        name: "Ali Hamza",
        role: "Founder & CEO",
        description: "Ali founded Virtuo Edge with a simple belief: digital work must solve business problems, not just look good. With hands-on experience in web development, digital marketing, and client-focused project delivery, he leads strategy and product thinking at Virtuo Edge, turning challenges into clear, actionable digital roadmaps.",
        linkedinUrl: "https://www.linkedin.com/in/ali-hamza-link/",
        imageUrl: "https://media.licdn.com/dms/image/v2/D4E03AQF45-VNphS-aw/profile-displayphoto-shrink_800_800/B4EZTRO4f0HMAk-/0/1738677132595?e=1770249600&v=beta&t=E3XFwpEeas5iqRdgJSRmdD8sWs65_SwMoZWeJCPP7Ns",
        id: "ali-hamza",
        isFounder: true,
        founderBadgeText: "Founder & CEO",
    },
    {
        name: "Muhammad Rayan",
        role: "Director of Operations & Co-Founder",
        description: "Muhammad Rayan oversees operations, project delivery, and client success. With a strong background in process management and team leadership, he ensures projects run smoothly from kickoff to launch, maintaining quality, timelines, and consistency across all services.",
        linkedinUrl: "https://www.linkedin.com/in/mahummad-rayan-9ba016261/",
        imageUrl: "https://media.licdn.com/dms/image/v2/D4E35AQG2HaTd-dwpSg/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1734793967145?e=1769198400&v=beta&t=RWBd75b9kO7DR2egwIDPlFcA7ByO5D9XkBhikar3dYg",
        id: "muhammad-rayan",
        isFounder: true,
        founderBadgeText: "Co-Founder",
    },
];

export default function AboutPage() {
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
                        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6">
                            <span className="text-white">About </span>
                            <span className="text-gradient">Virtuo Edge</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-white/70">
                            A full-service digital agency born from a single idea: helping businesses solve real problems by making them truly digital.
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
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">
                                <span className="text-gradient">Our Story</span>
                            </h2>
                            
                            <div className="space-y-6 text-white/70 text-base sm:text-lg md:text-xl leading-relaxed">
                                <p>
                                    Virtuo Edge started when a small group of freelancers and digital specialists saw the same recurring problem: companies were getting 
                                    beautiful websites and campaigns that looked impressive but failed to solve real business challenges. Founded by <strong className="text-white">Ali Hamza</strong>, 
                                    Virtuo Edge was created to change that to deliver digital solutions that are practical, measurable, and aligned with clients' real goals.
                                </p>
                                <p>
                                    Today, our team works as one integrated unit to design, build, and optimize solutions that produce meaningful results.
                                </p>

                                <p>
                                    We are not here just to make money. We want to solve real problems and help clients reach meaningful outcomes and grow the way they envision. We focus on lasting impact, honest advice, and building tools that make work easier for people.
                                </p>
                            </div>

                            {/* Vision Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                                <div className="p-4 sm:p-6 rounded-xl glass border border-white/10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 rounded-lg bg-primary/10">
                                            <Lightbulb size={24} className="text-primary" />
                                        </div>
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">The Vision</h3>
                                    </div>
                                    <p className="text-sm sm:text-base md:text-lg text-white/60">
                                        Build a company that helps businesses worldwide with top-tier development, strategy, design, and marketing all under one roof.
                                    </p>
                                </div>
                                <div className="p-4 sm:p-6 rounded-xl glass border border-white/10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 rounded-lg bg-primary/10">
                                            <Globe size={24} className="text-primary" />
                                        </div>
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">Our Goal</h3>
                                    </div>
                                    <p className="text-sm sm:text-base md:text-lg text-white/60">
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
                            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6">
                                <span className="text-white">Our </span>
                                <span className="text-gradient">Expertise</span>
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl text-white/60">
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
                                <span className="text-white/80 text-base sm:text-lg">{expertise}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="py-20 bg-white/[0.02]">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6">
                                <span className="text-white">Leadership</span>
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl text-white/60">
                                Meet the founders leading Virtuo Edge
                            </p>
                        </motion.div>
                    </div>

                    {/* Virtuo Edge Company LinkedIn */}
                    <motion.a
                        href="https://www.linkedin.com/company/virtuoedge"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ y: -8, scale: 1.01 }}
                        className="group block max-w-3xl mx-auto mb-12 rounded-2xl overflow-hidden bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-300 cursor-pointer"
                    >
                        {/* Banner */}
                        <div className="relative h-32 sm:h-40 overflow-hidden">
                            <img
                                src="https://media.licdn.com/dms/image/v2/D4D3DAQFLQdOlg3tMmw/image-scale_191_1128/B4DZXm04QWHsAc-/0/1743334378415/virtuo_edge_cover?e=1769198400&v=beta&t=C6QNjsWBcIeUIRy2arv4Lci5N6WeGsOnen2BZqf5sCA"
                                alt="Virtuo Edge Banner"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#00040F] via-transparent to-transparent" />
                        </div>
                        
                        {/* Company Info */}
                        <div className="p-6 flex items-center gap-4">
                            <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-white/20 group-hover:border-primary/50 transition-all shrink-0 bg-white">
                                <img
                                    src="https://media.licdn.com/dms/image/v2/D4D0BAQHugQYCz0D8TQ/company-logo_200_200/company-logo_200_200/0/1738965253639/virtuo_edge_logo?e=1770249600&v=beta&t=GuFASft9jtRzw90yleQFLjJxTUqrfSxpPaNrcGsFNhU"
                                    alt="Virtuo Edge Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors">
                                    Virtuo Edge
                                </h3>
                                <p className="text-white/60 text-base sm:text-lg">
                                    Web Development, Digital Strategy & Business Growth
                                </p>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-white/50 group-hover:text-primary transition-colors">
                                <span className="hidden sm:inline">Follow on LinkedIn</span>
                                <ExternalLink size={18} />
                            </div>
                        </div>
                    </motion.a>

                    {/* Symmetric LinkedIn Profile Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {leaders.map((leader, index) => (
                            <motion.div
                                key={leader.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <LinkedInProfile
                                    profileUrl={leader.linkedinUrl}
                                    name={leader.name}
                                    headline={leader.role}
                                    imageUrl={leader.imageUrl}
                                    isFounder={leader.isFounder}
                                    founderBadgeText={leader.founderBadgeText}
                                    size="md"
                                />
                            </motion.div>
                        ))}
                    </div>
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
                            <p className="text-base sm:text-lg md:text-xl text-white/60">
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
                                className="p-4 sm:p-6 rounded-xl glass border border-white/10 hover:border-primary/50 transition-all text-center"
                            >
                                <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                                    <value.icon size={28} className="text-primary" />
                                </div>
                                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">
                                    {value.title}
                                </h3>
                                <p className="text-white/60 text-sm sm:text-base md:text-lg">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Note from Team Section */}
            <section className="py-20 bg-white/[0.02]">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                            <span className="text-white">A Note from </span>
                            <span className="text-gradient">the Team</span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed">
                            Every project is a partnership. We invest time in understanding your business goals and commit to delivering work that truly moves the needle. If you're looking for a digital partner who treats your challenges like their own, let's talk.
                        </p>
                    </motion.div>
                </div>
            </section>

            <Newsletter />
            <Footer />
        </main>
    );
}
