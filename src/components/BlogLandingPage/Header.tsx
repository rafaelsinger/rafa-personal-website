import React, {FC} from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Header: FC = () => {
  return (
    <nav className='landing-header'>
        <Link to='/' className='back-btn' ><FaArrowLeft className='back-btn btn' /></Link>
        <h2><Link to='/blog/home'>reviews by rafa</Link></h2>
        <div className='back-btn hide'><FaArrowLeft /></div>
    </nav>
  )
}

export default Header