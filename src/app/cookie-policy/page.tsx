import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Cookie, Settings, BarChart3, Wrench, Shield, Globe, RefreshCw, Mail, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
    title: "Cookie Policy - Nexiler",
    description: "Learn about how Nexiler uses cookies to improve your browsing experience.",
    openGraph: {
        title: "Cookie Policy - Nexiler",
        description: "Learn about how Nexiler uses cookies to improve your browsing experience.",
        type: "website",
    },
};

export default function CookiePolicyPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10" />
                
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
                        <span className="text-gradient">Cookie Policy</span>
                    </h1>
                    <p className="text-white/60 text-center mb-8">Last updated: December 12, 2025</p>

                    <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 mb-10">
                        <div className="flex items-center justify-center gap-3 text-white/80">
                            <Cookie className="w-6 h-6 text-primary" />
                            <p>
                                <strong className="text-white">What Are Cookies?</strong> Cookies are small text files stored on your device that help us provide you with a better browsing experience.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6 text-white/80 leading-relaxed">
                        <section className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                            <h2 className="text-xl font-semibold text-white mb-4">Types of Cookies We Use</h2>
                            
                            <div className="space-y-5">
                                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Wrench className="w-5 h-5 text-primary" />
                                        <h3 className="text-lg font-semibold text-primary">Essential Cookies</h3>
                                    </div>
                                    <p>
                                        These cookies are necessary for the website to function properly. They enable basic 
                                        functions like page navigation and access to secure areas of the website.
                                    </p>
                                </div>

                                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                    <div className="flex items-center gap-2 mb-2">
                                        <BarChart3 className="w-5 h-5 text-primary" />
                                        <h3 className="text-lg font-semibold text-primary">Analytics Cookies</h3>
                                    </div>
                                    <p>
                                        These cookies help us understand how visitors interact with our website by collecting 
                                        and reporting information anonymously. This helps us improve our website performance.
                                    </p>
                                </div>

                                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Settings className="w-5 h-5 text-primary" />
                                        <h3 className="text-lg font-semibold text-primary">Functionality Cookies</h3>
                                    </div>
                                    <p>
                                        These cookies allow us to remember choices you make and provide enhanced, more 
                                        personalized features, such as language preferences and display settings.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                            <div className="flex items-center gap-2 mb-4">
                                <Shield className="w-5 h-5 text-white" />
                                <h2 className="text-xl font-semibold text-white">How to Control Cookies</h2>
                            </div>
                            <p className="mb-4">
                                You can control and manage cookies in various ways:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong className="text-white">Browser settings:</strong> Most browsers allow you to refuse or accept cookies</li>
                                <li><strong className="text-white">Third-party tools:</strong> Use privacy tools to block tracking cookies</li>
                                <li><strong className="text-white">Opt-out links:</strong> Many advertising networks provide opt-out options</li>
                                <li><strong className="text-white">Device settings:</strong> Mobile devices have privacy settings for cookies</li>
                            </ul>
                            <div className="flex items-start gap-2 mt-4 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                                <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
                                <p className="text-white/60 text-base sm:text-lg">
                                    Note: Blocking some types of cookies may impact your experience on our website 
                                    and limit the services we can provide.
                                </p>
                            </div>
                        </section>

                        <section className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                            <div className="flex items-center gap-2 mb-4">
                                <Globe className="w-5 h-5 text-white" />
                                <h2 className="text-xl font-semibold text-white">Third-Party Cookies</h2>
                            </div>
                            <p>
                                We may use third-party services such as Google Analytics that set cookies on your device. 
                                These third parties have their own privacy policies governing their use of information.
                            </p>
                        </section>

                        <section className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                            <div className="flex items-center gap-2 mb-4">
                                <RefreshCw className="w-5 h-5 text-white" />
                                <h2 className="text-xl font-semibold text-white">Updates to This Policy</h2>
                            </div>
                            <p>
                                We may update this Cookie Policy from time to time to reflect changes in our practices 
                                or for other operational, legal, or regulatory reasons. Please check this page periodically 
                                for updates.
                            </p>
                        </section>

                        <section className="p-6 rounded-xl bg-primary/10 border border-primary/30">
                            <div className="flex items-center gap-2 mb-4">
                                <Mail className="w-5 h-5 text-white" />
                                <h2 className="text-xl font-semibold text-white">Contact Us</h2>
                            </div>
                            <p>
                                If you have questions about our use of cookies, please contact us at:{" "}
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
