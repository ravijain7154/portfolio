import React from "react";
import { Slide } from "react-awesome-reveal";

const serviceItems = [
  "Custom Shopify store development and theme customization",
  "Business website design and development for service-based brands",
  "Frontend development with React.js, JavaScript, HTML, and CSS",
  "Full stack web application development with Node.js",
  "SEO-friendly business websites for local brands and ecommerce companies",
  "Performance improvements, UI refinement, and conversion-focused pages",
  "Freelance development support for startups, agencies, and business owners",
];

function SearchIntentSection() {
  return (
    <Slide triggerOnce={true} direction="up">
      <section id="services" className="mid-section mb-4">
        <div className="rich-text">
          <h2 className="title-sm">Services and Expertise</h2>
          <p className="des">
            I help businesses build polished digital products with a practical
            mix of development, performance, and ecommerce experience. My work
            is focused on creating websites, storefronts, and web applications
            that are fast, maintainable, and aligned with business goals.
          </p>

          <div className="search-intent-grid">
            <div className="search-intent-card">
              <h3 className="search-intent-title">What I Work On</h3>
              <ul className="search-intent-list">
                {serviceItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="search-intent-card">
              <h3 className="search-intent-title">How I Add Value</h3>
              <p className="des mb-3">
                Alongside development, I pay close attention to site structure,
                user experience, responsive behavior, and search-friendly
                implementation so the final result performs well for both users
                and businesses.
              </p>
              <p className="des mb-0">
                Whether the project is a Shopify storefront, a React interface,
                a custom business website, or a full stack web platform, I aim
                to deliver clean execution, dependable communication, and
                results that support long-term growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Slide>
  );
}

export default SearchIntentSection;
