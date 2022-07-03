import React, { DOMElement } from 'react'
import { Link } from 'react-router-dom'
import {FaHome, FaMusic, FaFilm, FaBook, FaTv} from 'react-icons/fa'

const Navbar = () => {
    const handleNavigate = (e:any) => {
        console.log(e.target.classList);
    }

    const setActive = (category: string) => {
        const currActive = document.getElementsByClassName('active');
        if (currActive.length > 0) {
            currActive[0].classList.remove('active');
        }
        const element = document.getElementById(category);
        element?.classList.add('active');
    }
  return (
    <nav className='main-header'>
        <div className='navbar-nav'>
            <div className='navbar-title'>
                <Link to='/reviews/home' title='Home'>
                    <h2 className='navbar-title-text'>reviews by rafa</h2>
                </Link>
            </div>
            <ul className='navbar-links'>
                <li className='navbar-item'>
                    <Link to='/reviews/home' title='Home' className='home navigate'>
                        <FaHome className='navbar-icon' />
                    </Link>
                </li>
                <li className='navbar-item'>
                    <Link to='/reviews/music' title='Music Reviews' onClick={() => setActive('music')}>
                        <FaMusic className='navbar-icon' id='music' />
                    </Link>
                </li>
                <li className='navbar-item'>
                    <Link to='/reviews/movies' title='Movie Reviews'>
                        <FaFilm className='navbar-icon' id='movies' onClick={() => setActive('movies')} />
                    </Link> 
                </li>
                <li className='navbar-item'>
                    <Link to='/reviews/books' title='Book Reviews'>
                        <FaBook className='navbar-icon ' id='books' onClick={() => setActive('books')} />
                    </Link> 
                </li>
                <li className='navbar-item'>
                    <Link to='/reviews/television' title='Television Reviews'>
                        <FaTv className='navbar-icon' id='television' onClick={() => setActive('television')} />
                    </Link> 
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar