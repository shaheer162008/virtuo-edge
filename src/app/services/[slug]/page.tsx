import { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesContent } from "@/lib/siteContent";
import { ServiceDetailClient } from "@/components/ServiceDetailClient";

// SEO metadata for each service
const serviceMetadata: Record<string, { title: string; description: string; keywords: string[] }> = {
    "website-development": {
        title: "Nexiler Website Development Services - Custom Web Design",
        description: "Professional website development with modern technologies from Nexiler. Custom designs, SEO optimization, and responsive layouts that convert visitors into customers.",
        keywords: ["nexiler website development", "web design", "custom website", "responsive design", "e-commerce website", "Next.js development", "Nexiler web services"],
    },
    "ai-automation-setup": {
        title: "Nexiler AI Automation Setup - Workflow Automation Services",
        description: "Intelligent AI automation setup from Nexiler to streamline operations. Reduce costs by 70% with custom workflow automation and lead generation systems.",
        keywords: ["nexiler ai automation", "workflow automation", "business automation", "lead generation automation", "crm automation", "Nexiler automation services"],
    },
    "ai-chatbot-integration": {
        title: "Nexiler AI Chatbot Integration - 24/7 Customer Support Automation",
        description: "Smart AI chatbot integration from Nexiler for automated customer support and lead qualification. Multi channel deployment with natural language understanding.",
        keywords: ["nexiler ai chatbot", "chatbot integration", "automated customer support", "lead qualification", "conversational ai", "Nexiler chatbot services"],
    },
    "full-brand-creation": {
        title: "Nexiler Full Brand Creation - Complete Brand Identity Services",
        description: "Complete brand creation from Nexiler from logo to messaging. Professional brand identity, visual guidelines, and all assets to establish your unique presence.",
        keywords: ["nexiler brand creation", "brand identity", "logo design", "brand guidelines", "visual identity", "brand strategy", "Nexiler branding"],
    },
    "motion-graphics": {
        title: "Nexiler Motion Graphics Services - Professional Animation",
        description: "High quality motion graphics and animation from Nexiler for explainer videos, ads, and engaging visual content that captivates audiences.",
        keywords: ["nexiler motion graphics", "animation services", "explainer videos", "2d animation", "product animation", "Nexiler video services"],
    },
    "video-editing-short": {
        title: "Nexiler Short Video Editing - Reels, TikTok, Shorts Editing",
        description: "Professional editing for viral short form content from Nexiler. Transform raw footage into engaging Reels, TikToks, and Shorts that drive engagement.",
        keywords: ["nexiler video editing", "reels editing", "tiktok editing", "shorts editing", "social media video", "short form content", "Nexiler video editing"],
    },
    "video-editing-long": {
        title: "Nexiler Long Video Editing - YouTube and Podcast Editing Services",
        description: "Comprehensive editing for YouTube videos, podcasts, and webinars from Nexiler. Professional quality with fast turnaround for content creators.",
        keywords: ["nexiler youtube editing", "podcast editing", "long form video", "video production", "content creator editing", "Nexiler editing services"],
    },
    "ai-automation-maintenance": {
        title: "Nexiler AI Automation Maintenance - Ongoing Support and Optimization",
        description: "Monthly AI automation maintenance from Nexiler with 24/7 monitoring, optimization, and priority support to keep systems running at peak efficiency.",
        keywords: ["nexiler automation maintenance", "ai support", "system monitoring", "automation optimization", "technical support", "Nexiler maintenance services"],
    },
    "seo-optimization": {
        title: "Nexiler SEO Optimization Services - Rank Higher on Google",
        description: "Comprehensive SEO services from Nexiler to dominate search rankings. Technical SEO, content optimization, and link building for long term organic growth.",
        keywords: ["nexiler seo services", "search engine optimization", "seo strategy", "google ranking", "organic traffic", "Nexiler seo"],
    },
    "social-media-ads": {
        title: "Nexiler Social Media Ads Management - Facebook, Instagram Ads",
        description: "Expert social media advertising management from Nexiler. Full service campaign strategy, creative, and optimization to maximize ROI on all platforms.",
        keywords: ["nexiler social media ads", "facebook ads", "instagram ads", "paid social", "social media marketing", "ad management", "Nexiler ads"],
    },
    "graphic-design": {
        title: "Nexiler Graphic Design Services - Professional Design for Marketing",
        description: "Professional graphic design from Nexiler for social media, ads, and marketing materials. Consistent branding with fast turnaround and unlimited revisions.",
        keywords: ["nexiler graphic design", "social media design", "marketing design", "ad design", "brand design", "visual design", "Nexiler design"],
    },
    "website-maintenance": {
        title: "Nexiler Website Maintenance Services - Security and Support",
        description: "Monthly website maintenance from Nexiler to keep your site secure, fast, and updated. Regular backups, security monitoring, and technical support.",
        keywords: ["nexiler website maintenance", "website support", "security updates", "website backup", "site maintenance", "Nexiler support"],
    },
    "3d-modeling": {
        title: "Nexiler 3D Modeling and Visualization - Photorealistic 3D Renders",
        description: "Professional 3D modeling and visualization services from Nexiler. Photorealistic product renders, architectural visualization, and AR/VR content creation.",
        keywords: ["nexiler 3d modeling", "3d visualization", "product rendering", "architectural visualization", "3d animation", "Nexiler 3d"],
    },
    "api-integration": {
        title: "Nexiler API Integration and Development - Connect Your Apps",
        description: "Connect your apps and automate data flow with custom API solutions from Nexiler. REST and GraphQL APIs, payment gateways, CRM integrations and more.",
        keywords: ["nexiler api integration", "api development", "rest api", "graphql", "payment gateway integration", "crm integration", "Nexiler api"],
    },
    "custom-software": {
        title: "Nexiler Custom Software Solutions - Bespoke Web Applications",
        description: "Bespoke web apps, dashboards, and tools built exactly for your business needs from Nexiler. From internal tools to enterprise solutions.",
        keywords: ["nexiler custom software", "web application", "business software", "admin dashboard", "enterprise solutions", "Nexiler software"],
    },
};

type PageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const service = servicesContent.services.find(s => s.slug === slug);
    
    if (!service) {
        return {
            title: "Service Not Found | Nexiler",
            description: "The requested service could not be found.",
        };
    }

    const meta = serviceMetadata[slug] || {
        title: service.title,
        description: service.longDescription,
        keywords: [service.title.toLowerCase(), "nexiler"],
    };

    return {
        title: `${meta.title} | Nexiler`,
        description: meta.description,
        keywords: meta.keywords,
        openGraph: {
            title: `${meta.title} | Nexiler`,
            description: meta.description,
            url: `https://nexiler.tech/services/${slug}`,
            siteName: "Nexiler",
            type: "website",
            images: [
                {
                    url: "https://nexiler.tech/og-services.jpg",
                    width: 1200,
                    height: 630,
                    alt: meta.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `${meta.title} | Nexiler`,
            description: meta.description,
            images: ["https://nexiler.tech/og-services.jpg"],
        },
        alternates: {
            canonical: `https://nexiler.tech/services/${slug}`,
        },
    };
}

// Generate static params for all services
export async function generateStaticParams() {
    return servicesContent.services.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const service = servicesContent.services.find(s => s.slug === slug);

    if (!service) {
        notFound();
    }

    return <ServiceDetailClient service={service} />;
}
