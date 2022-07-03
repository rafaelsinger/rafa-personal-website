import React, {FC} from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Header: FC = () => {
  return (
    <nav className='landing-header'>
        <FaArrowLeft className='back-btn' />
        <h2><Link to='/blog/home'>reviews by rafa</Link></h2>
        <div className='back-btn hide'><FaArrowLeft /></div>
    </nav>
  )
}

export default Header