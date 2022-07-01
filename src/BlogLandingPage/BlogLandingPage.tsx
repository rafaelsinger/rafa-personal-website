import React from 'react'
import Header from './Header'
import Medium from './Medium'

const LandingPage = () => {
  return (
    <div className='grid-container'>
        <Header />
        <Medium type={'music'} />
        <Medium type={"movies"} />
        <Medium type={'books'} />
        <Medium type={'television'} />
    </div>
  )
}

export default LandingPage