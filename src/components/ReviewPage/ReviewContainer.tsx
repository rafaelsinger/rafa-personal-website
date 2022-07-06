import React, {FC} from 'react'
import Navbar from '../Navbar'
import ReviewPage from './ReviewPage'

interface ReviewContainerProps {
    reviewType: string;
}

const ReviewContainer= ({reviewType}: ReviewContainerProps) => {

  return (
    <>
      <Navbar />
      <ReviewPage reviewType={reviewType} />
    </>
  )
}

export default ReviewContainer