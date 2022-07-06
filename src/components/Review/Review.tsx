import React, { ReactNode, useEffect, useState } from 'react'
import { Post } from '../../types'
import { useParams } from 'react-router-dom'
import { getReviewDetails } from '../../services';


const Review = () => {
    let { slug } = useParams();

    const [reviewDetails, setReviewDetails] = useState<Post | null>(null);

    useEffect(() => {
        const fetchReviewDetails = async (): Promise<Post> => {
            const review = await ((getReviewDetails(slug || '')) || []);
            setReviewDetails(review);
            return review;
        }

        fetchReviewDetails();
    }, [])

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
            return <p key={index} className="content-paragraph">{modifiedText.map((item:ReactNode, i:number) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
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

    console.log(reviewDetails);
    

  return (
    <>
        <div className='review-details-container'>
            {reviewDetails?.content.raw.children.map((typeObj:GenericObject, index: number) => {
                const children = typeObj.children.map((item:GenericObject, itemindex:number) => getContentFragment(itemindex, item.text, item));

                return getContentFragment(index, children, typeObj, typeObj.type);
            })}
        </div>
    </>
  )
}

export default Review