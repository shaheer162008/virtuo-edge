// Site-wide configuration and content management
export const siteConfig = {
    name: "Nexiler",
    description: "AI-driven automation and custom development solutions for modern businesses",
    url: "https://nexiler.com",
    ogImage: "https://nexiler.com/og-image.jpg",
    links: {
        twitter: "https://twitter.com/nexiler",
        github: "https://github.com/nexiler",
        linkedin: "https://linkedin.com/company/nexiler",
    },
};

// Page metadata - Centralized metadata management
export const pageMetadata = {
    home: {
        title: "Nexiler - AI Automation & Custom Development Solutions",
        description: "Transform your business with cutting-edge AI automation and custom development services. Expert team delivering innovative solutions that scale.",
        keywords: "AI automation, custom development, software development, machine learning, business automation",
        openGraph: {
            title: "Nexiler - AI Automation & Custom Development Solutions",
            description: "Transform your business with cutting-edge AI automation and custom development services.",
            images: [{ url: "https://nexiler.com/og-image.jpg", width: 1200, height: 630, alt: "Nexiler" }],
        },
        twitter: {
            card: "summary_large_image" as const,
            title: "Nexiler - AI Automation & Custom Development Solutions",
            description: "Transform your business with cutting-edge AI automation and custom development services.",
            images: ["https://nexiler.com/og-image.jpg"],
        },
    },
    about: {
        title: "About Us - Nexiler | Expert AI & Development Team",
        description: "Meet the team behind Nexiler. We're AI experts, developers, and strategists dedicated to transforming businesses through innovation.",
        keywords: "about nexiler, ai experts, development team, company profile",
        openGraph: {
            title: "About Us - Nexiler",
            description: "Meet the team behind Nexiler. AI experts and developers transforming businesses.",
            images: [{ url: "https://nexiler.com/og-about.jpg", width: 1200, height: 630, alt: "About Nexiler" }],
        },
        twitter: {
            card: "summary_large_image" as const,
            title: "About Us - Nexiler",
            description: "Meet the team behind Nexiler. AI experts and developers transforming businesses.",
            images: ["https://nexiler.com/og-about.jpg"],
        },
    },
    services: {
        title: "Our Services - AI Automation & Software Development | Nexiler",
        description: "Comprehensive AI automation, custom software development, data solutions, and system integration services to accelerate your business growth.",
        keywords: "ai automation services, custom software, web development, mobile apps, data solutions, api integration",
        openGraph: {
            title: "Our Services - Nexiler",
            description: "Comprehensive AI automation, custom software development, and data solutions.",
            images: [{ url: "https://nexiler.com/og-services.jpg", width: 1200, height: 630, alt: "Nexiler Services" }],
        },
        twitter: {
            card: "summary_large_image" as const,
            title: "Our Services - Nexiler",
            description: "Comprehensive AI automation, custom software development, and data solutions.",
            images: ["https://nexiler.com/og-services.jpg"],
        },
    },
    portfolio: {
        title: "Our Work - Success Stories & Projects | Nexiler",
        description: "Explore our portfolio of successful AI automation projects, web applications, mobile apps, and data solutions that delivered real results.",
        keywords: "our work, case studies, projects, ai projects, web development projects",
        openGraph: {
            title: "Our Work - Nexiler",
            description: "Explore our portfolio of successful AI automation and development projects.",
            images: [{ url: "https://nexiler.com/og-portfolio.jpg", width: 1200, height: 630, alt: "Nexiler Our Work" }],
        },
        twitter: {
            card: "summary_large_image" as const,
            title: "Our Work - Nexiler",
            description: "Explore our portfolio of successful AI automation and development projects.",
            images: ["https://nexiler.com/og-portfolio.jpg"],
        },
    },
    blog: {
        title: "Blog - AI Insights & Development Tips | Nexiler",
        description: "Latest insights on AI automation, development best practices, industry trends, and technical guides from our expert team.",
        keywords: "ai blog, development blog, tech insights, automation tips",
        openGraph: {
            title: "Blog - Nexiler",
            description: "Latest insights on AI automation, development best practices, and industry trends.",
            images: [{ url: "https://nexiler.com/og-blog.jpg", width: 1200, height: 630, alt: "Nexiler Blog" }],
        },
        twitter: {
            card: "summary_large_image" as const,
            title: "Blog - Nexiler",
            description: "Latest insights on AI automation, development best practices, and industry trends.",
            images: ["https://nexiler.com/og-blog.jpg"],
        },
    },
    contact: {
        title: "Contact Us - Let's Build Together | Nexiler",
        description: "Ready to transform your business? Get in touch with our team to discuss your AI automation and development needs.",
        keywords: "contact nexiler, get in touch, project inquiry, consultation",
        openGraph: {
            title: "Contact Us - Nexiler",
            description: "Ready to transform your business? Get in touch with our team.",
            images: [{ url: "https://nexiler.com/og-contact.jpg", width: 1200, height: 630, alt: "Contact Nexiler" }],
        },
        twitter: {
            card: "summary_large_image" as const,
            title: "Contact Us - Nexiler",
            description: "Ready to transform your business? Get in touch with our team.",
            images: ["https://nexiler.com/og-contact.jpg"],
        },
    },
    // Service-specific metadata
    websiteDevelopment: {
        title: "Website Development Services - Custom Web Design | Nexiler",
        description: "Professional website development with modern technologies. Custom designs, SEO optimization, and responsive layouts that convert visitors into customers.",
        keywords: "website development, web design, custom website, responsive design, e-commerce website",
    },
    aiAutomationSetup: {
        title: "AI Automation Setup - Workflow Automation Services | Nexiler",
        description: "Intelligent AI automation setup to streamline operations. Reduce costs by 70% with custom workflow automation and lead generation systems.",
        keywords: "ai automation, workflow automation, business automation, lead generation automation, crm automation",
    },
    aiChatbotIntegration: {
        title: "AI Chatbot Integration - 24/7 Customer Support Automation | Nexiler",
        description: "Smart AI chatbot integration for automated customer support and lead qualification. Multi-channel deployment with natural language understanding.",
        keywords: "ai chatbot, chatbot integration, automated customer support, lead qualification, conversational ai",
    },
    fullBrandCreation: {
        title: "Full Brand Creation - Complete Brand Identity Services | Nexiler",
        description: "Complete brand creation from logo to messaging. Professional brand identity, visual guidelines, and all assets to establish your unique presence.",
        keywords: "brand creation, brand identity, logo design, brand guidelines, visual identity, brand strategy",
    },
    motionGraphics: {
        title: "Motion Graphics Services - Professional Animation | Nexiler",
        description: "High-quality motion graphics and animation for explainer videos, ads, and engaging visual content that captivates audiences.",
        keywords: "motion graphics, animation services, explainer videos, 2d animation, product animation",
    },
    videoEditingShort: {
        title: "Short Video Editing - Reels, TikTok, Shorts Editing | Nexiler",
        description: "Professional editing for viral short-form content. Transform raw footage into engaging Reels, TikToks, and Shorts that drive engagement.",
        keywords: "video editing, reels editing, tiktok editing, shorts editing, social media video, short form content",
    },
    videoEditingLong: {
        title: "Long Video Editing - YouTube & Podcast Editing Services | Nexiler",
        description: "Comprehensive editing for YouTube videos, podcasts, and webinars. Professional quality with fast turnaround for content creators.",
        keywords: "youtube editing, podcast editing, long form video, video production, content creator editing",
    },
    aiAutomationMaintenance: {
        title: "AI Automation Maintenance - Ongoing Support & Optimization | Nexiler",
        description: "Monthly AI automation maintenance with 24/7 monitoring, optimization, and priority support to keep systems running at peak efficiency.",
        keywords: "automation maintenance, ai support, system monitoring, automation optimization, technical support",
    },
    seoOptimization: {
        title: "SEO Optimization Services - Rank Higher on Google | Nexiler",
        description: "Comprehensive SEO services to dominate search rankings. Technical SEO, content optimization, and link building for long-term organic growth.",
        keywords: "seo services, search engine optimization, seo strategy, google ranking, organic traffic, local seo",
    },
    socialMediaAds: {
        title: "Social Media Ads Management - Facebook, Instagram Ads | Nexiler",
        description: "Expert social media advertising management. Full-service campaign strategy, creative, and optimization to maximize ROI on all platforms.",
        keywords: "social media ads, facebook ads, instagram ads, paid social, social media marketing, ad management",
    },
    graphicDesign: {
        title: "Graphic Design Services - Professional Design for Marketing | Nexiler",
        description: "Professional graphic design for social media, ads, and marketing materials. Consistent branding with fast turnaround and unlimited revisions.",
        keywords: "graphic design, social media design, marketing design, ad design, brand design, visual design",
    },
    websiteMaintenance: {
        title: "Website Maintenance Services - Security & Support | Nexiler",
        description: "Monthly website maintenance to keep your site secure, fast, and updated. Regular backups, security monitoring, and technical support.",
        keywords: "website maintenance, website support, security updates, website backup, site maintenance, wordpress maintenance",
    },
    modeling3d: {
        title: "3D Modeling & Visualization - Photorealistic 3D Renders | Nexiler",
        description: "Professional 3D modeling and visualization services. Photorealistic product renders, architectural visualization, and AR/VR content creation.",
        keywords: "3d modeling, 3d visualization, product rendering, architectural visualization, 3d animation, ar vr content",
    },
};

