import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
    title: "Terms of Service - Nexiler | Digital Transformation & Business Growth",
    description: "Clear, transparent terms for Nexiler's web development, AI automation, and business growth services. Learn about our result guarantees, payment terms, and partnership commitments.",
    openGraph: {
        title: "Terms of Service - Nexiler | Digital Transformation & Business Growth",
        description: "Clear, transparent terms for Nexiler's web development, AI automation, and business growth services. Learn about our result guarantees, payment terms, and partnership commitments.",
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
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 text-center">
                        <span className="text-gradient">Terms of Service</span>
                    </h1>
                    <p className="text-base sm:text-lg text-white/60 text-center mb-8">Last updated: December 17, 2025</p>
                    
                    <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/30 mb-8">
                        <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
                            Welcome to Nexiler. We're all about building honest partnerships that drive real results for your business. 
                            Whether you need a powerful web app, smart automation, or a strategy to scale your brand, these terms make sure 
                            we're on the same page from day one. We've kept this simple and clear because we believe great work starts with trust.
                        </p>
                    </div>

                    <div className="p-4 sm:p-6 rounded-2xl bg-primary/5 border border-primary/20 mb-10">
                        <p className="text-base sm:text-lg md:text-xl text-white/80">
                            <strong className="text-white">Summary:</strong> We build websites, automate workflows, and grow brands. 
                            Here's how it works: you approve a proposal, pay upfront to lock in your spot, and we deliver. If we promise a specific result, 
                            we stick with you until you get it. Simple as that.
                        </p>
                    </div>

                    <div className="space-y-6 sm:space-y-8 text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
                        <section className="p-4 sm:p-6 md:p-8 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-base font-bold">1</span>
                                Acceptance and Agreement
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg">
                                By accessing our website, engaging in consultations, or signing a proposal/Statement of Work (SOW) with Nexiler (the "Agency"), 
                                you ("Client") agree to be bound by these Terms of Service. These terms apply to all digital services, including Web Development, 
                                AI Automation, Branding, Digital Marketing, and Custom Solutions.
                            </p>
                        </section>

                        <section className="p-4 sm:p-6 md:p-8 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">2</span>
                                Services and Scope
                            </h2>
                            <p className="mb-4 text-sm sm:text-base md:text-lg">
                                We help businesses grow using technology. Our sweet spot? Building systems that save you time, attract customers, 
                                and scale your operations.
                            </p>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-3 mt-6">2.1 Service Offerings</h3>
                            <p className="mb-3 text-sm sm:text-base md:text-lg">Our services include:</p>
                            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base md:text-lg">
                                <li>Website Development and Custom Web Applications</li>
                                <li>AI/ML Automation, Chatbot Integration, and Data Strategy</li>
                                <li>Brand Identity and Graphic Design</li>
                                <li>Advanced SEO, Performance Marketing, and Social Media Management</li>
                                <li>Video Production, Motion Graphics, and 3D Visualization</li>
                                <li><strong className="text-white">Custom Business Growth Packages and Consulting</strong></li>
                            </ul>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-3 mt-6">2.2 What's Included</h3>
                            <p className="text-sm sm:text-base md:text-lg">
                                Every project gets a clear proposal that spells out exactly what we're building, when you'll get it, and what it costs. 
                                If you want to add something later that wasn't in the original plan, we'll quote it separately and update the timeline.
                            </p>
                        </section>

                        <section className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">3</span>
                                Project Engagement and Milestones
                            </h2>
                            <p className="mb-4">
                                Here's how we work: we chat about your needs, send you a proposal, you approve and pay to get started, we build your project 
                                with regular updates, deliver the final product, and then provide support.
                            </p>
                            <h3 className="text-xl font-semibold text-white mb-3 mt-6">3.1 Sign Off & Payment</h3>
                            <p>
                                At major milestones, you'll review the work and give us the thumbs up before we move forward. Your approval triggers the 
                                next payment and keeps things moving.
                            </p>
                        </section>

                        <section className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">4</span>
                                Client Responsibilities and Delays
                            </h2>
                            <p className="mb-4">
                                The timely success of the project is dependent on the Client's prompt cooperation.
                            </p>
                            <h3 className="text-xl font-semibold text-white mb-3">4.1 What We Need From You</h3>
                            <p className="mb-4">
                                Send us your content, images, brand files, and login details on time so we can keep your project moving. 
                                The faster you get us what we need, the faster we deliver.
                            </p>
                            <h3 className="text-xl font-semibold text-white mb-3">4.2 Stay Responsive</h3>
                            <p className="mb-4">
                                Please reply to our messages and approve work <strong className="text-white">within 3 business days</strong>. 
                                Quick responses keep your project on track.
                            </p>
                            <h3 className="text-xl font-semibold text-white mb-3">4.3 If You're Running Behind</h3>
                            <p>
                                <strong className="text-white">If we don't hear back from you within 3 days, your timeline gets pushed back by the same amount.</strong> 
                                We can't hit deadlines without your input. Long delays might mean extra fees to keep your project slot reserved.
                            </p>
                        </section>

                        <section className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">5</span>
                                Payment Terms and Late Fees
                            </h2>
                            <p className="mb-4">
                                Let's talk money. Here's how payment works:
                            </p>
                            <div className="overflow-x-auto mb-4">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b border-white/20">
                                            <th className="text-left py-2 px-3 text-white font-semibold">Payment Type</th>
                                            <th className="text-left py-2 px-3 text-white font-semibold">Standard Term</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-white/10">
                                            <td className="py-2 px-3"><strong className="text-white">One-Time Projects</strong></td>
                                            <td className="py-2 px-3">Typically 50% upfront, 50% upon final completion/delivery.</td>
                                        </tr>
                                        <tr className="border-b border-white/10">
                                            <td className="py-2 px-3"><strong className="text-white">Monthly Retainers</strong></td>
                                            <td className="py-2 px-3">Full payment due on the first day of the billing cycle.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3 mt-6">5.1 When Payment Is Due</h3>
                            <p className="mb-4">
                                You have <strong className="text-white">7 days</strong> to pay each invoice from the day we send it. 
                                We'll mention in your proposal if your project has different terms.
                            </p>
                            <h3 className="text-xl font-semibold text-white mb-3">5.2 What Happens If You're Late</h3>
                            <p className="mb-4">
                                <strong className="text-white">Miss the 7 day window and we pause your project</strong> until you're paid up (including any late fees). 
                                Getting things going again might cost an extra $250 to restart.
                            </p>
                            <h3 className="text-xl font-semibold text-white mb-3">5.3 Late Fees</h3>
                            <p>
                                <strong className="text-white">After the 7 day grace period, we add a 2% fee every 2 days until you pay.</strong> 
                                These fees add up fast, so it's best to pay on time.
                            </p>
                        </section>

                        <section className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">6</span>
                                Revisions and Change Management
                            </h2>
                            <h3 className="text-xl font-semibold text-white mb-3">6.1 Changes We Include</h3>
                            <p className="mb-4">
                                You get a few rounds of tweaks included in your package (usually two). Just keep them focused on what we already agreed to build.
                            </p>
                            <h3 className="text-xl font-semibold text-white mb-3">6.2 Big Changes</h3>
                            <p className="mb-3">
                                Want to add a whole new feature or change direction? No problem, but we'll need to quote it separately.
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>We'll send you a price and updated timeline for the new work</li>
                                <li>You approve and pay before we start the extra work</li>
                            </ul>
                        </section>

                        <section className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">7</span>
                                Intellectual Property (IP)
                            </h2>
                            <h3 className="text-xl font-semibold text-white mb-3">7.1 It's Yours When You Pay</h3>
                            <p className="mb-4">
                                <strong className="text-white">Once you pay in full</strong>, everything we custom build for you belongs to you. 
                                Your website, your designs, your code.
                            </p>
                            <h3 className="text-xl font-semibold text-white mb-3">7.2 Our Tools Stay Ours</h3>
                            <p className="mb-4">
                                <strong className="text-white">The frameworks, libraries, and systems we use to build your project stay with us.</strong> 
                                You can use them in your final product, but we keep the underlying tech for future projects.
                            </p>
                            <h3 className="text-xl font-semibold text-white mb-3">7.3 Until You Pay</h3>
                            <p className="mb-4">
                                <strong className="text-white">We own everything until the final invoice is paid.</strong> Simple as that.
                            </p>
                            <h3 className="text-xl font-semibold text-white mb-3">7.4 Can We Show Off Your Project?</h3>
                            <p>
                                We'd love to feature your project in our portfolio unless you need to keep it private. Just let us know if you need an NDA.
                            </p>
                        </section>

                        <section className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">9</span>
                                Confidentiality and Data
                            </h2>
                            <p>
                                Your secrets are safe with us. We won't share your business info, strategies, or login details with anyone. 
                                This stays true even after our project ends.
                            </p>
                        </section>

                        <section className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">10</span>
                                Project Cancellation and Termination
                            </h2>
                            <h3 className="text-xl font-semibold text-white mb-3">10.1 If You Cancel</h3>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>
                                    <em>Before we start:</em> Full refund, no questions asked.
                                </li>
                                <li>
                                    <em>After we've started:</em> <strong className="text-white">You pay for the work we've done.</strong> 
                                    We calculate this by our hourly rate or by how much of the project is complete.
                                </li>
                            </ul>
                            <h3 className="text-xl font-semibold text-white mb-3">10.2 Monthly Plans</h3>
                            <p className="mb-4">
                                Give us <strong className="text-white">30 days notice</strong> to cancel. You won't get a refund for the current month.
                            </p>
                            <h3 className="text-xl font-semibold text-white mb-3">10.3 If We Cancel</h3>
                            <p>
                                We might cancel if you break these terms (like not paying or disappearing). You'll have 7 days to fix the issue. 
                                If not, you pay for work completed and we part ways.
                            </p>
                        </section>

                        <section className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">11</span>
                                Limitation of Liability
                            </h2>
                            <p>
                                We're not liable for lost profits or business opportunities. <strong className="text-white">The most we'd ever owe you is what you 
                                paid us for that specific project.</strong> We're also not responsible for issues with third party tools like hosting providers or 
                                payment processors.
                            </p>
                        </section>

                        <section className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">8</span>
                                Warranties and Guarantees
                            </h2>
                            <p className="mb-4">
                                We do quality work. Period.
                            </p>
                            <h3 className="text-xl font-semibold text-white mb-3">8.1 Our Guarantee</h3>
                            <p className="mb-3">
                                <strong className="text-white">If we promise a specific result in your proposal, we'll work with you until you get it.</strong> 
                                No extra charges for support or fixes if we said we'd deliver it.
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>
                                    We'll provide free support and adjustments until you hit the goal we agreed on
                                </li>
                                <li>
                                    This doesn't cover issues on your end (like hosting problems) or things beyond our control (like Google changing their algorithm)
                                </li>
                            </ul>
                            <h3 className="text-xl font-semibold text-white mb-3">8.2 What We Don't Guarantee</h3>
                            <p>
                                We can't guarantee you'll make X dollars or see Y% growth unless we specifically wrote that into your proposal. 
                                Too many factors are outside our control.
                            </p>
                        </section>

                        <section className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">12</span>
                                Governing Law and Dispute Resolution
                            </h2>
                            <p className="mb-4">
                                This agreement follows international business law.
                            </p>
                            <p>
                                Got a problem? Let's talk it out first. If we can't figure it out together, we'll use mediation or arbitration.
                            </p>
                        </section>

                        <section className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">13</span>
                                Changes to Terms
                            </h2>
                            <p>
                                We might update these terms occasionally. If we make big changes, we'll email you <strong className="text-white">15 days 
                                before</strong> they kick in. Keep using our services after that and you're agreeing to the new terms.
                            </p>
                        </section>

                        <section className="p-6 rounded-xl bg-primary/10 border border-primary/30">
                            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/30 flex items-center justify-center text-primary text-sm font-bold">14</span>
                                Contact Information
                            </h2>
                            <p className="mb-4">
                                Questions about any of this? Just email us.
                            </p>
                            <p className="mb-4">
                                <strong className="text-white">Email:</strong>{" "}
                                <a href="mailto:contact@nexiler.tech" className="text-primary hover:underline">
                                    contact@nexiler.tech
                                </a>
                            </p>
                            <p className="text-white/90">
                                Thanks for choosing Nexiler. Let's build something great together.
                            </p>
                        </section>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
