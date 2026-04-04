import React from "react";
import { Slide } from "react-awesome-reveal";
import { educationData, experienceData } from "../data/profileKnowledge";

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
                     <ul className="exp_text">
                        {exp.responsibilities.map((text, index) => (
                          <li key={index}>{text}</li>
                        ))}
                     </ul>
                   </div>
                  ))}
                </div>
             </div>
             
             <div className="section-divider mt-2 mb-4"></div>
             <div className="rich-text exp-block">
                <h2 className="title-sm mb-4">Education</h2>
                <div className="exp-block_content">
                  {educationData.map((edu, index) => (
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
