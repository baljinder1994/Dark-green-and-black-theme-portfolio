import React from 'react'
import {FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaReact} from 'react-icons/fa'
import {motion} from 'framer-motion'
const Skills = () => {
    const skillsData=[
        {name:'JavasCript',level:90,icon:<FaJs/>},
        {name:'React',level:85,icon:<FaReact/>},
        {name:'Node.js',level:80,icon:<FaNodeJs/>},
        {name:'HTML5',level:60,icon:<FaHtml5/>},
        {name:'CSS3',level:80,icon:<FaCss3Alt/>},

    ];
  return (
    <section className='skills'>
        <h2>My Skills</h2>
        <p>
            I have honed my skills in various programming languages and frameworks. Here are some of the technologies I am proficient in:
        </p>
        <div className='skills-container'>
            {skillsData.map(skill=>(
                <div key={skill.name} className='skill-item'>
                     <div className='skill-icon'>{skill.icon}</div>
                    <span className='skill-name'>{skill.name}</span>
                <motion.div
                  className="skill-bar"
                  initial={{width:0}}
                  animate={{width:` ${skill.level}%`}}
                  transition={{duration:1}}
                >

                </motion.div>
                <span className='skill-level'>{skill.level}</span>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Skills
