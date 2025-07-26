import React from "react";
import { Slide } from "react-awesome-reveal";

const experienceData = [
   {
    year: "2024 - present",
    role: "Shopify Developer",
    company: "Avalon Solution",
    responsibilities: [
      "Worked on custom Shopify themes and third-party app integration. ",
      "Developed ecommerce features tailored for jewelry stores.",
      "Developed and customized Shopify themes for jewelry and lifestyle brands using Liquid, HTML, CSS, JavaScript, and React.",
      "Built custom sections and dynamic components to enhance storefront UI/UX across Dawn, Refresh, and Horizon themes",
      "Implemented backend logic for shipping rules, subscriptions, and advanced upsell features.",
      "Architected metafield structures and filtering systems to support large product inventories.",
      "Optimized stores for performance, SEO, and mobile responsiveness while managing A/B testing and live support.",
      "Created advanced functionalities like dynamic pricing, custom checkout flows, and cart logic."
    ],
  },
  {
    year: "2022 - 2024",
    role: "Frontend Developer",
    company: "Braintree Products",
    responsibilities: [

      "Develop and maintain user-facing features using HTML, CSS, and JavaScript. ",
      "Implement responsive designs that work well across different devices and screen sizes. ",
      "Collaborate with UX/UI team for user-friendly interfaces. ",
      "Optimize web pages for maximum speed and scalability. ",
      "Write clean, modular, and maintainable code that adheres to industry best practices.",
      "Collaborate with the UX/UI team to create intuitive and user-friendly interfaces.",
      "Document frontend development processes, guidelines, and best practices for future reference.",
    ],
  },
  
];

const education = [
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

const Work_experience = () => {
    return (
      <Slide triggerOnce = "true"  direction = "up">
         <section  id="exp" className="exp-section mid-section mb-4">
            <div className="row">
             <div className="rich-text exp-block">
                <h2 className="title-sm mb-4">Work Experience</h2>
                <div className="exp-block_content">
                  {experienceData.map((exp, index) => (
                   <div className="exp_box" key={index}>
                     <span className="exp_year">
                        {exp.year}
                     </span>
                     <h3 className="exp_title">{exp.role}</h3>
                     <span className="exp_subtitle">{exp.company}</span>
                     <p className="exp_text">
                      <ul>
                        {exp.responsibilities.map((text, index) => (
                          <li key={index}>{text}</li>
                        ))}
                        </ul>
                     </p>
                   </div>
                  ))}
                </div>
             </div>
             
             <hr></hr>
             <div className="rich-text exp-block">
                <h2 className="title-sm mb-4">Education</h2>
                <div className="exp-block_content">
                  {education.map((edu, index) => (
                   <div className="exp_box" key={index}>
                     <span className="exp_year">
                        {edu.year}
                     </span>
                     <h3 className="exp_title">{edu.degree}</h3>
                     <span className="exp_subtitle">{edu.institution}</span>
                     {/* <p className="exp_text">
                        {exp.responsibilities}
                     </p> */}
                   </div>
                  ))}
                </div>
             </div>
             
           </div>

         </section>
       </Slide>
    );
};

export default Work_experience;