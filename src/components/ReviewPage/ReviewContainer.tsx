import React, {FC, useEffect} from 'react'
import Navbar from '../Navbar'
import ReviewPage from './ReviewPage'

interface ReviewContainerProps {
    reviewType: string;
}

const ReviewContainer= ({reviewType}: ReviewContainerProps) => {

  useEffect(() => {
    document.title = `${reviewType[0].toUpperCase() + reviewType.slice(1)} | Reviews by Rafa`
  }, [reviewType])

  return (
    <>
      <Navbar />
      <ReviewPage reviewType={reviewType} />
    </>
  )
}

export default ReviewContainer