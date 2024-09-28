import React, { useState } from 'react'
import {motion} from 'framer-motion'
const Header = () => {
    const[isOpen,setIsOpen]=useState(false)

    const toggleMenu=()=>{
        setIsOpen(!isOpen)
    }
  return (
   <nav className='navbar'>
    <div className='hamburger' onClick={toggleMenu}>
        <span className={isOpen ? 'line line1 open' : "line line1"}></span>
        <span className={isOpen ? 'line line2 open' : "line line2"}></span>
        <span className={isOpen ? 'line line3 open' : "line line3"}></span>
    </div>
    <motion.ul
      className={`nav-links ${isOpen ? 'open': ''}`}
      initial={{y:-250}}
      animate={{y:0}}
      transition={{type:'spring',stiffness:120}}
      >
        <motion.li
          whileHover={{scale:1.2, color:'#00ff00'}}
          whileTap={{scale:0.9}}
        >
           <a href="#home">Home</a>
        </motion.li>
        <motion.li
          whileHover={{scale:1.2, color:'#00ff00'}}
          whileTop={{scale:0.9}}
        >
           <a href="#about">About</a>
        </motion.li>
        <motion.li
          whileHover={{scale:1.2, color:'#00ff00'}}
          whileTop={{scale:0.9}}
        >
           <a href="#projects">Projects</a>
        </motion.li>
        <motion.li
          whileHover={{scale:1.2, color:'#00ff00'}}
          whileTop={{scale:0.9}}
        >
           <a href="#skills">Skills</a>
        </motion.li>
        <motion.li
          whileHover={{scale:1.2, color:'#00ff00'}}
          whileTop={{scale:0.9}}
        >
           <a href="#contact">Contact</a>
        </motion.li>
      </motion.ul>
   </nav>
  )
}

export default Header
