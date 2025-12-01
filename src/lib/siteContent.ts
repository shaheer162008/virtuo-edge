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
        title: "Portfolio - Our Work & Success Stories | Nexiler",
        description: "Explore our portfolio of successful AI automation projects, web applications, mobile apps, and data solutions that delivered real results.",
        keywords: "portfolio, case studies, projects, ai projects, web development projects",
        openGraph: {
            title: "Portfolio - Nexiler",
            description: "Explore our portfolio of successful AI automation and development projects.",
            images: [{ url: "https://nexiler.com/og-portfolio.jpg", width: 1200, height: 630, alt: "Nexiler Portfolio" }],
        },
        twitter: {
            card: "summary_large_image" as const,
            title: "Portfolio - Nexiler",
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
        subtitle: "Comprehensive AI and development solutions designed to accelerate your business growth and digital transformation.",
    },
    services: [
        {
            title: "AI Automation",
            description: "Transform repetitive tasks into intelligent automated workflows.",
            features: [
                "Robotic Process Automation (RPA)",
                "Machine Learning Model Development",
                "AI Chatbots & Virtual Assistants",
                "Predictive Analytics",
                "Natural Language Processing",
            ],
        },
        {
            title: "Custom Software Development",
            description: "Tailored applications built with modern technologies.",
            features: [
                "Web Application Development",
                "Mobile App Development (iOS & Android)",
                "Desktop Applications",
                "Progressive Web Apps (PWA)",
                "SaaS Product Development",
            ],
        },
        {
            title: "Data Solutions",
            description: "Turn your data into actionable business intelligence.",
            features: [
                "Data Pipeline Development",
                "Business Intelligence Dashboards",
                "Data Warehousing",
                "ETL/ELT Solutions",
                "Advanced Analytics",
            ],
        },
        {
            title: "System Integration",
            description: "Connect your tools and streamline your operations.",
            features: [
                "API Development & Integration",
                "Third-party Service Integration",
                "Legacy System Modernization",
                "Cloud Migration Services",
                "DevOps & CI/CD Setup",
            ],
        },
        {
            title: "Consulting & Strategy",
            description: "Expert guidance for your digital transformation journey.",
            features: [
                "Technology Consulting",
                "Digital Transformation Strategy",
                "AI Readiness Assessment",
                "Technical Architecture Design",
                "Project Management",
            ],
        },
        {
            title: "Support & Maintenance",
            description: "Ongoing support to keep your systems running smoothly.",
            features: [
                "24/7 Technical Support",
                "System Monitoring",
                "Performance Optimization",
                "Security Updates",
                "Feature Enhancements",
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
            value: "hello@nexiler.com",
            link: "mailto:hello@nexiler.com",
        },
        {
            label: "Phone",
            value: "+1 (555) 123-4567",
            link: "tel:+15551234567",
        },
        {
            label: "Location",
            value: "San Francisco, CA",
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
        { href: "/portfolio", label: "Portfolio" },
        { href: "/blogs", label: "Blog" },
        { href: "/contact", label: "Contact" },
    ],
    footer: {
        company: [
            { label: "About Us", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Portfolio", href: "/portfolio" },
            { label: "Blog", href: "/blogs" },
        ],
        resources: [
            { label: "Case Studies", href: "/portfolio" },
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
