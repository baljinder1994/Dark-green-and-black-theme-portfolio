import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className='footer'>
     <div className='footer-container'>
        <div className='footer-info'>
            <h3>Contact Me</h3>
            <p>Email:abc@gmail.com</p>
            <p>Phone:+123 456 7890</p>
        </div>

        <div className='footer-social'>
            <h3>Foolow Me</h3>
            <div className='social-icons'>
                <a href="#" aria-label="facebook" className='social-icon'><FaFacebookF/></a>
                <a href="#" aria-label="facebook" className='social-icon'><FaTwitter/></a>
                <a href="#" aria-label="facebook" className='social-icon'><FaInstagram/></a>
                <a href="#" aria-label="facebook" className='social-icon'><FaLinkedin/></a>
            </div>
        </div>
        <div className='footer-bottom'>
            <p>&copy; Baljinder Kaur. All Rights Reserved.</p>
        </div>
     </div>
    </footer>
  )
}

export default Footer
