export const SITE_URL = "https://ravijain.vercel.app";

export const HOME_KEYWORDS = [
  "Ravi Jain Indore",
  "Ravi Jain developer",
  "Ravi Jain portfolio",
  "Ravi Jain full stack developer",
  "Ravi Jain web developer",
  "Shopify expert Indore",
  "Shopify expert freelance developer Indore",
  "Shopify expert freelance developer in Indore, India",
  "Shopify expert freelance developer India",
  "Shopify developer Indore",
  "Shopify website developer Indore",
  "Shopify freelance developer in Indore",
  "freelance Shopify developer Indore",
  "full stack developer Indore",
  "web developer Indore",
  "website developer Indore",
  "frontend developer Indore",
  "React developer Indore",
  "Node.js developer Indore",
  "software developer Indore",
  "freelance web developer Indore",
  "ecommerce developer Indore",
  "web developer India",
  "full stack developer India",
  "React developer India",
  "frontend developer India",
  "software developer India",
  "Shopify developer",
  "web developer",
  "freelancer",
  "freelance developer",
  "developer in Indore",
  "developer in India",
  "Shopify developer India"
];

export const createHomeSchema = (canonicalUrl, imageUrl) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${canonicalUrl}#person`,
      name: "Ravi Jain",
      alternateName: ["Ravi Jain Indore", "Ravi Jain Developer"],
      jobTitle: "Full Stack Developer, Shopify Developer, and React Developer",
      description:
        "Ravi Jain is a freelance web developer in Indore, India helping businesses build ecommerce stores, custom Shopify themes, React interfaces, business websites, and SEO-friendly digital experiences.",
      image: imageUrl,
      url: canonicalUrl,
      email: "mailto:ravijain7154@gmail.com",
      telephone: "+91 70739 36166",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Indore",
        addressRegion: "Madhya Pradesh",
        addressCountry: "IN",
      },
      homeLocation: {
        "@type": "Place",
        name: "Indore, Madhya Pradesh, India",
      },
      knowsAbout: [
        "Shopify development",
        "Shopify theme customization",
        "Liquid",
        "Web development",
        "Frontend development",
        "React.js",
        "Node.js",
        "Full stack development",
        "Website development",
        "Ecommerce development",
        "SEO-friendly ecommerce development",
        "Freelance web development",
        "Freelance Shopify development",
        "Developer services in Indore",
        "Web developer India",
      ],
      sameAs: [
        "https://github.com/ravijain7154",
        "https://www.instagram.com/ravijain_rj25/",
        "https://www.facebook.com/9575Rj/",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${canonicalUrl}#service`,
      name: "Ravi Jain Development Services",
      description:
        "Freelance Shopify, web development, React, frontend, and full stack development services from Indore for ecommerce brands, local businesses, startups, and growing companies across India.",
      provider: {
        "@id": `${canonicalUrl}#person`,
      },
      areaServed: [
        {
          "@type": "City",
          name: "Indore",
        },
        {
          "@type": "Country",
          name: "India",
        },
      ],
      serviceType: [
        "Shopify store development",
        "Shopify theme customization",
        "Ecommerce SEO",
        "Web development",
        "Website development",
        "Frontend development",
        "React development",
        "Full stack development",
        "Node.js development",
        "Ecommerce development",
      ],
      url: canonicalUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${canonicalUrl}#website`,
      url: canonicalUrl,
      name: "Ravi Jain Portfolio",
      description:
        "Portfolio of Ravi Jain, full stack developer, Shopify developer, and React developer in Indore, India.",
      inLanguage: "en-IN",
    },
    {
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Who is Ravi Jain in Indore?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ravi Jain is a developer based in Indore, India who works on Shopify stores, React frontends, full stack web applications, business websites, and ecommerce platforms.",
          },
        },
        {
          "@type": "Question",
          name: "What services does Ravi Jain offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ravi Jain offers Shopify development, full stack development, frontend development, React development, Node.js development, website development, SEO-friendly business websites, and ecommerce improvements.",
          },
        },
      ],
    },
  ],
});
