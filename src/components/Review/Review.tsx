import React, { ReactNode, useEffect, useState } from 'react'
import { Post } from '../../types'
import { useParams } from 'react-router-dom'
import { getReviewDetails } from '../../services';
import Loading from '../Loading';
import Rating from './Rating';
import moment from 'moment';
import Navbar from '../Navbar';
import Share from './Share';

interface ReviewProps {
    reviewType: string;
}


const Review = ({reviewType}: ReviewProps) => {
    let { slug } = useParams();

    const [reviewDetails, setReviewDetails] = useState<Post | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchReviewDetails = async (): Promise<Post> => {
            setIsLoading(true);
            const review = await ((getReviewDetails(slug || '')) || []);
            setReviewDetails(review);
            setIsLoading(false);
            return review;
        }

        fetchReviewDetails();
    }, []);

    useEffect(() => {
        const element = document.getElementById(reviewType);
        element?.classList.add('active');
    }, []);

    type GenericObject = { [key: string]: any };

    const getContentFragment = (index: number, text: any, obj: GenericObject, type?: string) => {
        let modifiedText = text;
    
        if (obj) {
        if (obj.bold) {
            modifiedText = (<b key={index}>{text}</b>);
        }
    
        if (obj.italic) {
            modifiedText = (<em key={index}>{text}</em>);
        }
    
        if (obj.underline) {
            modifiedText = (<u key={index}>{text}</u>);
        }
        }
    
        switch (type) {
        case 'heading-three':
            return <h3 key={index} className="content-heading-3">{modifiedText.map((item:ReactNode, i:number) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
        case 'paragraph':
            return <div className="content-paragraph">
                    <p key={index}>{modifiedText.map((item:ReactNode, i:number) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>
                    <br />
                </div>
        case 'heading-four':
            return <h4 key={index} className="content-heading-4">{modifiedText.map((item:ReactNode, i:number) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
        case 'image':
            return (
            <img
                key={index}
                alt={obj.title}
                height={obj.height}
                width={obj.width}
                src={obj.src}
            />
            );
        default:
            return modifiedText;
        }
    }

    // author: {name: 'Rafael Singer', id: 'cl52tboatiio00blroaed9kem'}
    // categories: [{…}]
    // content: {raw: {…}}
    // createdAt: "2022-07-04T07:54:30.400961+00:00"
    // excerpt: "\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur "
    // featuredImage: {url: 'https://media.graphassets.com/BRt9QwCRRuyzE3kKaRAL'}
    // rating: 8
    // slug: "kendrick-lamar-mr-morale-and-the-big-steppers"
    // title: "Kendrick Lamar - \"Mr. Morale & the Big Steppers"

    const reviewedAt = moment(reviewDetails?.createdAt).format('MMMM D, YYYY');

    
    let artist = reviewDetails?.title.split("-")[0];
    artist?.substring(0, artist.length-1);
    let title = reviewDetails?.title.split("-")[1].substring(1);
    
  return (
    <>
        <Navbar />
        {isLoading ? <Loading /> : <div className='review-details-container'>
            <h1 className='review-details-title'>{title}</h1>
            <h2 className='review-details-artist'>{artist}</h2>
            <div className='review-details-reviewed-at'>Reviewed: {reviewedAt}</div>
            <div className='review-details-rating-container'>
                <img src={reviewDetails?.featuredImage.url} className='review-details-image' />
                <Rating rating={reviewDetails?.rating} />
                <Share title={title ?? 'No Title'} artist={artist ?? 'No Artist'} />
            </div>
            <div className='text-container'>
                <div className='review-details-excerpt'>{reviewDetails?.excerpt}</div>
                {reviewDetails?.content.raw.children.map((typeObj:GenericObject, index: number) => {
                    const children = typeObj.children.map((item:GenericObject, itemindex:number) => getContentFragment(itemindex, item.text, item));

                    return getContentFragment(index, children, typeObj, typeObj.type);
                })}
            </div>
        </div>} 
    </>
  )
}

export default Review