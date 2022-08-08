import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {RiGithubLine} from 'react-icons/ri'
import {GrLinkedinOption} from 'react-icons/gr'
import {IoMdDocument} from 'react-icons/io'
import ProjectCard from './ProjectCard'
import { projects } from './Projects'
import Skills from './Skills'

const Portfolio = () => {
  useEffect(() => {
    document.title = 'Rafael Singer'
  }, [])

  /* <Link to='/reviews'><h2 className='reviews-link'>Go to Reviews</h2></Link> */
  return (
    <div className='wrapper'>
      <div className='main-circle'></div>
      <div className='small-circle'></div>
      <div className='landing-wrapper'>
        <div className='col-white'>
          <div className='icon-container'>
            <a href='https://github.com/rafaelsinger' target='_blank' className='icon'><i id='github'><RiGithubLine size={50} /></i></a>
            <a href='https://www.linkedin.com/in/rafael-singer-62566618b/' target='_blank' className='icon'><i id='linkedin'><GrLinkedinOption size={50} /></i></a>
            <a href='/resume.pdf' download='Rafael Singer Resume' className='icon'><i id='resume'><IoMdDocument size={50} /></i></a>
          </div>
        </div>
        <div className='portfolio-container'>
          <h1 className='name'>Rafael Singer</h1>
          <h2 className='position'>Fullstack Web Developer</h2>
          <div className='section-links'>
            <a className='link' href="#projects"><div>Projects</div></a>
            <a className='link' href="#skills">Skills</a>
            <a className='link' href="#about">About</a>
            <Link to="/reviews" className='link'>Reviews</Link>
            <a className='link' href="#contact">Contact</a>
          </div>
      </div>
      </div>
      <section id='projects'>
        <h1 className='section-title'>Projects</h1>
        {projects.map((project, id) => (
            <ProjectCard key={id} project={project} />
        ))}
      </section>
      <section id='skills'>
        <h1 className='section-title'>Skills</h1>
        <Skills />
      </section>
      <section id='about'>
          about here
      </section>
      <section id='contact'>
          contact here
      </section>
    </div>
  )
}

export default Portfolio