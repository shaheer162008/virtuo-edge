import { Metadata } from "next";

// Base configuration
const siteConfig = {
  name: "Nexiler",
  description: "Custom AI automation solutions and traditional development services. Transform your business with intelligent systems that scale exponentially.",
  url: "https://nexiler.tech",
  ogImage: "https://nexiler.tech/og-image.jpg",
  keywords: [
    "AI automation",
    "custom development",
    "AI solutions",
    "business automation",
    "web development",
    "mobile app development",
    "AI integration",
    "process automation",
    "digital transformation",
    "machine learning",
    "custom software",
    "enterprise AI",
    "automation services",
    "AI consulting",
    "tech solutions"
  ],
  creator: "Nexiler",
  authors: [{ name: "Nexiler Team", url: "https://nexiler.tech" }],
  twitter: {
    creator: "@nexiler",
    site: "@nexiler",
  },
};

// Generate metadata for pages
export function generateMetadata({
  title,
  description,
  image,
  path = "",
  keywords = [],
  noIndex = false,
}: {
  title: string;
  description?: string;
  image?: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
}): Metadata {
  const pageUrl = `${siteConfig.url}${path}`;
  const pageImage = image || siteConfig.ogImage;
  const pageDescription = description || siteConfig.description;
  const allKeywords = [...siteConfig.keywords, ...keywords];

  return {
    title: `${title} | ${siteConfig.name}`,
    description: pageDescription,
    keywords: allKeywords,
    authors: siteConfig.authors,
    creator: siteConfig.creator,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: pageUrl,
      title: `${title} | ${siteConfig.name}`,
      description: pageDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description: pageDescription,
      images: [pageImage],
      creator: siteConfig.twitter.creator,
      site: siteConfig.twitter.site,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    verification: {
      google: "your-google-verification-code", // Add your Google Search Console verification code
      yandex: "your-yandex-verification-code", // Add if needed
      yahoo: "your-yahoo-verification-code", // Add if needed
    },
  };
}

// Home page metadata
export const homeMetadata = generateMetadata({
  title: "AI Automation & Custom Development Solutions",
  description: "Transform your business with Nexiler's custom AI automation solutions and traditional development services. Trusted by 230+ companies. Get started today!",
  path: "",
  keywords: ["AI automation", "custom development", "business transformation", "intelligent systems"],
});

// About page metadata
export const aboutMetadata = generateMetadata({
  title: "About Us - Leading AI Automation Experts",
  description: "Learn about Nexiler's mission to transform businesses through cutting-edge AI automation and custom development solutions. Meet our expert team.",
  path: "/about",
  keywords: ["about nexiler", "AI experts", "automation specialists", "tech team"],
});

// Services page metadata
export const servicesMetadata = generateMetadata({
  title: "Our Services - AI Automation & Development",
  description: "Comprehensive AI automation, custom development, API integration, and consulting services. Scalable solutions tailored to your business needs.",
  path: "/services",
  keywords: ["AI services", "automation services", "custom development", "API integration", "consulting"],
});

// Portfolio page metadata
export const portfolioMetadata = generateMetadata({
  title: "Portfolio - Our Success Stories",
  description: "Explore Nexiler's portfolio of successful AI automation and development projects. See how we've helped businesses transform digitally.",
  path: "/portfolio",
  keywords: ["portfolio", "case studies", "success stories", "project showcase"],
});

// Pricing page metadata
export const pricingMetadata = generateMetadata({
  title: "Transparent Pricing Plans - Choose Your Growth Plan",
  description: "Affordable AI automation and development pricing plans. From startups to enterprises. Get started from $999. Free consultation included.",
  path: "/pricing",
  keywords: ["pricing", "plans", "cost", "affordable AI", "development pricing"],
});

// Blog page metadata
export const blogMetadata = generateMetadata({
  title: "Blog - AI Automation & Tech Insights",
  description: "Stay updated with the latest insights on AI automation, development trends, and digital transformation strategies from Nexiler experts.",
  path: "/blogs",
  keywords: ["blog", "AI insights", "tech articles", "automation tips", "development guides"],
});

// Contact page metadata
export const contactMetadata = generateMetadata({
  title: "Contact Us - Get Free Consultation",
  description: "Ready to transform your business? Contact Nexiler for a free consultation. Fast response within 24 hours. Let's discuss your project.",
  path: "/contact",
  keywords: ["contact", "free consultation", "get in touch", "project inquiry"],
});

// Generate dynamic blog post metadata
export function generateBlogMetadata(slug: string, title: string, excerpt: string, image?: string) {
  return generateMetadata({
    title,
    description: excerpt,
    path: `/blogs/${slug}`,
    image,
    keywords: ["blog post", title.toLowerCase()],
  });
}

// Structured data (JSON-LD) for organization
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  description: siteConfig.description,
  foundingDate: "2023",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: "hello@nexiler.tech",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://twitter.com/nexiler",
    "https://linkedin.com/company/nexiler",
    "https://github.com/nexiler",
  ],
};

// Structured data for services
export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Automation & Custom Development",
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI & Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Automation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "API Integration",
        },
      },
    ],
  },
};

export { siteConfig };
