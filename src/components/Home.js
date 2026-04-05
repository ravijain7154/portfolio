import React from "react";
// import { CircularProgressbar , buildStyles  } from 'react-circular-progressbar';
// import { easeQuadInOut } from 'd3-ease';
// import AnimatedProgressProvider from './AnimatedProgressProvider'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faInstagram, faFacebook, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
// import { Fade, Slide } from "react-awesome-reveal";

import "react-circular-progressbar/dist/styles.css";


import SidebarLeft from './SidebarLeft' ;
import Aboutsection from './Aboutsection' ;
import SearchIntentSection from "./SearchIntentSection";
// import GenAISection from './GenAISection';
// import Progress from './Progress' ;
import PersonalInfo from './Personal_info' ;
import Contact from './Contact' ;
import WorkExperience from './WorkExperience' ;
import Portfolio from './Portfolio' ;


function Home() {
    return (
        <>
            {/* <div className="container"> */}
            <div className="row mt-4 mx-0">
                 <div className="col-lg-3 side-bar">
                  <SidebarLeft name ="Ravi Jain" />
                 </div>
                <div className="col-lg-9 middle">
                    <Aboutsection name ="Ravi Jain"/>
                    <SearchIntentSection />
                    {/* <GenAISection /> */}
                    <PersonalInfo name ="Ravi Jain"/>
                    <WorkExperience />
                    <Portfolio />
                    <Contact/>
                    
                </div>
                </div>
            {/* </div> */}
        </>
    );
}

export default Home;
