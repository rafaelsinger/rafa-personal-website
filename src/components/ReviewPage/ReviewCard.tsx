import React, { FC } from 'react'
import moment from 'moment';
import { Post } from '../../types';
import { Link } from 'react-router-dom';

type ReviewCardProps = {
    post: Post;
    category: string;
}

const ReviewCard: FC<ReviewCardProps> = ({post, category}) => {

    const date = moment(post.createdAt).format('MMM DD, YYYY')
    return (
        <div className='review-card' id={post.title}>
            <div>{post.title}</div>
            <div>{date}</div>
            <img src={post.featuredImage.url} className='review-image'></img>
            <Link to={`/reviews/${category}/${post.slug}`}>aaaa</Link>
        </div>
    )
}

export default ReviewCard