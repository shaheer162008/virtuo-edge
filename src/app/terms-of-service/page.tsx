import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
    title: "Terms of Service - Nexiler",
    description: "Read our terms of service and understand the guidelines for using Nexiler's services.",
    openGraph: {
        title: "Terms of Service - Nexiler",
        description: "Read our terms of service and understand the guidelines for using Nexiler's services.",
        type: "website",
    },
};

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10" />
                
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
                        <span className="text-gradient">Terms of Service</span>
                    </h1>
                    <p className="text-white/60 text-center mb-12">Last updated: December 1, 2025</p>

                    <div className="space-y-8 text-white/80 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
                            <p>
                                By accessing and using Nexiler&apos;s services, you accept and agree to be bound by these Terms of Service. 
                                If you do not agree to these terms, please do not use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">2. Services Description</h2>
                            <p className="mb-4">
                                Nexiler provides AI automation, custom software development, and related consulting services. 
                                We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">3. User Responsibilities</h2>
                            <p className="mb-4">You agree to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Provide accurate and complete information</li>
                                <li>Maintain the security of your account credentials</li>
                                <li>Use our services in compliance with all applicable laws</li>
                                <li>Not interfere with or disrupt our services</li>
                                <li>Not use our services for any unlawful purpose</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">4. Intellectual Property</h2>
                            <p>
                                All content, features, and functionality of our services are owned by Nexiler and are protected 
                                by international copyright, trademark, and other intellectual property laws. You may not reproduce, 
                                distribute, or create derivative works without our express written permission.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">5. Payment Terms</h2>
                            <p className="mb-4">
                                Payment terms are specified in individual service agreements. Generally:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Invoices are due within 30 days of issue</li>
                                <li>Late payments may incur additional fees</li>
                                <li>Refunds are provided according to our refund policy</li>
                                <li>You are responsible for all applicable taxes</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">6. Confidentiality</h2>
                            <p>
                                Both parties agree to maintain the confidentiality of any proprietary information shared during 
                                the course of our business relationship. This obligation survives the termination of services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">7. Limitation of Liability</h2>
                            <p>
                                Nexiler shall not be liable for any indirect, incidental, special, consequential, or punitive 
                                damages resulting from your use of our services. Our total liability shall not exceed the amount 
                                paid by you for the specific service giving rise to the claim.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">8. Termination</h2>
                            <p>
                                Either party may terminate services with written notice as specified in the service agreement. 
                                We reserve the right to suspend or terminate your access immediately if you breach these terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">9. Changes to Terms</h2>
                            <p>
                                We may update these Terms of Service from time to time. We will notify you of any material 
                                changes by posting the new terms on our website. Your continued use of our services after 
                                such changes constitutes acceptance of the new terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">10. Contact Information</h2>
                            <p>
                                For questions about these Terms of Service, please contact us at:{" "}
                                <a href="mailto:legal@nexiler.com" className="text-primary hover:underline">
                                    legal@nexiler.com
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
