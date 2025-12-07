import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { generateMetadata } from "@/lib/metadata";
import ConsultationForm from "@/components/ConsultationForm";

export const metadata: Metadata = generateMetadata({
  title: "Book Free Consultation - AI Automation Expert Advice",
  description: "Schedule your free 30-minute consultation with Nexiler's AI automation experts. Get personalized advice on transforming your business with custom AI solutions. Fast response within 24 hours.",
  path: "/consultation",
  keywords: ["free consultation", "AI consultation", "business automation advice", "schedule consultation", "book appointment", "AI expert consultation"],
});

export default function ConsultationPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#00040F] -z-10" />
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-40"
          style={{
            background: 'radial-gradient(ellipse 70% 50% at 50% 20%, rgba(51, 187, 207, 0.15) 0%, transparent 70%)',
          }}
        />

        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm text-primary font-semibold">Free 30-Minute Expert Consultation</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span className="text-white">Let's Transform Your </span>
                <span className="text-gradient">Business Together</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
                Book a free consultation with our AI automation experts. We'll discuss your challenges, goals, 
                and create a customized roadmap for your digital transformation.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left: Benefits */}
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                  What You'll Get
                </h2>
                
                <div className="space-y-4">
                  {[
                    {
                      title: "Personalized AI Strategy",
                      description: "Custom automation roadmap tailored to your business needs and goals"
                    },
                    {
                      title: "Expert Technical Advice",
                      description: "Insights from experienced AI and development professionals"
                    },
                    {
                      title: "Cost & Timeline Estimate",
                      description: "Clear pricing and project timeline for your specific requirements"
                    },
                    {
                      title: "Q&A Session",
                      description: "Ask anything about AI automation, development, or our services"
                    },
                    {
                      title: "No Obligation",
                      description: "Completely free with no pressure to commit. Just valuable insights."
                    }
                  ].map((benefit, index) => (
                    <div 
                      key={index}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:border-primary/30 transition-all duration-300"
                    >
                      <h3 className="text-lg font-semibold text-white mb-2">
                        ✓ {benefit.title}
                      </h3>
                      <p className="text-white/60 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Trust Badges */}
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mt-8">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">230+</div>
                      <div className="text-xs text-white/60">Clients Served</div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">4.9/5</div>
                      <div className="text-xs text-white/60">Satisfaction</div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">24h</div>
                      <div className="text-xs text-white/60">Response Time</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Form */}
              <div>
                <ConsultationForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
