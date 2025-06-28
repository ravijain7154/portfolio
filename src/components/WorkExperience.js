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
    ],
  },
  {
    year: "2022 - 2024",
    role: "Frontend Developer",
    company: "Braintree Products",
    responsibilities: [
      "Develop and maintain user-facing features using HTML, CSS, and JavaScript. ",
      "Implement responsive designs for various screen sizes. ",
      "Collaborate with UX/UI team for user-friendly interfaces. ",
      "Optimize performance and accessibility. ",
      "Document frontend processes and best practices.",
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
                        {exp.responsibilities}
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