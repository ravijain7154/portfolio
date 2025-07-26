import { Fade, Slide } from "react-awesome-reveal";
import React, { useState } from "react";

const projectData = {
  Shopify: [
    "https://brillianttouchllc.com/",
    "https://vedajewelry.com/",
    "https://therealdealforyou.com/",
    "https://emmajewelryusa.com/",
    "https://americanwestjewelry.com/",
    "https://bfriesian.com/",
    "https://shop-ery.com/",
    "https://shopvivaan.com/",
    "https://58brilliant.com/",
    "https://4f9375-0e.myshopify.com/",
    "https://ringpremier.com/",
    "https://vivienshan.com/",
    "https://yny-jewels-inc.myshopify.com/",
    "https://lovediamondconcierge.com/",
    "https://parkhilljewelry.com/",
    "https://criderquality.com/",
    "https://ciccarellijewelers.com/",
    "https://djbitzan.com/",
    "https://jaysjewelry.com/",


  ],
  WordPress: [
    "https://princesbuildtech.com/",
    "https://manatkaur.com/",
    "https://www.mpsschoolindore.com/",
    "https://gemsbridge.com/cobblestonesupply/",
    "https://gemsbridge.com/Maheshwari_Girls_Hostel/",
  ],
  Squarespace: ["https://vivaan.us/"],
  "HTML/PHP": [
    "https://veer.diamonds/",
    "https://www.naamdiamonds.com/",
    "https://diaexpressions.com/",
    "https://www.louisnewman.com/",
    "https://orientalgemco.com/",
    "https://fdg-us.com/",
    "https://gemsbridge.com/soham_diamonds/",
    "https://gemsbridge.com/gemsring/",
    "https://ynyjewels.us/",
    "https://colorsforever.com/",
    "https://cincostar.com/",
    "https://www.creativediam.com/",
    "https://skcjewelery.com/",
  ],
};

// Screenshot helper




const Portfolio = () => {
  const tabs = ["All", ...Object.keys(projectData)];
  const [activeTab, setActiveTab] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const allProjects = Object.entries(projectData).flatMap(([category, urls]) =>
    urls.map((url) => ({ url, category }))
  );

  const filteredProjects =
    activeTab === "All"
      ? allProjects
      : projectData[activeTab].map((url) => ({ url, category: activeTab }));

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;


const getScreenshot = (url, category) => {
  const domain = new URL(url).hostname.replace("www.", "");
  return `/screenshots/${category}/${domain}.png`;
};

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setVisibleCount(6); // Reset count on tab change
  };

  return (
    <Slide triggerOnce = "true"  direction = "up">
       <section  id="portfolio" className="portfolio-section mid-section mb-4">
    <div className="rich-text portfolio-block">
      <h2 className="title-sm mb-4">My Portfolio Projects</h2>
<div className="tabs-container" style={{ overflow: "hidden"}}>
      {/* Tabs */}
      <div className="d-flex justify-content-center flex-wrap gap-2 mb-4 tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`tab btn btn-sm ${activeTab === tab ? "btn-primary active-btn" : "btn-outline-primary nonactive-btn"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}
       <Fade direction="left"  cascade triggerOnce key={activeTab} fraction={0} damping={0.1} duration={1500} >
      <div className="row tab-content">
        {visibleProjects.map((project, index) => (
          <div className={`col-sm-12 col-md-6 col-lg-4 mb-4`}  key={index}>
            <div className="card h-100 shadow-sm">
               <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="overlay"
                ></a>
              <div className="card-img">
                <img
                  src={getScreenshot(project.url, project.category)}
                  className="card-img-top"
                  alt={`Screenshot of ${project.url}`}
                  style={{ objectFit: "cover" }}
                />
             </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.category} Project</h5>
                <p className="card-text text-truncate">{project.url}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-primary mt-auto"
                >
                  Visit Website
                </a>
              </div>
            </div>
            
          </div>
        
        ))}
        {filteredProjects.length === 0 && (
          <p className="text-muted text-center">No projects found.</p>
        )}
      </div>
         </Fade>

      {/* Show More Button */}
      {hasMore && (
        <div className="text-center mt-4">
          <button className="btn btn-secondary" onClick={handleShowMore}>
            Show More
          </button>
        </div>
      )}
    </div>
    </div>
    </section>
    </Slide>
  );
};

export default Portfolio;
