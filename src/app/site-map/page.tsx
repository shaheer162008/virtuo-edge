import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { generateMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateMetadata({
  title: "Sitemap - All Pages",
  description: "Complete sitemap of Nexiler website. Find all pages, services, portfolio, blog posts, and resources in one place.",
  path: "/site-map",
  keywords: ["sitemap", "site navigation", "all pages"],
});

const sitemapSections = [
  {
    title: "Main Pages",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About Us" },
      { href: "/services", label: "Services" },
      { href: "/our-work", label: "Our Work" },
      { href: "/pricing", label: "Pricing" },
      { href: "/blogs", label: "Blog" },
      { href: "/consultation", label: "Free Consultation" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services#ai-automation", label: "AI Automation" },
      { href: "/services#custom-development", label: "Custom Development" },
      { href: "/services#process-optimization", label: "Process Optimization" },
      { href: "/services#data-solutions", label: "Data Solutions" },
      { href: "/services#api-integration", label: "API Integration" },
      { href: "/services#consulting", label: "Consulting & Support" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/blogs", label: "All Blog Posts" },
      { href: "/our-work", label: "Case Studies" },
      { href: "/pricing", label: "Pricing Plans" },
      { href: "/about#faq", label: "FAQ" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms-of-service", label: "Terms of Service" },
      { href: "/cookie-policy", label: "Cookie Policy" },
    ],
  },
];

export default function SitemapPage() {
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
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Site</span>
              <span className="text-gradient">map</span>
            </h1>
            <p className="text-lg text-white/70">
              Navigate through all pages and resources on Nexiler
            </p>
          </div>

          {/* Sitemap Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {sitemapSections.map((section, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <h2 className="text-xl font-bold text-white mb-4 pb-3 border-b border-white/10">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-white/70 hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <p className="text-white/60 text-sm mb-4">
              Looking for something specific? 
            </p>
            <Link
              href="/contact"
              className="inline-flex px-6 py-3 bg-white/10 text-white border-2 border-white/30 rounded-xl font-bold hover:bg-white/20 hover:border-white/50 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
