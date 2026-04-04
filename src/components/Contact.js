import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMap, faAddressBook } from "@fortawesome/free-regular-svg-icons";
import React, {useState} from "react";
import { Slide } from "react-awesome-reveal";

const Contact = ({name}) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const phoneNumber = '+917073936166';
    const mapLocation = "Indore, Madhya Pradesh, India";
    const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapLocation)}&z=11&output=embed`;
    const [status, setStatus] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
         setStatus('Submitting form...');
         const { name, phone, email, message } = formData;
         // You can perform validation here if needed
         if (!name || !phone || !email || !message) {
            setStatus('Please fill in all fields.');
            return;
         }
         const textMessage = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`;
         const encodedMessage = encodeURIComponent(textMessage);
         const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
         window.open(waLink, '_blank');
         console.log('Form Data:', formData);
         // Reset form after submission
         setFormData({
            name: '',
            phone: '',
            email: '',
            message: ''
         });
         
         setStatus('Form submitted successfully!');
         setTimeout(() => {
            setStatus('');
         }, 5000); // Clear status message after 5 seconds
         
    };

    return (
      <Slide triggerOnce = "true"  direction = "up">
         <section  id="contact" className="contact-section mid-section mb-4">
            <div className="row g-4">
             <div className="col-12 rich-text">
                <h2 className="title-sm">Contact</h2>
                <ul className='contact_info_list'>
                    <li className='contact_info_item info_item'><span className='label'><strong><FontAwesomeIcon icon={faMap} size="2x"/></strong></span><span className=''>Indore</span> </li>
                    <li className='contact_info_item info_item'><span className='label'><strong><FontAwesomeIcon icon={faEnvelope} size="2x"/></strong></span> <a href='mailto:ravijain7154@gmail.com' className='mail '>ravijain7154@gmail.com</a></li>
                    <li className='contact_info_item info_item'><span className='label'><strong><FontAwesomeIcon icon={faAddressBook} size="2x"/></strong></span> <a href='tel:+917073936166' className='mail '>+917073936166</a></li>    
                </ul>
             </div>
             <div className="col-12">
                  <div className="contact-map-card">
                    <div className="contact-map-copy">
                      <strong>Location</strong>
                      <span>Based in {mapLocation} and available for remote work.</span>
                    </div>
                    <div className="contact-map-frame">
                      <iframe
                        src={mapEmbedUrl}
                        title="Ravi Jain location map"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
             </div>
             <div className="col-12">
                  <div className="contact-form-wrap">
                  <h2 className="title-sm">Get In Touch</h2>
                  <p className="des contact-intro">
                    Share your project details and I will get back to you on WhatsApp or email.
                  </p>
                  <form className="contact-form" onSubmit={handleSubmit}>
                     <div className="form-group">
                      <label>Full Name</label>
                      <input  type="text"  placeholder="Your Name"  name="name" value={formData.name} onChange={handleInputChange} required  />
                     </div>
                     <div className="form-group">
                        <label>Phone</label>
                        <input 
                          type="tel" 
                          placeholder="Your Phone Number"
                           name="phone"
                           value={formData.phone}
                           onChange={handleInputChange}
                           required 
                        />
                     </div>
                     <div className="form-group">
                        <label>Email</label>
                        <input 
                          type="email" 
                          placeholder="Your Email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required 
                        />
                     </div>
                     <div className="form-group">
                        <label>Message</label>
                        <textarea 
                          placeholder="Your Message" 
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                        ></textarea>
                     </div>
                     <button type="submit" className="btn btn-primary">Send Message</button>
                  </form>
                  {status && <p className="status-message">{status}</p>}
                  </div>
             </div>
             
           </div>

         </section>
       </Slide>
    );
};

export default Contact;
