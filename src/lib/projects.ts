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
  featured?: boolean; // mark projects that should appear on the homepage
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
      id: "emergent-enterprise",
        title: "Emergent Enterprise",
        category: "Website Development",
        description: "Comprehensive web application for managing enterprise resources with seamless integration and user-friendly interface.",
        image: "/our-work/emergent-enterprise.png",
        type: "image",
        link: "https://emergententerprise.net/"
    },
    {
      id: "laurus-foods",
        title: "Laurus Foods",
        category: "Website Development",
        description: "A modern, responsive website showcasing the Laurus Foods brand with a focus on user experience and visual appeal.",
        image: "/our-work/laurus-foods.png",
        type: "image",
        link: "https://laurusfoods.uk/",
        featured: true,
    },
    {
        id: "yaarhaulage-limited",
        title: "YAARHAULAGE Limited",
        category: "Website Development",
        description: "A simple yet effective website for a haulage company to showcase services and facilitate contact.",
        image: "/our-work/yaarhaulage-limited.png",
        type: "image",
        link: "https://yaarhaulagelimited.com/",
        featured: true,
    },
    {
        id: "ai-solution-academy",
        title: "Ai Solution Academy",
        category: "Website Development",
        description: "An educational platform for AI courses with registration and learning management.",
        image: "/our-work/ai-solution-academy.png",
        type: "image",
        link: "https://aisolutionpk.com/"
    },
    {
        id: "ajwa-tutors",
        title: "Ajwa Tutors",
        category: "Website Development",
        description: "A modern, responsive website for a tutoring platform to showcase services and facilitate contact.",
        image: "/our-work/ajwa-tutors.png",
        type: "image",
        link: "https://ajwatutors.com/"
    },
    { 
        id: "innox",
        title: "Innox",
        category: "Website Development",
        description: "nnox Private Limited is a MEP contractor specialised in Mechanical, Electrical and Plumbing systems in construction projects.",
        image: "/our-work/innox.png",
        type: "image",
        link: "https://innoxes.com/"
    },
  
  // AI Automation Projects
  {
      id: "sayyid-shaykh",
        title: "Sayyid & Shaykh",
        category: "AI Automation",
        description: "A modern, responsive website for a law firm featuring an AI-powered chatbot to assist visitors with legal inquiries and services.",
        image: "/our-work/sayyid-shaykh.png",
        type: "image",
        featured: true,
        link: "https://sayyidandshaykh.com/"
    },

];
