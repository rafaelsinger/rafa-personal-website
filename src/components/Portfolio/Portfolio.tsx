import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {RiGithubLine} from 'react-icons/ri'
import {GrLinkedinOption} from 'react-icons/gr'
import {IoMdDocument} from 'react-icons/io'
import ProjectCard from './ProjectCard'
import { projects } from './Projects'
import Skills from './Skills'
import Contact from './Contact'
import ContactDrawing from './ContactDrawing'

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
            <Link to="/reviews" className='link' reloadDocument>Reviews</Link>
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
        <h1 className='section-title'>About</h1>
          <div className='about-container'>
            <h2 className='about-header'>Hey 👋</h2>
            <p className='about-text-desc'>
            I'm Rafael Singer, a full-stack web developer currently studying computer science at Boston College. I'm passionate about creating engaging, performant, and accessible experiences on the web.
            </p>
            <p className='about-text'>
            When I'm not programming, you can find me reading a book, hitting the gym, or watching the NBA (Go Lakers).
            </p>
            <p className='about-text'>
            So, what are we building?
            </p>
          </div>
      </section>
      <section id='contact'>
        <h1 className='section-title'>Contact</h1>
        <div className='contact-box'>
          <ContactDrawing height={'40vh'} width={'40vw'} />
          <Contact />
        </div>
        <div className='footer'>
          <div className='mobile-links'>
            <a href='https://github.com/rafaelsinger' target='_blank' className='mobile-icon'><i id='github'><RiGithubLine size={50} /></i></a>
            <a href='https://www.linkedin.com/in/rafael-singer-62566618b/' target='_blank' className='mobile-icon'><i id='linkedin'><GrLinkedinOption size={50} /></i></a>
            <a href='/resume.pdf' download='Rafael Singer Resume' className='mobile-icon'><i id='resume'><IoMdDocument size={50} /></i></a>
          </div>
          <p className='copyright'>&copy; Rafael Singer 2022</p>
        </div>
      </section>
    </div>
  )
}

export default Portfolio