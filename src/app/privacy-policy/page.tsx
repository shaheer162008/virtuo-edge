import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { pageMetadata } from "@/lib/siteContent";

export const metadata: Metadata = {
    title: pageMetadata.about.title,
    description: pageMetadata.about.description,
    keywords: pageMetadata.about.keywords,
    openGraph: {
        title: pageMetadata.about.title,
        description: pageMetadata.about.description,
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
                    <p className="text-white/60 text-center mb-12">Last updated: December 1, 2025</p>

                    <div className="space-y-8 text-white/80 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
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

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
                            <p className="mb-4">We use the information we collect to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Provide and improve our services</li>
                                <li>Respond to your inquiries and requests</li>
                                <li>Send you updates and marketing communications</li>
                                <li>Analyze usage patterns and optimize user experience</li>
                                <li>Ensure security and prevent fraud</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">3. Information Sharing</h2>
                            <p>
                                We do not sell, trade, or rent your personal information to third parties. We may share 
                                your information with trusted service providers who assist us in operating our business, 
                                conducting our services, or serving you, subject to confidentiality agreements.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">4. Data Security</h2>
                            <p>
                                We implement industry-standard security measures to protect your personal information from 
                                unauthorized access, disclosure, alteration, or destruction. However, no method of transmission 
                                over the Internet is 100% secure.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">5. Your Rights</h2>
                            <p className="mb-4">You have the right to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Access your personal information</li>
                                <li>Correct inaccurate data</li>
                                <li>Request deletion of your data</li>
                                <li>Opt-out of marketing communications</li>
                                <li>Object to certain processing activities</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">6. Cookies</h2>
                            <p>
                                We use cookies and similar tracking technologies to enhance your experience on our website. 
                                You can control cookies through your browser settings.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">7. Contact Us</h2>
                            <p>
                                If you have questions about this Privacy Policy, please contact us at:{" "}
                                <a href="mailto:privacy@nexiler.com" className="text-primary hover:underline">
                                    privacy@nexiler.com
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