// Home page content
export const homeContent = {
    hero: {
        badge: "Next-Gen AI Automation",
        title: "Transform Your Business with AI",
        subtitle: "Custom AI automation solutions and traditional development services tailored to your unique needs. We build intelligent systems that scale your business exponentially.",
        cta: {
            primary: "Get Started",
            secondary: "View Our Work",
        },
        stats: [
            { value: "3900+", label: "Active Users" },
            { value: "230+", label: "Trusted Companies" },
            { value: "$230M+", label: "Transaction Volume" },
            { value: "24/7", label: "Support" },
        ],
    },
};

// Services content
export const servicesContent = {
    hero: {
        title: "Our Services",
        subtitle: "End-to-end digital solutions by Nexiler: from AI automation and custom web development to branding, video production, and everything in between. Transform your business with our expert team.",
    },
    services: [
        {
            title: "Website Development",
            slug: "website-development",
            description: "High-performance websites built with Next.js, React, and modern technologies that convert visitors into customers.",
            longDescription: "Nexiler creates stunning, fast-loading websites that rank higher on Google and convert visitors into loyal customers. From sleek business sites to powerful e-commerce platforms, we build responsive, SEO-optimized websites using cutting-edge technologies like Next.js and React.",
            pricing: "Book consultation to get a quote",
            pricingRange: "$1000 - $3500+",
            pricingDetails: "Basic: $1000 (Simple 4-5 page site). Custom: $1800 - $3500+ (Complex UI/UX, E-commerce, Portals).",
            features: [
                "Responsive Design (Mobile, Tablet, Desktop)",
                "SEO-Optimized Architecture",
                "Fast Loading Speed & Performance",
                "Custom UI/UX Design",
                "Content Management System",
                "E-commerce Integration",
                "Third-party API Integration",
                "Security & SSL Certificates",
            ],
            benefits: [
                "Professional online presence that builds trust",
                "Mobile-first design reaching customers everywhere",
                "SEO optimization for better search rankings",
                "Easy content updates without technical knowledge",
            ],
        },
        {
            title: "AI Automation Setup",
            slug: "ai-automation-setup",
            description: "Intelligent workflow automation that saves 70% of your team's time on repetitive tasks.",
            longDescription: "Stop wasting hours on manual work. Nexiler's AI automation solutions transform repetitive tasks into intelligent workflows that run 24/7. We help businesses reduce costs, eliminate errors, and scale operations without hiring more staff.",
            pricing: "Book consultation to get a quote",
            pricingRange: "$1000 - $2500",
            pricingDetails: "Basic: $1000 (Simple 1-2 workflow setup). Advanced: $1500 - $2500 (Complex lead funnels, reporting automation).",
            features: [
                "Custom Workflow Design & Implementation",
                "Lead Generation & Nurturing Automation",
                "Automated Reporting & Analytics",
                "Email & Communication Automation",
                "CRM Integration & Synchronization",
                "Data Entry & Processing Automation",
                "Document Processing & OCR",
                "Scheduled Task Automation",
            ],
            benefits: [
                "Reduce operational costs by up to 70%",
                "Eliminate human errors in repetitive tasks",
                "24/7 automated processing without downtime",
                "Scalable solutions that grow with your business",
            ],
        },
        {
            title: "AI Chatbot Integration",
            slug: "ai-chatbot-integration",
            description: "Smart AI chatbots that handle customer support and qualify leads 24/7: never miss an inquiry.",
            longDescription: "Let AI handle your customer conversations. Nexiler deploys intelligent chatbots that understand context, qualify leads automatically, and provide instant support across WhatsApp, your website, and social media: all while your team focuses on closing deals.",
            pricing: "Book consultation to get a quote",
            pricingRange: "$1000 - $1800",
            pricingDetails: "Basic: $1000 (Simple FAQ integration). Advanced: $1200 - $1800 (Trained, multi-flow lead qualification).",
            features: [
                "Natural Language Understanding (NLU)",
                "Multi-Channel Integration (Web, WhatsApp, Messenger)",
                "Lead Qualification & Capture",
                "24/7 Automated Customer Support",
                "Custom Training on Your Business Data",
                "CRM & Database Integration",
                "Multi-language Support",
                "Analytics & Performance Tracking",
            ],
            benefits: [
                "Instant responses improve customer satisfaction",
                "Qualify and capture leads automatically",
                "Reduce support team workload by 60%",
                "Never miss a potential customer inquiry",
            ],
        },
        {
            title: "Full Brand Creation",
            slug: "full-brand-creation",
            description: "Complete brand identity: logo, colors, voice, and guidelines: that makes your business unforgettable.",
            longDescription: "Build a brand that stands out and sticks. Nexiler creates complete brand identities from scratch: logo design, visual guidelines, brand voice, and messaging strategy. Everything you need to make a powerful first impression and build lasting recognition.",
            pricing: "Book consultation to get a quote",
            pricingRange: "$2500 - $4500",
            pricingDetails: "Logo Design, Brand Identity Guidelines, Tone of Voice, Visual Assets, and Primary Messaging Strategy.",
            features: [
                "Custom Logo Design & Variations",
                "Complete Brand Identity System",
                "Color Palette & Typography Guidelines",
                "Brand Guidelines Document",
                "Brand Voice & Tone Definition",
                "Primary & Secondary Messaging",
                "Social Media Visual Assets",
                "Business Card & Stationery Design",
            ],
            benefits: [
                "Stand out from competitors with unique identity",
                "Consistent brand presence across all channels",
                "Professional image that builds credibility",
                "Ready-to-use assets for immediate deployment",
            ],
        },
        {
            title: "Motion Graphics",
            slug: "motion-graphics",
            description: "Eye-catching animations for ads, explainer videos, and social media that boost engagement.",
            longDescription: "Capture attention with stunning motion graphics by Nexiler. From explainer videos to social media animations and product demos, we create visual content that stops the scroll and communicates your message in seconds.",
            pricing: "Book consultation to get a quote",
            pricingRange: "$400 - $1200 per asset",
            pricingDetails: "High-quality animation for explanatory videos, ads, or website elements.",
            features: [
                "2D & 3D Motion Graphics",
                "Explainer Video Production",
                "Logo Animation & Branding",
                "Product Demonstration Videos",
                "Social Media Animations",
                "Website Micro-Interactions",
                "Kinetic Typography",
                "Custom Animation Styles",
            ],
            benefits: [
                "Engage viewers with dynamic visual content",
                "Explain complex concepts simply and memorably",
                "Professional video content for all platforms",
                "Multiple format exports for any use case",
            ],
        },
        {
            title: "Video Editing (Short Content/Reels)",
            slug: "video-editing-short",
            description: "Scroll-stopping Reels, TikToks, and Shorts edited for maximum engagement and virality.",
            longDescription: "Dominate short-form content with Nexiler's professional video editing. We transform raw footage into viral-ready Reels, TikToks, and Shorts with trending effects, perfect timing, and hooks that stop the scroll.",
            pricing: "Book consultation to get a quote",
            pricingRange: "$800 - $1500/month",
            pricingDetails: "Editing 10-20 high-quality Reels/Shorts per month (up to 60 seconds each).",
            features: [
                "Professional Cutting & Transitions",
                "Color Grading & Correction",
                "Sound Design & Music Sync",
                "Captions & Text Overlays",
                "Motion Graphics Integration",
                "Platform-Specific Formatting",
                "Trending Effects & Filters",
                "Viral Hook Optimization",
            ],
            benefits: [
                "Consistent high-quality content output",
                "Platform-optimized for maximum reach",
                "Fast turnaround for timely posting",
                "Engagement-focused editing techniques",
            ],
        },
        {
            title: "Video Editing (Long Content)",
            slug: "video-editing-long",
            description: "YouTube-ready editing for podcasts, tutorials, and long-form content that keeps viewers watching.",
            longDescription: "Create binge-worthy long-form content with Nexiler's expert video editing. From YouTube videos to podcasts and courses, we handle everything: cutting, color grading, graphics, and audio: so you can focus on creating.",
            pricing: "Book consultation to get a quote",
            pricingRange: "$1200 - $2500/month",
            pricingDetails: "Editing 4-8 long-form videos (5-15 minutes) per month (e.g., YouTube/Podcast).",
            features: [
                "Multi-Camera Editing",
                "Advanced Color Grading",
                "Professional Audio Enhancement",
                "B-Roll Integration & Sourcing",
                "Graphics, Lower Thirds & Titles",
                "Intro/Outro Creation",
                "Chapter Markers & Timestamps",
                "YouTube SEO Optimization",
            ],
            benefits: [
                "Professional production quality on every video",
                "Consistent branding across all content",
                "Viewer retention optimization techniques",
                "Complete creative & technical support",
            ],
        },
        {
            title: "Monthly AI Automation Maintenance",
            slug: "ai-automation-maintenance",
            description: "Keep your AI systems running at peak performance with 24/7 monitoring and optimization.",
            longDescription: "Your automation deserves expert care. Nexiler provides ongoing monitoring, optimization, and support to ensure your AI systems deliver maximum ROI with zero downtime. Priority support included.",
            pricing: "Book consultation to get a quote",
            pricingRange: "$400 - $700/month",
            pricingDetails: "Monitoring, advanced troubleshooting, and optimization of AI systems.",
            features: [
                "24/7 System Monitoring & Alerts",
                "Performance Optimization & Tuning",
                "Bug Fixes & Issue Resolution",
                "Automation Workflow Enhancements",
                "Monthly Performance Reports",
                "Priority Technical Support",
                "Security Updates & Patches",
                "Scalability Planning & Implementation",
            ],
            benefits: [
                "Zero downtime with proactive monitoring",
                "Continuous performance improvements",
                "Peace of mind with expert support",
                "Regular updates keep systems current",
            ],
        },
        {
            title: "SEO Optimization & Strategy",
            slug: "seo-optimization",
            description: "Rank higher on Google and drive organic traffic that converts into paying customers.",
            longDescription: "Get found by the customers who are already searching for you. Nexiler's data-driven SEO strategies boost your rankings, increase organic traffic by 200-300%, and turn search visibility into consistent revenue.",
            pricing: "Book consultation to get a quote",
            pricingRange: "$700 - $1500/month",
            pricingDetails: "Comprehensive SEO: Technical, On-page, Off-page, and Content Strategy.",
            features: [
                "Technical SEO Audit & Implementation",
                "Keyword Research & Strategy",
                "On-Page SEO Optimization",
                "Content Strategy & Optimization",
                "Link Building & Outreach",
                "Local SEO & Google Business",
                "Competitor Analysis",
                "Monthly Analytics & Reporting",
            ],
            benefits: [
                "Increase organic traffic by 200-300%",
                "Rank on first page for target keywords",
                "Generate more qualified leads naturally",
                "Long-term ROI that compounds over time",
            ],
        },
        {
            title: "Social Media Ads Management",
            slug: "social-media-ads",
            description: "Paid ad campaigns on Facebook, Instagram, and TikTok that deliver real ROI.",
            longDescription: "Stop wasting ad budget on guesswork. Nexiler manages your entire paid social strategy: creative, targeting, optimization, and scaling: across Facebook, Instagram, LinkedIn, and TikTok for maximum ROAS.",
            pricing: "Book consultation to get a quote",
            pricingRange: "$800 - $1500/month",
            pricingDetails: "Full management of paid social campaigns (excluding ad spend).",
            features: [
                "Campaign Strategy & Planning",
                "Ad Creative Design & Testing",
                "Audience Targeting & Segmentation",
                "A/B Testing & Optimization",
                "Conversion Tracking & Analytics",
                "Retargeting Campaigns",
                "Budget Management & Scaling",
                "Monthly Performance Reports",
            ],
            benefits: [
                "Lower cost per acquisition consistently",
                "Better targeting reaches ideal customers",
                "Professional creatives that convert",
                "Data-driven decisions maximize ROI",
            ],
        },
        {
            title: "Graphic Design",
            slug: "graphic-design",
            description: "Stunning visuals for social media, ads, and marketing that capture attention and convert.",
            longDescription: "Look professional everywhere you show up. Nexiler creates scroll-stopping graphics for social media, ads, websites, and print: all on-brand, high-quality, and designed to drive action.",
            pricing: "Book consultation to get a quote",
            pricingRange: "$600 - $1000/month",
            pricingDetails: "Dedicated design work for social media, ads, and website visuals.",
            features: [
                "Social Media Post Designs",
                "Ad Banner & Display Ads",
                "Infographic Design",
                "Presentation Design",
                "Email Template Design",
                "Print Design (Brochures, Flyers)",
                "Brand Asset Creation",
                "Icon & Illustration Design",
            ],
            benefits: [
                "Consistent visual branding across channels",
                "Professional quality that builds trust",
                "Fast turnaround for urgent needs",
                "Unlimited revisions until perfect",
            ],
        },
        {
            title: "Monthly Website Maintenance",
            slug: "website-maintenance",
            description: "Keep your website secure, fast, and always online with expert monthly care.",
            longDescription: "Your website is your 24/7 salesperson: keep it in top shape. Nexiler handles updates, security, backups, and performance optimization so your site stays fast, secure, and always available.",
            pricing: "Book consultation to get a quote",
            pricingRange: "$350 - $600/month",
            pricingDetails: "Regular updates, backups, and security checks (not including hosting cost).",
            features: [
                "Regular Content Updates & Edits",
                "Security Monitoring & Protection",
                "Performance Optimization",
                "Automated Backup Management",
                "Plugin/Software Updates",
                "Bug Fixes & Technical Support",
                "Uptime Monitoring",
                "Monthly Health Reports",
            ],
            benefits: [
                "Always secure against latest threats",
                "Optimal loading speed and performance",
                "Quick resolution of any issues",
                "Peace of mind with expert support",
            ],
        },
        {
            title: "3D Modeling & Visualization",
            slug: "3d-modeling",
            description: "Photorealistic 3D renders for products, architecture, and marketing that wow clients.",
            longDescription: "See it before you build it. Nexiler creates stunning 3D models and photorealistic renders for products, architecture, and marketing: perfect for presentations, e-commerce, and immersive AR/VR experiences.",
            pricing: "$300 - $1500",
            pricingRange: "$300 - $1500",
            pricingDetails: "Simple product models: $300-$500, Complex product renders: $500-$800, Architectural visualization: $800-$1200, Character/Asset design: $600-$1000, AR/VR content: $1000-$1500. Final price depends on complexity and revisions needed.",
            features: [
                "Product 3D Modeling & Rendering",
                "Architectural Visualization",
                "Character & Asset Design",
                "Photorealistic Rendering",
                "3D Animation & Motion",
                "AR/VR 3D Content Creation",
                "Interactive 3D Web Experiences",
                "Multiple Format Exports",
            ],
            benefits: [
                "Photorealistic quality impresses clients",
                "Visualize products before manufacturing",
                "Stand out with immersive 3D content",
                "Reduce photography costs significantly",
            ],
        },
        {
            title: "API Integration & Development",
            slug: "api-integration",
            description: "Connect your apps and automate data flow with custom API solutions that scale.",
            longDescription: "Make your systems talk to each other. Nexiler builds custom APIs and integrations that connect your CRM, payment gateways, and third-party services: automating data flow and eliminating manual work.",
            pricing: "$800 - $2500",
            pricingRange: "$800 - $2500",
            pricingDetails: "Simple API integration: $800-$1200, Custom API development: $1500-$2000, Complex multi-system integration: $2000-$2500. Pricing varies based on complexity and number of endpoints.",
            features: [
                "Custom REST & GraphQL API Development",
                "Third-party API Integration",
                "Payment Gateway Integration",
                "CRM & ERP System Connections",
                "Social Media API Integration",
                "Real-time Data Synchronization",
                "API Documentation & Testing",
                "Webhook Implementation",
            ],
            benefits: [
                "Seamless data flow between all your systems",
                "Automate manual data transfer tasks",
                "Enable powerful app-to-app communication",
                "Scalable architecture for future growth",
            ],
        },
        {
            title: "Custom Software Solutions",
            slug: "custom-software",
            description: "Bespoke web apps, dashboards, and tools built exactly for your business needs.",
            longDescription: "Off-the-shelf software doesn't fit your business: custom software does. Nexiler develops tailored web applications, admin dashboards, and internal tools that streamline your unique workflows and scale with you.",
            pricing: "$2000 - $5000+",
            pricingRange: "$2000 - $5000+",
            pricingDetails: "Internal tools & dashboards: $2000-$3000, Custom web applications: $3000-$4000, Enterprise solutions: $4000-$5000+. Complex projects quoted based on scope and requirements.",
            features: [
                "Custom Web Application Development",
                "Admin Dashboards & Portals",
                "Internal Business Tools",
                "Database Design & Management",
                "User Authentication & Security",
                "Cloud Deployment & Hosting",
                "Performance Optimization",
                "Ongoing Support & Maintenance",
            ],
            benefits: [
                "Software built exactly for your needs",
                "Streamline your unique business processes",
                "Full ownership and control of your tools",
                "Scalable solutions that grow with you",
            ],
        },
    ],
};

