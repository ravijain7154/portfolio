import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

const SidebarLeft = ({name}) => {
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
                    <div className="social_icons">
                      <FontAwesomeIcon icon={faInstagram} size="2x"/>
                      <FontAwesomeIcon icon={faFacebook} size="2x"/>
                      <FontAwesomeIcon icon={faTwitter} size="2x"/>
                      <FontAwesomeIcon icon={faGithub} size="2x"/>
                    </div>
                </div>
            </div>
            <div className="side-text-box">
                <a href={`/updated_Ravi_CV.pdf`} download className="btn btn-primary custom_btn download-btn"><span>Download CV </span> 
                  <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" fill="none">
                   <path d="M12 16V4M12 16L9 13M12 16L15 13M7 9H6.2C5.0799 9 4.51984 9 4.09202 9.21799C3.71569 9.40973 3.40973 9.71569 3.21799 10.092C3 10.5198 3 11.0799 3 12.2V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.0799 20 6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V12.2C21 11.0799 21 10.5198 20.782 10.092C20.5903 9.71569 20.2843 9.40973 19.908 9.21799C19.4802 9 18.9201 9 17.8 9H17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
            </div>
        </div>
      </div>     
    );   
};

export default SidebarLeft;