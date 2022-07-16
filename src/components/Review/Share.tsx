import React, { FC } from 'react'
import {FaFacebookSquare, FaTwitterSquare, FaEnvelope, FaRedditSquare} from "react-icons/fa";

interface ShareProps {
    title: string,
    artist: string
}

const Share:FC<ShareProps> = ({title, artist}) => {

    const urls: {[key:string]: string}= {
        'twitter' : `https://twitter.com/share?url=${window.location.href}&text=${artist} - ${title} REVIEW&via=rafaelsinger6`,
        'facebook' : `https://www.facebook.com/sharer.php?u=${window.location.href}`,
        'reddit' : `https://www.reddit.com/submit?url=${window.location.href}&title=${artist} - ${title} REVIEW` 
    }

    const handleShare = (platform: string): void => {
        const getUrl = <T extends object, U extends keyof T>(obj: T) => (key: U) => obj[key];
        const url = getUrl(urls)(platform);
        window.open(`${url}`, '_blank');
    }

  return (
    <div className='share-btn'>
        <div className='share-container'>
            <FaTwitterSquare className='social-icon' title='Twitter' fill='#1DA1F2' onClick={() => handleShare('twitter')} />
            <FaFacebookSquare className='social-icon' title='Facebook' fill='#4267B2' onClick={() => handleShare('facebook')} />
            <FaRedditSquare className='social-icon' title='Reddit' fill='#FF5700' onClick={() => handleShare('reddit')}/>
            <div className='social-icon'>
                <a className='email' href={`mailto:?subject=${artist} - ${title} REVIEW&body=${window.location.href}`} title="Email">
                    <FaEnvelope className='email' fill='#333' />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Share