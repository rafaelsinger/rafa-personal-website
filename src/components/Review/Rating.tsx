import React, { useEffect, useState } from 'react'

interface RatingProps {
    rating: number;
}

const Rating = ({rating}: RatingProps) => {
    const [ratingText, setRatingText] = useState<string>('');

    useEffect(() => {
        if (rating <= 4){
            setRatingText('bad');
        } else if (rating <= 6){
            setRatingText('okay');
        } else if (rating < 8){
            setRatingText('good');
        } else {
            setRatingText('amazing');
        }
    }, [])

  return (
    <div className={`review-details-rating ${ratingText}`}>{rating}</div>
  )
}

export default Rating