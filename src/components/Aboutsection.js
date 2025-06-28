
// components/AboutSection.jsx
import React from "react";
import { Fade } from "react-awesome-reveal";

const Aboutsection = ({name}) => {
    return (
     <Fade triggerOnce = "true" direction = "up">
        <section id = "about" className="about-section mid-section mb-4">
           <div className="row">
             <div className="col-12 rich-text">
                <h2 className="title-lg">About Me</h2>
                <h3 className="subtitle mb-3"> Hi, I'm <strong>{name},</strong> </h3>
                 <p className="des">
                    I'm a passionate developer focused on building modern, user-friendly web applications.
                    With a strong foundation in both front-end and back-end technologies, I enjoy solving real-world problems through clean, efficient code and intuitive design. 
                    I work with languages and tools such as Html, Css, JavaScript, React, Node.js, Express, and SQL , and I'm also experienced with CMS platforms like WordPress and Shopify. 
                    I have hands-on experience integrating RESTful APIs and optimizing performance for scalable applications. Always eager to learn, 
                    I stay updated with the latest tech trends and am committed to delivering impactful digital experiences that make a difference.
                 </p>
                 <a href="#" className="btn custom_btn">
                    Share
                 </a>
             </div>
           </div>
        </section>
     </Fade>
    );
};

export default Aboutsection;