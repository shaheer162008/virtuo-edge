"use client";
import { motion } from "framer-motion";

const testimonials = [
    {
        quote: "This platform has completely transformed how we build AI applications. The speed and efficiency are unmatched.",
        name: "Alex Rivera",
        role: "CTO at TechFlow",
        handle: "@arivera",
    },
    {
        quote: "The best investment we've made this year. The automation features alone have saved us hundreds of hours.",
        name: "Sarah Chen",
        role: "Product Manager",
        handle: "@schen_pm",
    },
    {
        quote: "Incredible user experience and top-notch support. Highly recommended for any startup looking to scale.",
        name: "James Wilson",
        role: "Founder at NextGen",
        handle: "@jwilson",
    },
];

export const Testimonials = () => {
    return (
        <section className="py-20 md:py-32 border-t border-white/5 relative overflow-hidden">
            {/* Manual Spotlight */}
            <div className="absolute bottom-1/4 right-1/3 w-[180px] h-[180px] sm:w-[320px] sm:h-[320px] lg:w-[500px] lg:h-[500px] bg-purple-500/[0.05] rounded-full blur-3xl pointer-events-none" />
            
            <div className="container relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-center mb-16">
                    Loved by builders
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent hover:border-primary/30 transition-all duration-300 group relative"
                        >
                            {/* Inner Spotlight */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.03] to-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className="relative z-10">
                                <p className="text-lg text-white/80 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                            <div className="flex items-center gap-3">
                                <div className="size-10 rounded-full bg-white/10 flex items-center justify-center text-lg font-bold group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                                    {testimonial.name[0]}
                                </div>
                                <div>
                                    <div className="font-semibold">{testimonial.name}</div>
                                    <div className="text-sm text-white/40">{testimonial.role}</div>
                                </div>
                            </div>
                            </div>
                            
                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10">
                                <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
