import React from 'react'
import {motion} from "framer-motion"
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
const Herp = () => {

  return (
    <section className='hero' id="hero">
        <div className='hero-content'>
            <h1>Welcome To My Portfolio</h1>
            <p>I am a web developer passionate about creating amazing designs</p>
       
        <motion.button
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          className='hero-button'
        >
            Get Started

        </motion.button>
        <div className='social-icons'>
            <motion.a
              whileHover={{scale:1.2}}
              href="#projects"
              className='social-icon'
            >
                <FaFacebookF/>

            </motion.a>
            <motion.a
              whileHover={{scale:1.2}}
              href="#projects"
              className='social-icon'
            >
                <FaTwitter/>

            </motion.a>
            <motion.a
              whileHover={{scale:1.2}}
              href="#projects"
              className='social-icon'
            >
                <FaInstagram/>

            </motion.a>

           
        </div>
        </div>

        <div className='hero-image'>
            <div className='image-container'>
                <img src="baby.jpg"></img>
            </div>
        </div>
    </section>
  )
}

export default Herp
