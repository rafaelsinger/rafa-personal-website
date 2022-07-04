import React, { FC } from 'react'
import moment from 'moment';
import { Post } from '../../types';
import { Link } from 'react-router-dom';

type ReviewCardProps = {
    post: Post;
    category: string;
}

const ReviewCard: FC<ReviewCardProps> = ({post, category}) => {

    const date = moment(post.createdAt).format('MMMM D, YYYY') //potentially change to DD
    return (
        <Link to={`/reviews/${category}/${post.slug}`} className='test'>
            <div className='review-card' id={post.title}>
                <h3 className='review-title'>{post.title}</h3>
                <div className='review-date'>{date}</div>
                <img src={post.featuredImage.url} className='review-image'></img>
            </div>
        </Link>
    )
}

export default ReviewCard