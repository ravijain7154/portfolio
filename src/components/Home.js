import React from "react";
import { CircularProgressbar , buildStyles  } from 'react-circular-progressbar';
import { easeQuadInOut } from 'd3-ease';
import AnimatedProgressProvider from './AnimatedProgressProvider'
import "react-circular-progressbar/dist/styles.css";

const Sidebarleft = ({name}) => {
    return(
      <div className="sidebar" id="sidebar-left">
        <div className="side-card">
            <div className="side-img-box">
                <div className="side_card_img">
                    <img src={`/images/avatar.svg`} />
                </div>
                <div className="side_card_content">
                    <h3 className="title">{name}</h3>
                    <span className="subtitle">Developer</span>
                </div>
            </div>
            <div className="side-text-box">
                <a href="#" download className="btn btn-primary custom_btn download-btn"><span>Download CV </span> 
                  <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" fill="none">
                   <path d="M12 16V4M12 16L9 13M12 16L15 13M7 9H6.2C5.0799 9 4.51984 9 4.09202 9.21799C3.71569 9.40973 3.40973 9.71569 3.21799 10.092C3 10.5198 3 11.0799 3 12.2V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.0799 20 6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V12.2C21 11.0799 21 10.5198 20.782 10.092C20.5903 9.71569 20.2843 9.40973 19.908 9.21799C19.4802 9 18.9201 9 17.8 9H17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
            </div>
        </div>
      </div>     
    );   
};

const Aboutsection = ({name}) => {
    return (
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
    );
};

const ProgressCircle = ({ percentage }) => {
  const parsedPercentage = typeof percentage === "number" && percentage >= 0
    ? percentage
    : 0;
  // alert(parsedPercentage);
  return (
    <div style={{ width: "80px", height: "80px" }}>
      <AnimatedProgressProvider
        key={parsedPercentage} // 🔁 re-trigger animation on value change
        valueStart={0}
        valueEnd={parsedPercentage}
        duration={1.4}
        easingFunction={easeQuadInOut}
      >
        {/* {(value) => { */}
         {() => {
          return (
            <CircularProgressbar
              value={parsedPercentage}
              text={`${parsedPercentage}%`}
              styles={buildStyles({
                rotation: 0.25,
                strokeLinecap: "butt",
                textSize: "16px",
                pathTransitionDuration: 0.5,
                pathColor: `rgba(62, 152, 199, ${parsedPercentage / 100})`,
                textColor: "#f88",
                trailColor: "#d6d6d6",
                backgroundColor: "#3e98c7",
              })}
            />
          );
          }}
        {/* // }} */}
      </AnimatedProgressProvider>
    </div>
  );
};

const Personal_info = ({name}) => {
    return (
        <section  id="info" className="info-section mid-section mb-4">
            <div className="row">
             <div className="col-sm-6 col-12 rich-text">
                <h2 className="title-sm">Personal Information</h2>
                <ul className='info_list'>
                    <li className='info_item'><span className='label'><strong>Name : </strong></span> <a href='#' className='name '>{name}</a></li>
                    <li className='info_item'><span className='label'><strong>Date of Birth : </strong></span><span className=''>March 25, 1999</span> </li>
                    <li className='info_item'><span className='label'><strong>Email : </strong></span> <a href='mailto:ravijain7154@gmail.com' className='mail '>ravijain7154@gmail.com</a></li>
                    <li className='info_item'><span className='label'><strong>Phone : </strong></span> <a href='tel:+917073936166' className='mail '>+917073936166</a></li>    
                </ul>
             </div>
             <div className="col-sm-6 col-12 rich-text">
                <h2 className="title-sm">languages</h2>
                <ul className='info_list'>
                    <li className='info_item'><span className='label'><strong>English </strong></span> </li>
                    <li className='info_item'><span className='label'><strong>Hindi </strong></span></li>
                </ul>
             </div>
             <hr></hr>
             <div className="col-sm-6 col-12 rich-text">
                <h2 className="title-sm">Professional Skills</h2>
                <ul className='info_list'>
                    <li className='info_item'><span className='label'><strong>Name : </strong></span> <a href='#' className='name '>{name}</a></li>
                    <li className='info_item'><span className='label'><strong>Date of Birth : </strong></span><span className=''>March 25, 1999</span> </li>
                    <li className='info_item'><span className='label'><strong>Email : </strong></span> <a href='mailto:ravijain7154@gmail.com' className='mail '>ravijain7154@gmail.com</a></li>
                    <li className='info_item'><span className='label'><strong>Phone : </strong></span> <a href='tel:+917073936166' className='mail '>+917073936166</a></li>    
                </ul>
             </div>
             <div className="col-sm-6 col-12 rich-text">
                <h2 className="title-sm">languages</h2>
                <ul className='form-group'>
                  <li className='form_item'>
                    <ProgressCircle percentage={80} />
                    <span className='label'><strong>Html </strong></span> 
                  </li>
                  <li className='form_item'> 
                    <ProgressCircle percentage={80} />
                    <span className='label'><strong>css </strong></span> 
                  </li>
                  <li className='form_item'> 
                    <ProgressCircle percentage={75} />
                    <span className='label'><strong>js</strong></span> 
                  </li>
                </ul>
             </div>
           </div>

        </section>
    );
};

function Home() {
    return (
        <main id ="main">
            <div className="container">
                <div className="row">
                 <div className="col-sm-3">
                  <Sidebarleft name ="Ravi Jain" />
                 </div>
                <div className="col-sm-9 middle">
                    <Aboutsection name ="Ravi Jain"/>
                    <Personal_info name ="Ravi Jain"/>
                    
                </div>
                </div>
            </div>
        </main>
    );
}

export default Home;
