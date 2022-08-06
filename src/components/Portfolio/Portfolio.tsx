import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {RiGithubLine} from 'react-icons/ri'
import {GrLinkedinOption} from 'react-icons/gr'
import {IoMdDocument} from 'react-icons/io'



const Portfolio = () => {
  useEffect(() => {
    document.title = 'Rafael Singer'
  }, [])

  /* <Link to='/reviews'><h2 className='reviews-link'>Go to Reviews</h2></Link> */
  return (
    <div className='wrapper'>
      <div className='main-circle'></div>
      <div className='small-circle'></div>
      <div className='col-white'></div>
        <div className='icon-container'>
          <i className='icon' id='github'><RiGithubLine size={50} /></i>
          <i className='icon' id='linkedin'><GrLinkedinOption size={50} /></i>
          <i className='icon' id='resume'><IoMdDocument size={50} /></i>
        </div>
      <div className='portfolio-container'>
        <h1 className='name'>Rafael Singer</h1>
        <h2 className='position'>Fullstack Web Developer</h2>
        <div className='section-links'>
          <a className='link' href="#projects">Projects</a>
          <a className='link' href="#skills">Skills</a>
          <a className='link' href="#about">About</a>
          <Link to="/reviews" className='link'>Reviews</Link>
          <a className='link' href="#contact">Contact</a>
        </div>
      </div>
      <section id='projects'>
          projects here
      </section>
      <section id='skills'>
          skills here
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