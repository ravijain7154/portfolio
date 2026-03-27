const rawProjectData = {
  Shopify: [
        
    "https://americanwestjewelry.com/",
    "https://emmajewelryusa.com/",
    "https://vedajewelry.com/",
    "https://shopvivaan.com/",
    "https://shop-ery.com/",
    "https://jaysjewelry.com/",
    "https://diamondmineon9.com/",
    "https://therealdealforyou.com/",
    "https://brillianttouchllc.com/",
    "https://bfriesian.com/",
    "https://58brilliant.com/",
    "https://ringpremier.com/",
    "https://yny-jewels-inc.myshopify.com/",
    "https://parkhilljewelry.com/",
    "https://criderquality.com/",
    "https://ciccarellijewelers.com/",
    "https://djbitzan.com/",

    
  ],
  WordPress: [
    "https://princesbuildtech.com/",
    "https://manatkaur.com/",
    "https://cobblestonesupply.com/",
  ],
  Squarespace: ["https://vivaan.us/"],
  "HTML/PHP": [
    "https://www.naamdiamonds.com/",
    "https://diaexpressions.com/",
    "https://www.louisnewman.com/",
    "https://orientalgemco.com/",
    "https://fdg-us.com/",
    "https://ynyjewels.us/",
    "https://www.creativediam.com/",
    "https://skcjewelery.com/",
  ],
};

const technologyMap = {
  Shopify: ["Shopify", "Liquid", "JavaScript", "CSS", "HTML"],
  WordPress: ["WordPress", "PHP", "JavaScript", "CSS", "HTML"],
  Squarespace: ["Squarespace", "CSS", "JavaScript", "Responsive UI"],
  "HTML/PHP": ["HTML", "PHP", "JavaScript", "CSS"],
};

const descriptionMap = {
  Shopify:
    "Built a conversion-focused Shopify storefront with polished product pages, responsive sections, and a smooth shopping experience.",
  WordPress:
    "Developed a responsive WordPress website with custom layouts, clear content structure, and an easy-to-manage admin experience.",
  Squarespace:
    "Created a clean Squarespace website with responsive sections, branded styling, and a user-friendly content flow.",
  "HTML/PHP":
    "Built a custom website with HTML, PHP, and front-end scripting, focused on performance, responsive layouts, and clear navigation.",
};

const toTitleCase = (value) =>
  value
    .split(/[-_]/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

const getProjectTitle = (url) => {
  const hostname = new URL(url).hostname.replace("www.", "");
  const [domainName] = hostname.split(".");
  return toTitleCase(domainName);
};

const buildProject = (url, category) => ({
  url,
  category,
  title: getProjectTitle(url),
  description: `${descriptionMap[category]} This project was tailored for ${getProjectTitle(
    url
  )}.`,
  technologies: technologyMap[category],
});

export const projectData = Object.fromEntries(
  Object.entries(rawProjectData).map(([category, urls]) => [
    category,
    urls.map((url) => buildProject(url, category)),
  ])
);

export const getAllProjects = () => Object.values(projectData).flat();

export const getScreenshot = (url, category) => {
  const domain = new URL(url).hostname.replace("www.", "");
  return `/screenshots/${category}/${domain}.png`;
};
