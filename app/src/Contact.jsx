import React from 'react'
import {motion} from 'framer-motion'
const Contact = () => {
  return (
    <section id="contact" className='contact'>
        <div className='contact-container'>
            <motion.h2
              initial={{opacity:0,y:-20}}
              animate={{opacity:1,y:0}}
              transition={{duration:0.5}}
            >
               Get In Touch
            </motion.h2>
            <motion.form
              initial={{opacity:0,y:20}}
              animate={{opacity:1,y:0}}
              transition={{duration:0.5}}
              className='contact-form'
            >
                <input type="text" placeholder='Your Name'></input>
                <input type="email" placeholder='Your Email'></input>
                <textarea placeholder='Your Message' rows="5"></textarea>
                <motion.button
                
                 whileHover={{scale:1.1}}
                 whileTap={{scale:0.9}}
                >Send Message</motion.button>


            </motion.form>
        </div>
    </section>
  )
}

export default Contact
