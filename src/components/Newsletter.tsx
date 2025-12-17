"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setStatus("success");
                setEmail("");
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 3000);
            }
        } catch (error) {
            console.error('Newsletter subscription error:', error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    return (
        <section className="py-20 md:py-24 relative overflow-hidden">
            {/* Spotlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] sm:w-[420px] sm:h-[420px] lg:w-[600px] lg:h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="text-white">Stay </span>
                        <span className="text-gradient">Updated</span>
                    </h2>
                    <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
                        Get the latest insights on AI automation, development tips, and exclusive offers delivered straight to your inbox.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            disabled={status === "loading" || status === "success"}
                            className="flex-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                        <motion.button
                            type="submit"
                            disabled={status === "loading" || status === "success"}
                            whileHover={{ scale: status === "idle" ? 1.05 : 1 }}
                            whileTap={{ scale: status === "idle" ? 0.95 : 1 }}
                            className="px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-xl font-bold hover:bg-white/20 hover:border-white/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2 min-w-[140px]"
                        >
                            {status === "loading" && (
                                <div className="size-5 border-2 border-dark/30 border-t-dark rounded-full animate-spin" />
                            )}
                            {status === "success" && (
                                <>
                                    <CheckCircle2 size={20} />
                                    <span>Subscribed!</span>
                                </>
                            )}
                            {status === "idle" && (
                                <>
                                    <span>Subscribe</span>
                                    <Send size={18} />
                                </>
                            )}
                            {status === "error" && <span>Try Again</span>}
                        </motion.button>
                    </form>

                    {status === "success" && (
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-4 text-primary text-sm"
                        >
                            ✨ Thank you for subscribing! Check your inbox for confirmation.
                        </motion.p>
                    )}

                    <p className="text-xs text-white/40 mt-6">
                        We respect your privacy. Unsubscribe at any time.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
