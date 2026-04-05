import { Fade, Slide } from "react-awesome-reveal";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProjects, getScreenshot, projectData } from "../data/projects";

const MOBILE_PROJECTS_COUNT = 4;
const DESKTOP_PROJECTS_COUNT = 6;

const getInitialVisibleCount = () =>
  window.innerWidth < 768 ? MOBILE_PROJECTS_COUNT : DESKTOP_PROJECTS_COUNT;

const Portfolio = () => {
  const tabs = ["All", ...Object.keys(projectData)];
  const [activeTab, setActiveTab] = useState("All");
  const [visibleCount, setVisibleCount] = useState(getInitialVisibleCount);

  const allProjects = getAllProjects();
  const filteredProjects =
    activeTab === "All" ? allProjects : projectData[activeTab];
  const visibleProjects = filteredProjects.slice(0, visibleCount);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount((prev) => {
        const nextCount = getInitialVisibleCount();
        return prev > nextCount ? prev : nextCount;
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setVisibleCount(getInitialVisibleCount());
  };

  return (
    <Slide triggerOnce={true} direction="up">
      <section id="portfolio" className="portfolio-section mid-section mb-4">
        <div className="rich-text portfolio-block">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
            <h2 className="title-sm mb-0">My Portfolio Projects</h2>
            <p className="des mb-0">
              Selected Shopify, React, WordPress, and custom web projects delivered for brands in ecommerce and business services.
            </p>
          </div>

          <div className="tabs-container" style={{ overflow: "hidden" }}>
            <div className="d-flex justify-content-center flex-wrap gap-2 mb-4 tabs">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`tab btn btn-sm ${
                    activeTab === tab
                      ? "btn-primary active-btn"
                      : "btn-outline-primary nonactive-btn"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <Fade
              direction="left"
              cascade
              triggerOnce
              key={activeTab}
              fraction={0}
              damping={0.1}
              duration={1500}
            >
              <div className="row tab-content">
                {visibleProjects.map((project, index) => (
                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4" key={index}>
                    <div className="card h-100 shadow-sm">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="overlay"
                        aria-label={`Open ${project.title}`}
                      >
                        <span className="visually-hidden">Open {project.title}</span>
                      </a>
                      <div className="card-img">
                        <img
                          src={getScreenshot(project.url, project.category)}
                          className="card-img-top"
                          alt={`Screenshot of ${project.title}`}
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="card-body d-flex flex-column">
                        <span className="project-category mb-2">
                          {project.category}
                        </span>
                        <h5 className="card-title">{project.title}</h5>
                        <div className="tech-stack mb-3">
                          {project.technologies.map((tech) => (
                            <span className="tech-badge" key={tech}>
                              {tech}
                            </span>
                          ))}
                        </div>
                        <p className="card-text project-description">
                          {project.description}
                        </p>
                        <p className="project-url text-truncate">{project.url}</p>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-outline-primary mt-auto"
                        >
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye mr-2 h-4 w-4"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
                         <span>View Details</span> 
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
          </div>
          <Link to="/projects" className="btn btn-outline-light">
              View All Projects
            </Link>
        </div>
      </section>
    </Slide>
  );
};

export default Portfolio;
