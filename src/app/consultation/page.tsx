"use client";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ConsultationForm from "@/components/ConsultationForm";
import { Check, Clock, Users, Zap, MessageCircle, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function ConsultationPage() {
  const benefits = [
    {
      icon: Zap,
      title: "Personalized AI Strategy",
      description: "Custom automation roadmap tailored to your business needs"
    },
    {
      icon: MessageCircle,
      title: "Expert Technical Advice",
      description: "Insights from experienced AI and development professionals"
    },
    {
      icon: Clock,
      title: "Cost & Timeline Estimate",
      description: "Clear pricing and project timeline for your requirements"
    },
    {
      icon: Shield,
      title: "No Obligation",
      description: "Completely free with no pressure to commit"
    }
  ];

  return (
    <main className="min-h-screen bg-[#00040F]">
      <Navbar />
      
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10" />
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] -z-10 opacity-30"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(51, 187, 207, 0.2) 0%, transparent 70%)',
          }}
        />

        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-10 sm:mb-14">
              {/* Badge similar to homepage hero */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className="flex justify-center mb-6 sm:mb-8"
              >
                <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full glass border border-primary/30 hover:border-primary/50 transition-all duration-500">
                  <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs sm:text-sm md:text-base text-white/80 font-medium">Free 30-Minute Expert Consultation • Fast Response Within 24 Hours</span>
                </div>
              </motion.div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
                <span className="text-white">Free Consultation With </span>
                <span className="text-gradient">Virtuo Edge Experts</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
                Book a 30-minute call with Virtuo Edge. We'll understand your business, discuss your goals, and outline a clear path forward—no pressure, no hidden agenda.
              </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              {/* Left: Benefits - Takes 2 columns */}
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  What You'll Get
                </h2>
                
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                        <benefit.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-white mb-1">
                          {benefit.title}
                        </h3>
                        <p className="text-white/50 text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-xl p-5">
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">230+</div>
                      <div className="text-xs text-white/50">Clients</div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">4.9</div>
                      <div className="text-xs text-white/50">Rating</div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">24h</div>
                      <div className="text-xs text-white/50">Response</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Form - Takes 3 columns */}
              <div className="lg:col-span-3">
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
