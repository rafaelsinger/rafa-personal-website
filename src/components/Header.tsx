import React from 'react'
import {FaHome, FaMusic, FaFilm, FaBook, FaTv} from 'react-icons/fa'

const Header = () => {
  return (
    <nav className='main-header'>
        <div className='navbar-title'>
            <a href='/blog/home'>
                <h2 className='navbar-title-text'>reviews by rafa</h2>
            </a>
        </div>
        <ul className='navbar-links'>
            <li className='navbar-item'>
                <a href='/blog/home'>
                    <FaHome className='navbar-icon' />
                </a>
            </li>
            <li className='navbar-item'>
                <a href='/blog/music'>
                    <FaMusic className='navbar-icon' />
                    <div className='navbar-text'>MUSIC</div>
                </a> 
            </li>
            <li className='navbar-item'>
                <a href='/blog/movies'>
                    <FaFilm className='navbar-icon' />
                    <div className='navbar-text'>MOVIES</div>    
                </a> 
            </li>
            <li className='navbar-item'>
                <a href='/blog/books'>
                    <FaBook className='navbar-icon' />
                    <div className='navbar-text'>BOOKS</div>    
                </a> 
            </li>
            <li className='navbar-item'>
                <a href='/blog/television'>
                    <FaTv className='navbar-icon' />
                    <div className='navbar-text'>TELEVISION</div>    
                </a> 
            </li>
        </ul>
    </nav>
  )
}

export default Header