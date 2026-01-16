'use client';

import { motion } from 'framer-motion';
import { teamMembers } from '@/lib/team';
import LinkedInProfile from './LinkedInProfile';
import { ChevronDown } from 'lucide-react';

export default function CoFoundersSection() {
    // Filter only co-founders (Muhammad Shaheer, Rabbiya Sohail, Muhammad Saim)
    const coFounders = teamMembers.filter((member) => member.isFounder).slice(0, 3);

    return (
        <section className="py-20 bg-white/[0.02] relative">
            <div className="container mx-auto px-4">
                {/* Scroll Down Indicator - Hidden on Mobile */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-white/50 text-sm sm:text-base mb-3 hidden sm:block">Scroll down to meet</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
                        <span className="text-white">Our </span>
                        <span className="text-gradient">Founder & Co-Founders</span>
                    </h2>
                    <p className="text-white/60 text-base sm:text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
                        Meet the leadership team driving Virtuo Edge's vision. <strong className="text-white">Muhammad Shaheer</strong> founded Virtuo Edge with a mission to democratize AI automation and digital innovation. 
                        Supporting him are our exceptional co-founders <strong className="text-white">Rabbiya Sohail</strong> and <strong className="text-white">Muhammad Saim</strong>, who bring expertise in graphic design, social media strategy, and full-stack development. 
                        Together, they've built a company dedicated to delivering transformative solutions for businesses worldwide.
                    </p>

                    {/* Animated Scroll Indicator - Hidden on Mobile */}
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex justify-center hidden sm:flex"
                    >
                        <div className="inline-flex items-center justify-center p-2 rounded-full border border-primary/30 bg-primary/5">
                            <ChevronDown size={20} className="text-primary" />
                        </div>
                    </motion.div>
                </motion.div>

                {/* Co-Founders Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
                    {coFounders.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex justify-center"
                        >
                            <div className="w-full max-w-[320px]">
                                <LinkedInProfile
                                    profileUrl={member.linkedinUrl}
                                    name={member.name}
                                    headline={member.headline || member.role}
                                    imageUrl={member.imageUrl}
                                    isFounder={member.isFounder}
                                    founderBadgeText={member.founderBadgeText}
                                    size="md"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Leadership Message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="max-w-3xl mx-auto space-y-6"
                >
                    <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10">
                        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">Our Leadership Philosophy</h3>
                        <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-4">
                            Our founder and co-founders of Virtuo Edge share a common vision: to create transformative solutions that help businesses thrive in the digital age. 
                            With combined expertise spanning AI automation, full-stack development, and creative design, they've built a company where innovation meets reliability.
                        </p>
                        <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                            Every decision we make, every service we offer, and every client relationship we build reflects the values established by our founding team. 
                            Their commitment to excellence, transparency, and client success sets the standard for everyone at Virtuo Edge.
                        </p>
                    </div>

                    <div className="p-6 sm:p-8 rounded-2xl bg-primary/5 border border-primary/20">
                        <p className="text-white text-base sm:text-lg leading-relaxed italic">
                            <strong>"We believe great businesses are built on trust, innovation, and the right team."</strong> 
                            — Leadership Team, Virtuo Edge
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
