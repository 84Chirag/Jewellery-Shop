import React from 'react'
import BreadCrumb from '../template/BreadCrumb'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShop, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import ContactForm from './ContactForm';
const Contact = () => {
  return (
    <>
      <BreadCrumb title="Contact" />
      <div className="contactmap">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15082.60697014069!2d72.89771245030033!3d19.079043543118722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c62fab932dc5%3A0x2bfeeb52ce235a58!2sGhatkopar%2C%20Sindhu%20Wadi%2C%20Ghatkopar%20East%2C%20Mumbai%2C%20Maharashtra%20400077!5e0!3m2!1sen!2sin!4v1698388620980!5m2!1sen!2sin" width="100%" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="container my-4">
        <div className="contactbox">
          <div className="contactdetail">
            <h2><b>Contact Us</b></h2>
            <div className="contactaddress">
              <h4><a href="https://maps.app.goo.gl/oinLXwSAs4mYHJzA8" target='_blank' rel="noopener"><FontAwesomeIcon icon={faShop} className='contacticon' size='xl' /> Ghatkopar</a></h4>
            </div>
            <div className="contactphone">
              <h4><a href="tel:+91 989 989 9898" target='_blank' rel="noopener"><FontAwesomeIcon icon={faPhone} className='contacticon' size='xl' /> +91 989 989 9898 </a></h4>
            </div>
            <div className="contactemail">
              <h4><a href="mailto:info@gmail.com" target='_blank' rel="noopener"><FontAwesomeIcon icon={faEnvelope} className='contacticon' size='xl' /> info@gmail.com </a></h4>
            </div>
          </div>
          <div className="contactform">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact