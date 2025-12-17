// Projects data file - manage all portfolio/work items here

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string; // URL to project image
  link?: string; // Optional external link
  videoUrl?: string; // Optional YouTube video URL for motion graphics/AI automation demos
  type: "image" | "video"; // Type of content
}

export const projectCategories = [
  "All",
  "Website Development",
  "AI Automation",
  "Branding",
  "Motion Graphics",
  "Video Editing",
  "3D Modeling",
];

export const projects: Project[] = [
  // Website Development Projects
  {
    id: "ecommerce-website-1",
    title: "Luxury E-Commerce Platform",
    category: "Website Development",
    description: "Full-stack e-commerce solution with real-time inventory management, payment integration, and stunning UI/UX design.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    link: "https://example-ecommerce.com",
    type: "image",
  },
  {
    id: "business-website-1",
    title: "Corporate Business Website",
    category: "Website Development",
    description: "Modern business website with SEO optimization, CMS integration, and responsive design for a consulting firm.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    link: "https://example-business.com",
    type: "image",
  },
  {
    id: "saas-platform-1",
    title: "SaaS Dashboard Platform",
    category: "Website Development",
    description: "Complex SaaS platform with real-time analytics, user management, and API integrations built with Next.js.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    link: "https://example-saas.com",
    type: "image",
  },
  
  // AI Automation Projects
  {
    id: "ai-crm-automation",
    title: "AI-Powered CRM Automation",
    category: "AI Automation",
    description: "End-to-end CRM automation with predictive lead scoring, intelligent email campaigns, and automated follow-ups for Fortune 500 company.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    link: "https://example-crm.com",
    videoUrl: "", // Add YouTube URL later for demo video
    type: "image",
  },
  {
    id: "document-ai",
    title: "Document Processing AI",
    category: "AI Automation",
    description: "Automated document classification and data extraction system processing 10,000+ documents daily with 99% accuracy.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    link: "https://example-document-ai.com",
    videoUrl: "", // Add YouTube URL later
    type: "image",
  },
  {
    id: "chatbot-integration",
    title: "Multi-Channel AI Chatbot",
    category: "AI Automation",
    description: "Intelligent chatbot integrated across website, WhatsApp, and social media handling 1000+ customer queries daily.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
    link: "https://example-chatbot.com",
    videoUrl: "", // Add YouTube URL later
    type: "image",
  },

  // Branding Projects
  {
    id: "brand-identity-tech",
    title: "Tech Startup Brand Identity",
    category: "Branding",
    description: "Complete brand identity design including logo, color palette, typography, brand guidelines, and all visual assets.",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80",
    link: "https://example-brand-tech.com",
    type: "image",
  },
  {
    id: "brand-identity-health",
    title: "Healthcare Brand Package",
    category: "Branding",
    description: "Professional healthcare brand with logo design, patient-friendly messaging, and comprehensive brand guidelines.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&q=80",
    link: "https://example-brand-health.com",
    type: "image",
  },

  // Motion Graphics Projects (will have video URLs)
  {
    id: "motion-explainer-1",
    title: "AI Product Explainer Video",
    category: "Motion Graphics",
    description: "High-impact animated explainer video showcasing AI features with 3D elements and kinetic typography.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    videoUrl: "", // Add YouTube URL for actual video
    type: "video",
  },
  {
    id: "motion-brand-animation",
    title: "Brand Launch Animation",
    category: "Motion Graphics",
    description: "Dynamic brand launch animation with logo reveals, motion graphics, and stunning visual effects.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    videoUrl: "", // Add YouTube URL
    type: "video",
  },
  {
    id: "motion-social-ads",
    title: "Social Media Ad Campaign",
    category: "Motion Graphics",
    description: "Series of eye-catching motion graphics for Instagram and Facebook ads that boosted engagement by 300%.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
    videoUrl: "", // Add YouTube URL
    type: "video",
  },

  // Video Editing Projects
  {
    id: "video-youtube-series",
    title: "YouTube Channel Series",
    category: "Video Editing",
    description: "Professional editing for 50+ YouTube videos including color grading, motion graphics, and audio enhancement.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    videoUrl: "", // Add YouTube URL
    type: "video",
  },
  {
    id: "video-reels-package",
    title: "Viral Reels Package",
    category: "Video Editing",
    description: "Monthly package of 20 high-engagement Instagram Reels with trending effects and optimized hooks.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
    videoUrl: "", // Add YouTube URL
    type: "video",
  },

  // 3D Modeling Projects
  {
    id: "3d-product-render",
    title: "Product Visualization",
    category: "3D Modeling",
    description: "Photorealistic 3D product renders for e-commerce and marketing with AR integration.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    link: "https://example-3d-product.com",
    type: "image",
  },
  {
    id: "3d-architecture",
    title: "Architectural Visualization",
    category: "3D Modeling",
    description: "Stunning 3D architectural renders and virtual walkthroughs for real estate development project.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    link: "https://example-3d-architecture.com",
    type: "image",
  },
];
