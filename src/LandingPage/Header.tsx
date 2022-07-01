import React, {FC} from 'react'
import { FaArrowLeft } from 'react-icons/fa'

const Header: FC = () => {
  return (
    <div className='landing-header'>
        <FaArrowLeft className='back-btn' />
        <h2>reviews by rafa</h2>
        <div className='back-btn hide'><FaArrowLeft /></div>
    </div>
  )
}

export default Header