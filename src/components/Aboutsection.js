
// components/AboutSection.jsx
import React from "react";
import { Fade } from "react-awesome-reveal";

const Aboutsection = ({name}) => {
    return (
     <Fade triggerOnce = "true" direction = "up">
        <section id = "about" className="about-section mid-section mb-4">
           <div className="row">
             <div className="col-12 rich-text">
                <p className="subtitle mb-2">About Me</p>
                <h1 className="title-lg">Full Stack, Web, and Ecommerce Developer in Indore</h1>
                <h2 className="subtitle mb-3">Hi, I&apos;m <strong>{name}</strong>, a developer based in Indore building modern websites, ecommerce storefronts, and digital products.</h2>
                 <p className="des">
                    I am a full stack developer, Shopify developer, and frontend developer in Indore specializing
                    in React.js, Node.js, JavaScript, Liquid, and modern ecommerce
                    solutions. I create custom Shopify stores, responsive business
                    websites, and scalable web applications with a strong focus on
                    performance, SEO, clean UI, and conversion-driven user experience.
                 </p>
                 <p className="des">
                    With hands-on experience in frontend and backend development,
                    I help businesses in Indore and across India build fast, secure, and user-friendly digital
                    products. From Shopify theme customization and custom sections
                    to React interfaces and Node.js functionality, my goal is to
                    deliver SEO-friendly websites and ecommerce experiences that
                    support long-term business growth.
                 </p>
                 <p className="des">
                    I work with startups, agencies, and business owners who need
                    reliable development support, thoughtful UI implementation,
                    and websites that balance design quality, technical
                    stability, and business
                    performance.
                 </p>

                 <div className="highlight-grid">
                    <div className="highlight-card">
                      <strong>3+ Years</strong>
                      <span>Full stack, frontend, and ecommerce development experience</span>
                    </div>
                    <div className="highlight-card">
                      <strong>50+ Projects</strong>
                      <span>Delivered across Shopify, React, Node.js, WordPress, and custom stacks</span>
                    </div>
                    <div className="highlight-card">
                      <strong>SEO Focused</strong>
                      <span>Building fast, search-friendly, and conversion-oriented digital experiences</span>
                    </div>
                    <div className="highlight-card">
                      <strong>Indore Based</strong>
                      <span>Available for local businesses in Indore as well as remote ecommerce projects</span>
                    </div>
                 </div>

                 <div className="cta-group">
                   <a href="#contact" type="button" className="btn custom_btn">
                      Hire Me
                   </a>
                   <a href="#portfolio" type="button" className="btn btn-outline-light">
                      View Projects
                   </a>
                 </div>
             </div>
           </div>
        </section>
     </Fade>
    );
};

export default Aboutsection;
