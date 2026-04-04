import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner container-lg">
        <div className="site-footer-top">
          <div>
            <span className="site-footer-kicker">Available for freelance work</span>
            <h2 className="site-footer-title">Let&apos;s build your next Shopify or web project</h2>
            <p className="site-footer-text">
              Full Stack Shopify Developer building fast, modern React, Node.js,
              and ecommerce experiences for growing brands.
            </p>
          </div>
          
        </div>
        <div className="site-footer-links">
          <a href="mailto:ravijain7154@gmail.com">ravijain7154@gmail.com</a>
          <a href="tel:+917073936166">+91 7073936166</a>
          <span>Indore, India</span>
          <a href="#contact" className="site-footer-cta">
            Start a project
          </a>
        </div>
        <p className="site-footer-copy mb-0">
          &copy; {currentYear} Ravi Jain. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
