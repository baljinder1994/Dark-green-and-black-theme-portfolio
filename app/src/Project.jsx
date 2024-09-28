import React from 'react'

const projectData=[
    {
        title:'Project One',
        description:'This is the first project',
        image:'baby.jpg'
    },
    {
        title:'Project One',
        description:'This is the first project',
        image:'baby.jpg'
    },
    {
        title:'Project One',
        description:'This is the first project',
        image:'baby.jpg'
    },
    {
        title:'Project One',
        description:'This is the first project',
        image:'baby.jpg'
    }
]
const Project = () => {
  return (
    <section className='projects'id="projects">
        <h2>My Projects</h2>
        <p>
            Here are some of my projects I've worked on.
        </p>
        <div className='projects-container'>
            {projectData.map((project,index) =>(
                <div key={index} className='project-card'>
                    <img src={project.image}></img>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a href="#" className='project-button'>
                        View Project
                    </a>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Project
