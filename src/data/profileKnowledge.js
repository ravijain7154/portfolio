import { getAllProjects } from "./projects";

export const experienceData = [
  {
    year: "2024 - Present",
    role: "Shopify Developer",
    company: "Avalon Solution",
    responsibilities: [
      "Worked on custom Shopify themes and third-party app integration.",
      "Developed ecommerce features tailored for jewelry stores.",
      "Developed and customized Shopify themes for jewelry and lifestyle brands using Liquid, HTML, CSS, JavaScript, and React.",
      "Built custom sections and dynamic components to enhance storefront UI/UX across Dawn, Refresh, and Horizon themes.",
      "Implemented backend logic for shipping rules, subscriptions, and advanced upsell features.",
      "Architected metafield structures and filtering systems to support large product inventories.",
      "Optimized stores for performance, SEO, and mobile responsiveness while managing A/B testing and live support.",
      "Created advanced functionalities like dynamic pricing, custom checkout flows, and cart logic.",
    ],
  },
  {
    year: "2022 - 2024",
    role: "Frontend Developer",
    company: "Braintree Products",
    responsibilities: [
      "Developed and maintained user-facing features using HTML, CSS, and JavaScript.",
      "Implemented responsive designs that work well across devices and screen sizes.",
      "Collaborated with the UX/UI team for user-friendly interfaces.",
      "Optimized web pages for speed and scalability.",
      "Wrote clean, modular, and maintainable code aligned with best practices.",
      "Documented frontend development processes, guidelines, and best practices for future reference.",
    ],
  },
];

export const educationData = [
  {
    year: "2021",
    degree: "MSc in Computer Science",
    institution: "Christian Eminent College, DAVV Indore",
  },
  {
    year: "2019",
    degree: "BSc in Computer Science",
    institution: "Christian Eminent College, DAVV Indore",
  },
];

export const skillsData = {
  frontend: ["HTML", "CSS", "JavaScript", "React", "Responsive UI"],
  ecommerce: ["Shopify", "Liquid", "Metafields", "Theme Customization", "Upsells"],
  cms: ["WordPress", "Squarespace"],
  backend: ["PHP", "MySQL", "Node.js"],
  strengths: ["Performance optimization", "SEO", "A/B testing", "UI/UX collaboration"],
};

export const contactData = {
  email: "ravijain7154@gmail.com",
  phone: "+91 7073936166",
  resumePath: "/updated_Ravi_CV.pdf",
};

const allProjects = getAllProjects();

export const portfolioFacts = {
  name: "Ravi Jain",
  title: "Full Stack Shopify Developer | React and Node.js Developer",
  summary:
    "Ravi Jain is a Full Stack Shopify Developer with expertise in React.js, Node.js, JavaScript, and ecommerce development, building SEO-friendly Shopify stores, scalable web applications, and high-converting user experiences.",
  yearsLabel: "3+ years",
  projectCountLabel: "50+ projects",
  projectCategories: ["Shopify", "WordPress", "Squarespace", "HTML/PHP"],
  featuredProjects: allProjects.slice(0, 8),
  projects: allProjects,
};

export const quickQuestions = [
  "Tell me about Ravi's Shopify experience",
  "What are Ravi's strongest skills?",
  "Which kinds of projects has Ravi built?",
  "How can I contact Ravi or view the resume?",
];

export const knowledgeSections = [
  {
    id: "summary",
    title: "Profile Summary",
    keywords: ["about", "summary", "intro", "profile", "who", "ravi"],
    content: `${portfolioFacts.summary} He has worked across Shopify ecommerce, React frontend development, Node.js functionality, CMS platforms, and custom web solutions with a focus on performance, SEO, clean UI, and business growth.`,
  },
  {
    id: "experience",
    title: "Experience",
    keywords: ["experience", "work", "career", "job", "years", "shopify", "frontend"],
    content: experienceData
      .map(
        (item) =>
          `${item.year}: ${item.role} at ${item.company}. Highlights: ${item.responsibilities
            .slice(0, 4)
            .join(" ")}`
      )
      .join(" "),
  },
  {
    id: "skills",
    title: "Skills",
    keywords: ["skills", "tech", "stack", "technology", "tools", "react", "php", "wordpress"],
    content: `Frontend skills: ${skillsData.frontend.join(", ")}. Ecommerce skills: ${skillsData.ecommerce.join(", ")}. CMS experience: ${skillsData.cms.join(", ")}. Backend familiarity: ${skillsData.backend.join(", ")}. Strengths: ${skillsData.strengths.join(", ")}.`,
  },
  {
    id: "projects",
    title: "Projects",
    keywords: ["projects", "portfolio", "built", "work samples", "clients", "stores", "websites"],
    content: `Ravi has completed ${portfolioFacts.projectCountLabel} across ${portfolioFacts.projectCategories.join(
      ", "
    )}. Example projects include ${portfolioFacts.featuredProjects
      .map((project) => `${project.title} (${project.category})`)
      .join(", ")}.`,
  },
  {
    id: "education",
    title: "Education",
    keywords: ["education", "degree", "college", "study", "msc", "bsc"],
    content: educationData
      .map((item) => `${item.year}: ${item.degree} from ${item.institution}.`)
      .join(" "),
  },
  {
    id: "contact",
    title: "Contact",
    keywords: ["contact", "email", "phone", "resume", "hire", "reach"],
    content: `Ravi can be contacted at ${contactData.email} or ${contactData.phone}. His resume is available at ${contactData.resumePath}.`,
  },
];

export const portfolioContext = `
Name: ${portfolioFacts.name}
Role: ${portfolioFacts.title}
Summary: ${portfolioFacts.summary}
Experience:
${experienceData
  .map(
    (item) =>
      `- ${item.year}: ${item.role} at ${item.company}. Responsibilities: ${item.responsibilities.join(
        " "
      )}`
  )
  .join("\n")}
Skills:
- Frontend: ${skillsData.frontend.join(", ")}
- Ecommerce: ${skillsData.ecommerce.join(", ")}
- CMS: ${skillsData.cms.join(", ")}
- Backend: ${skillsData.backend.join(", ")}
- Strengths: ${skillsData.strengths.join(", ")}
Education:
${educationData
  .map((item) => `- ${item.year}: ${item.degree} from ${item.institution}`)
  .join("\n")}
Projects:
- Total: ${portfolioFacts.projectCountLabel}
- Categories: ${portfolioFacts.projectCategories.join(", ")}
- Featured: ${portfolioFacts.featuredProjects
  .map((project) => `${project.title} (${project.category})`)
  .join(", ")}
Contact:
- Email: ${contactData.email}
- Phone: ${contactData.phone}
- Resume: ${contactData.resumePath}
`.trim();
