import React, {useState, useEffect, useRef} from 'react'
import { Project } from '../Portfolio/Projects';
import FadeInSection from '../FadeInSection';

interface ProjectCardProps{
    project: Project,
}


const ProjectCard = ({project}: ProjectCardProps) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef<any>();
    
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(entry.isIntersecting);
                }
            });
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current)
    }, []);
  return (
    <>
        <div className={`project-card fade-in-section ${isVisible ? 'is-visible' : ''}` } ref={domRef}>
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
    </>
  )
}

export default ProjectCard