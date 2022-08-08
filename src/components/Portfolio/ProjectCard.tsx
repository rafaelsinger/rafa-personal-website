import React from 'react'
import { Project } from '../Portfolio/Projects';
import FadeInSection from '../FadeInSection';

interface ProjectCardProps{
    project: Project,
}

const ProjectCard = ({project}: ProjectCardProps) => {
  return (
    <>
        <FadeInSection>
            <div className='project-card'>
                <h1 className='project-title'>{project.name}</h1>
                <div className='project-tech-container'>
                    {project.tech.map(tech => (
                        <div className='project-tech'>{tech}</div>
                    ))}
                </div>
                <p className='project-desc'>{project.desc}</p>  
                <a href={`https://${project.webslug}`} target="_blank" className='project-img-link'>
                    <img className='project-img' src={`/imgs/projects/${project.slug}.jpg`} alt={`Screenshot of ${project.name}`} />
                </a>
                <div className='project-btns'>
                    <a href={`https://${project.webslug}`} target="_blank" className='project-card-btn'>See Live</a>
                    <a href={`https://github.com/rafaelsinger/${project.slug}`} target="_blank" className='project-card-btn'>Source Code</a>
                </div>
            </div>
        </FadeInSection>
    </>
  )
}

export default ProjectCard