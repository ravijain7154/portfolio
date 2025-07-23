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
// import Progress from './Progress' ;
import Personal_info from './Personal_info' ;
import Work_experience from './WorkExperience' ;


function Home() {
    return (
        <main id ="main">
            {/* <div className="container"> */}
                <div className="row">
                 <div className="col-md-3 side-bar">
                  <SidebarLeft name ="Ravi Jain" />
                 </div>
                <div className="col-md-9 middle">
                    <Aboutsection name ="Ravi Jain"/>
                    <Personal_info name ="Ravi Jain"/>
                    <Work_experience />
                    
                </div>
                </div>
            {/* </div> */}
        </main>
    );
}

export default Home;
