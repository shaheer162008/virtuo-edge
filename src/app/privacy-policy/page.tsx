import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
    title: "Privacy Policy - Nexiler",
    description: "Learn how Nexiler collects, uses, and protects your personal information. Your privacy is our priority.",
    openGraph: {
        title: "Privacy Policy - Nexiler",
        description: "Learn how Nexiler collects, uses, and protects your personal information.",
        type: "website",
    },
};

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10" />
                
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
                        <span className="text-gradient">Privacy Policy</span>
                    </h1>
                    <p className="text-white/60 text-center mb-8">Last updated: December 12, 2025</p>

                    <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 mb-10">
                        <p className="text-white/80 text-center">
                            🔒 <strong className="text-white">Your Privacy Matters:</strong> We believe in transparency. This policy explains exactly what data we collect, why we need it, and how we protect it. No hidden terms, no surprises.
                        </p>
                    </div>

                    <div className="space-y-6 text-white/80 leading-relaxed">
                        <section className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-base font-bold">1</span>
                                Information We Collect
                            </h2>
                            <p className="mb-4">
                                We collect information that you provide directly to us, including when you create an account, 
                                subscribe to our newsletter, request information, or contact us for support.
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Name and contact information</li>
                                <li>Company details</li>
                                <li>Email address</li>
                                <li>Project requirements and preferences</li>
                            </ul>
                        </section>

                        <section className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-base font-bold">2</span>
                                How We Use Your Information
                            </h2>
                            <p className="mb-4">We use the information we collect to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Provide and improve our services</li>
                                <li>Respond to your inquiries and requests</li>
                                <li>Send you updates and marketing communications (only with your consent)</li>
                                <li>Analyze usage patterns and optimize user experience</li>
                                <li>Ensure security and prevent fraud</li>
                            </ul>
                        </section>

                        <section className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-base font-bold">3</span>
                                Information Sharing
                            </h2>
                            <p>
                                We do not sell, trade, or rent your personal information to third parties. We may share 
                                your information with trusted service providers who assist us in operating our business, 
                                conducting our services, or serving you, subject to confidentiality agreements.
                            </p>
                        </section>

                        <section className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-base font-bold">4</span>
                                Data Security
                            </h2>
                            <p>
                                We implement industry-standard security measures to protect your personal information from 
                                unauthorized access, disclosure, alteration, or destruction. However, no method of transmission 
                                over the Internet is 100% secure.
                            </p>
                        </section>

                        <section className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-base font-bold">5</span>
                                Your Rights
                            </h2>
                            <p className="mb-4">You have the right to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Access your personal information</li>
                                <li>Correct inaccurate data</li>
                                <li>Request deletion of your data</li>
                                <li>Opt-out of marketing communications</li>
                                <li>Object to certain processing activities</li>
                            </ul>
                        </section>

                        <section className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-base font-bold">6</span>
                                Cookies
                            </h2>
                            <p>
                                We use cookies and similar tracking technologies to enhance your experience on our website. 
                                You can control cookies through your browser settings. For more details, please see our{" "}
                                <a href="/cookie-policy" className="text-primary hover:underline">Cookie Policy</a>.
                            </p>
                        </section>

                        <section className="p-6 rounded-xl bg-primary/10 border border-primary/30">
                            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/30 flex items-center justify-center text-primary text-base font-bold">7</span>
                                Contact Us
                            </h2>
                            <p>
                                If you have questions about this Privacy Policy or want to exercise your rights, please contact us at:{" "}
                                <a href="mailto:contact@nexiler.tech" className="text-primary hover:underline">
                                    contact@nexiler.tech
                                </a>
                            </p>
                        </section>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
