import React from "react";
import { Slide } from "react-awesome-reveal";
import Progress from './Progress';


const Personal_info = ({name}) => {
    return (
      <Slide triggerOnce = "true"  direction = "up">
         <section  id="info" className="info-section mid-section mb-4">
            <div className="row">
             <div className="col-md-6 col-12 rich-text">
                <h2 className="title-sm">Personal Information</h2>
                <ul className='info_list'>
                    <li className='info_item'><span className='label'><strong>Name : </strong></span> <a href='#' className='name '>{name}</a></li>
                    <li className='info_item'><span className='label'><strong>D.O.B : </strong></span><span className=''>March 25, 1999</span> </li>
                    <li className='info_item'><span className='label'><strong>Email : </strong></span> <a href='mailto:ravijain7154@gmail.com' className='mail '>ravijain7154@gmail.com</a></li>
                    <li className='info_item'><span className='label'><strong>Phone : </strong></span> <a href='tel:+917073936166' className='mail '>+917073936166</a></li>    
                </ul>
             </div>
             <div className="col-md-6 col-12 rich-text">
                <h2 className="title-sm">languages</h2>
               
                    <div className='progress_bullet_group'>
                      <span className='label'>
                       <strong>English </strong>
                      </span>
                      <Progress percentage={80} type="bullet" max={10} />
                    </div>
                    <div className='progress_bullet_group'>
                      <span className='label'><strong>Hindi </strong></span>
                      <Progress percentage={90} type="bullet" max={10} />

                    </div>
      
             </div>
             <hr></hr>
             <h2 className="title-sm text-start mb-3">Professional Skills</h2>
             <div className="col-md-6 col-12 rich-text">
                  <Progress percentage={85} type="linear" label="Html & Css" />
                  <Progress percentage={80} type="linear" label="Shopify" />
                  <Progress percentage={75} type="linear" label="Wordpress" />
                  <Progress percentage={75 } type="linear" label="PHP & MySQL" />
      
             </div>
             <div className="col-md-6 col-12 rich-text  pt-4 pt-md-0">
                
                <div className='row justify-content-center py-md-4 gap-4 gap-md-0'>
                    <Progress percentage={75} type="circle" label="React"/>
        
                    <Progress percentage={70} type="circle" label="Node"/>
                    
                    <Progress percentage={70} type="circle"  label="Js" />
                    
                    {/* <Progress percentage={80} type="circle" label="Html & Css" /> */}
                    
                </div>
             </div>
           </div>

         </section>
       </Slide>
    );
};

export default Personal_info;