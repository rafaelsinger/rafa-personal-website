import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


const Portfolio = () => {
  useEffect(() => {
    document.title = 'Rafael Singer'
  }, [])

  /* <Link to='/reviews'><h2 className='reviews-link'>Go to Reviews</h2></Link> */
  return (
    <div className='wrapper'>
      <div className='col-white'></div>
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
    </div>
  )
}

export default Portfolio