// About page content
export const aboutContent = {
    hero: {
        title: "About Nexiler",
        subtitle: "We're a team of AI experts, developers, and strategists dedicated to transforming businesses through cutting-edge automation and custom solutions.",
    },
    values: [
        {
            title: "Mission-Driven",
            description: "We're committed to delivering transformative solutions that drive real business value.",
        },
        {
            title: "Client-Centric",
            description: "Your success is our success. We build lasting partnerships based on trust and results.",
        },
        {
            title: "Innovation First",
            description: "We stay ahead of the curve, leveraging the latest technologies to give you a competitive edge.",
        },
        {
            title: "Excellence Always",
            description: "Quality is non-negotiable. We deliver world-class solutions every single time.",
        },
    ],
    stats: [
        { value: "50+", label: "Projects Completed" },
        { value: "230+", label: "Happy Clients" },
        { value: "15+", label: "Years Experience" },
        { value: "98%", label: "Client Satisfaction" },
    ],
};

// Portfolio content
export const portfolioContent = {
    hero: {
        title: "Our Portfolio",
        subtitle: "Explore our portfolio of successful projects that showcase our expertise in AI automation, software development, and digital transformation.",
    },
    categories: ["All", "AI Automation", "Web Dev", "Mobile App", "Data Science"],
    projects: [
        {
            title: "AI-Powered CRM Automation",
            category: "AI Automation",
            description: "End-to-end CRM automation with predictive lead scoring and intelligent email campaigns.",
            tags: ["Python", "TensorFlow", "AWS"],
        },
        {
            title: "E-Commerce Platform",
            category: "Web Dev",
            description: "Full-stack e-commerce solution with real-time inventory and ML recommendations.",
            tags: ["Next.js", "Node.js", "PostgreSQL"],
        },
        {
            title: "Mobile Banking App",
            category: "Mobile App",
            description: "Secure mobile banking application with biometric authentication.",
            tags: ["React Native", "Firebase", "Plaid"],
        },
        {
            title: "Business Intelligence Dashboard",
            category: "Data Science",
            description: "Real-time analytics dashboard with custom KPI tracking.",
            tags: ["Python", "Tableau", "BigQuery"],
        },
        {
            title: "Document Processing AI",
            category: "AI Automation",
            description: "Automated document classification and data extraction system.",
            tags: ["OCR", "NLP", "Azure"],
        },
        {
            title: "Healthcare Portal",
            category: "Web Dev",
            description: "Patient management system with appointment scheduling and telemedicine.",
            tags: ["React", "Express", "MongoDB"],
        },
    ],
};

