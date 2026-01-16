import { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesContent } from "@/lib/siteContent";
import { ServiceDetailClient } from "@/components/ServiceDetailClient";

// SEO metadata for each service
const serviceMetadata: Record<string, { title: string; description: string; keywords: string[] }> = {
    "website-development": {
        title: "Virtuo Edge Website Development Services - Custom Web Design",
        description: "Professional website development with modern technologies from Virtuo Edge. Custom designs, SEO optimization, and responsive layouts that convert visitors into customers.",
        keywords: ["virtuo edge website development", "web design", "custom website", "responsive design", "e-commerce website", "Next.js development", "Virtuo Edge web services"],
    },
    "ai-automation-setup": {
        title: "Virtuo Edge AI Automation Setup - Workflow Automation Services",
        description: "Intelligent AI automation setup from Virtuo Edge to streamline operations. Reduce costs by 70% with custom workflow automation and lead generation systems.",
        keywords: ["virtuo edge ai automation", "workflow automation", "business automation", "lead generation automation", "crm automation", "Virtuo Edge automation services"],
    },
    "ai-chatbot-integration": {
        title: "Virtuo Edge AI Chatbot Integration - 24/7 Customer Support Automation",
        description: "Smart AI chatbot integration from Virtuo Edge for automated customer support and lead qualification. Multi channel deployment with natural language understanding.",
        keywords: ["virtuo edge ai chatbot", "chatbot integration", "automated customer support", "lead qualification", "conversational ai", "Virtuo Edge chatbot services"],
    },
    "full-brand-creation": {
        title: "Virtuo Edge Full Brand Creation - Complete Brand Identity Services",
        description: "Complete brand creation from Virtuo Edge from logo to messaging. Professional brand identity, visual guidelines, and all assets to establish your unique presence.",
        keywords: ["virtuo edge brand creation", "brand identity", "logo design", "brand guidelines", "visual identity", "brand strategy", "Virtuo Edge branding"],
    },
    "motion-graphics": {
        title: "Virtuo Edge Motion Graphics Services - Professional Animation",
        description: "High quality motion graphics and animation from Virtuo Edge for explainer videos, ads, and engaging visual content that captivates audiences.",
        keywords: ["virtuo edge motion graphics", "animation services", "explainer videos", "2d animation", "product animation", "Virtuo Edge video services"],
    },
    "video-editing-short": {
        title: "Virtuo Edge Short Video Editing - Reels, TikTok, Shorts Editing",
        description: "Professional editing for viral short form content from Virtuo Edge. Transform raw footage into engaging Reels, TikToks, and Shorts that drive engagement.",
        keywords: ["virtuo edge video editing", "reels editing", "tiktok editing", "shorts editing", "social media video", "short form content", "Virtuo Edge video editing"],
    },
    "video-editing-long": {
        title: "Virtuo Edge Long Video Editing - YouTube and Podcast Editing Services",
        description: "Comprehensive editing for YouTube videos, podcasts, and webinars from Virtuo Edge. Professional quality with fast turnaround for content creators.",
        keywords: ["virtuo edge youtube editing", "podcast editing", "long form video", "video production", "content creator editing", "Virtuo Edge editing services"],
    },
    "ai-automation-maintenance": {
        title: "Virtuo Edge AI Automation Maintenance - Ongoing Support and Optimization",
        description: "Monthly AI automation maintenance from Virtuo Edge with 24/7 monitoring, optimization, and priority support to keep systems running at peak efficiency.",
        keywords: ["virtuo edge automation maintenance", "ai support", "system monitoring", "automation optimization", "technical support", "Virtuo Edge maintenance services"],
    },
    "seo-optimization": {
        title: "Virtuo Edge SEO Optimization Services - Rank Higher on Google",
        description: "Comprehensive SEO services from Virtuo Edge to dominate search rankings. Technical SEO, content optimization, and link building for long term organic growth.",
        keywords: ["virtuo edge seo services", "search engine optimization", "seo strategy", "google ranking", "organic traffic", "Virtuo Edge seo"],
    },
    "social-media-ads": {
        title: "Virtuo Edge Social Media Ads Management - Facebook, Instagram Ads",
        description: "Expert social media advertising management from Virtuo Edge. Full service campaign strategy, creative, and optimization to maximize ROI on all platforms.",
        keywords: ["virtuo edge social media ads", "facebook ads", "instagram ads", "paid social", "social media marketing", "ad management", "Virtuo Edge ads"],
    },
    "graphic-design": {
        title: "Virtuo Edge Graphic Design Services - Professional Design for Marketing",
        description: "Professional graphic design from Virtuo Edge for social media, ads, and marketing materials. Consistent branding with fast turnaround and unlimited revisions.",
        keywords: ["virtuo edge graphic design", "social media design", "marketing design", "ad design", "brand design", "visual design", "Virtuo Edge design"],
    },
    "website-maintenance": {
        title: "Virtuo Edge Website Maintenance Services - Security and Support",
        description: "Monthly website maintenance from Virtuo Edge to keep your site secure, fast, and updated. Regular backups, security monitoring, and technical support.",
        keywords: ["virtuo edge website maintenance", "website support", "security updates", "website backup", "site maintenance", "Virtuo Edge support"],
    },
    "3d-modeling": {
        title: "Virtuo Edge 3D Modeling and Visualization - Photorealistic 3D Renders",
        description: "Professional 3D modeling and visualization services from Virtuo Edge. Photorealistic product renders, architectural visualization, and AR/VR content creation.",
        keywords: ["virtuo edge 3d modeling", "3d visualization", "product rendering", "architectural visualization", "3d animation", "Virtuo Edge 3d"],
    },
    "api-integration": {
        title: "Virtuo Edge API Integration and Development - Connect Your Apps",
        description: "Connect your apps and automate data flow with custom API solutions from Virtuo Edge. REST and GraphQL APIs, payment gateways, CRM integrations and more.",
        keywords: ["virtuo edge api integration", "api development", "rest api", "graphql", "payment gateway integration", "crm integration", "Virtuo Edge api"],
    },
    "mobile-app-development": {
        title: "Virtuo Edge Mobile App Development - iOS Android Native Apps",
        description: "Professional mobile app development from Virtuo Edge for iOS and Android. Native performance, cross-platform reach, and apps that drive engagement and revenue.",
        keywords: ["virtuo edge mobile app development", "ios app development", "android app development", "react native", "flutter", "mobile development", "Virtuo Edge apps"],
    },
    "custom-software": {
        title: "Virtuo Edge Custom Software Solutions - Bespoke Web Applications",
        description: "Bespoke web apps, dashboards, and tools built exactly for your business needs from Virtuo Edge. From internal tools to enterprise solutions.",
        keywords: ["virtuo edge custom software", "web application", "business software", "admin dashboard", "enterprise solutions", "Virtuo Edge software"],
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
            title: "Service Not Found | Virtuo Edge",
            description: "The requested service could not be found.",
        };
    }

    const meta = serviceMetadata[slug] || {
        title: service.title,
        description: service.longDescription,
        keywords: [service.title.toLowerCase(), "virtuo edge"],
    };

    return {
        title: `${meta.title} | Virtuo Edge`,
        description: meta.description,
        keywords: meta.keywords,
        openGraph: {
            title: `${meta.title} | Virtuo Edge`,
            description: meta.description,
            url: `https://virtuoedge.tech/services/${slug}`,
            siteName: "Virtuo Edge",
            type: "website",
            images: [
                {
                    url: "https://virtuoedge.tech/og-services.jpg",
                    width: 1200,
                    height: 630,
                    alt: meta.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `${meta.title} | Virtuo Edge`,
            description: meta.description,
            images: ["https://virtuoedge.tech/og-services.jpg"],
        },
        alternates: {
            canonical: `https://virtuoedge.tech/services/${slug}`,
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
