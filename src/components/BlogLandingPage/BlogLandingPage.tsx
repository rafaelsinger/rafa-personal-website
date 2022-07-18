import React, { useEffect } from 'react'
import Header from './Header'
import Medium from './Medium'

const LandingPage = () => {
  useEffect(() => {
    document.title = 'Reviews by Rafa';
  }, [])

  return (
    <div className='grid-landing'>
        <Header />
        <Medium type={'music'} />
        <Medium type={"movies"} />
        <Medium type={'books'} />
        <Medium type={'television'} />
    </div>
  )
}

export default LandingPage