// Blog content
export const blogContent = {
    hero: {
        title: "Blog & Insights",
        subtitle: "Latest insights on AI automation, development best practices, and industry trends from our expert team.",
    },
    categories: ["All Posts", "AI Insights", "Development", "Security", "Case Studies"],
};

// Contact content
export const contactContent = {
    hero: {
        title: "Let's Build Together",
        subtitle: "Ready to transform your business? Get in touch and let's create something amazing.",
    },
    info: [
        {
            label: "Email",
            value: "contact@nexiler.tech",
            link: "mailto:contact@nexiler.tech",
        },
        {
            label: "WhatsApp",
            value: "Chat with us",
            link: "https://wa.me/923001234567",
        },
        {
            label: "Location",
            value: "Remote Team, Serving Worldwide",
            link: null,
        },
    ],
};

// Footer content
export const footerContent = {
    description: "Transforming businesses with cutting-edge AI automation and custom solutions. Your partner in digital transformation.",
    copyright: "Nexiler. All rights reserved.",
    tagline: "Built with ❤️ and AI",
};

// Navigation
export const navigation = {
    main: [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/services", label: "Services" },
        { href: "/our-work", label: "Our Work" },
        { href: "/blogs", label: "Blog" },
        { href: "/contact", label: "Contact" },
    ],
    footer: {
        company: [
            { label: "About Us", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Our Work", href: "/our-work" },
            { label: "Blog", href: "/blogs" },
        ],
        resources: [
            { label: "Case Studies", href: "/our-work" },
            { label: "Pricing", href: "/services" },
            { label: "Contact", href: "/contact" },
            { label: "FAQ", href: "/about#faq" },
        ],
        legal: [
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms of Service", href: "/terms-of-service" },
            { label: "Cookie Policy", href: "/cookie-policy" },
        ],
    },
};
