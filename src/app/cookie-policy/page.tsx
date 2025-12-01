import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

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
                    <p className="text-white/60 text-center mb-12">Last updated: December 1, 2025</p>

                    <div className="space-y-8 text-white/80 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">What Are Cookies?</h2>
                            <p>
                                Cookies are small text files that are placed on your device when you visit our website. 
                                They help us provide you with a better experience by remembering your preferences and 
                                understanding how you use our site.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">Types of Cookies We Use</h2>
                            
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Essential Cookies</h3>
                                    <p>
                                        These cookies are necessary for the website to function properly. They enable basic 
                                        functions like page navigation and access to secure areas of the website.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Analytics Cookies</h3>
                                    <p>
                                        These cookies help us understand how visitors interact with our website by collecting 
                                        and reporting information anonymously. This helps us improve our website performance.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Functionality Cookies</h3>
                                    <p>
                                        These cookies allow us to remember choices you make and provide enhanced, more 
                                        personalized features, such as language preferences and display settings.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Marketing Cookies</h3>
                                    <p>
                                        These cookies track your online activity to help advertisers deliver more relevant 
                                        advertising or to limit how many times you see an ad.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">How to Control Cookies</h2>
                            <p className="mb-4">
                                You can control and manage cookies in various ways:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Browser settings: Most browsers allow you to refuse or accept cookies</li>
                                <li>Third-party tools: Use privacy tools to block tracking cookies</li>
                                <li>Opt-out links: Many advertising networks provide opt-out options</li>
                                <li>Device settings: Mobile devices have privacy settings for cookies</li>
                            </ul>
                            <p className="mt-4">
                                Note that blocking some types of cookies may impact your experience on our website 
                                and limit the services we can provide.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">Third-Party Cookies</h2>
                            <p>
                                We may use third-party services such as Google Analytics, social media platforms, and 
                                advertising networks that set cookies on your device. These third parties have their 
                                own privacy policies governing their use of information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">Updates to This Policy</h2>
                            <p>
                                We may update this Cookie Policy from time to time to reflect changes in our practices 
                                or for other operational, legal, or regulatory reasons. Please check this page periodically 
                                for updates.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
                            <p>
                                If you have questions about our use of cookies, please contact us at:{" "}
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
