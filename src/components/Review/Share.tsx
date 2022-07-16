import React, { FC } from 'react'
import {FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaSnapchatSquare} from "react-icons/fa";

interface ShareProps {
    title: string,
    artist: string
}

const Share:FC<ShareProps> = ({title, artist}) => {

    const iconStyles = {
        "width" : '45px',
        "height" : '45px'
    }

    const urls: {[key:string]: string}= {
        'twitter' : `https://twitter.com/share?url=${window.location.href}&text=${artist} - ${title} REVIEW&via=rafaelsinger6`,
        'facebook' : `https://www.facebook.com/sharer.php?u=${window.location.href}`,
        // 'snapchat' : 
    }

    const handleShare = (platform: string): void => {
        const getUrl = <T extends object, U extends keyof T>(obj: T) => (key: U) => obj[key];
        const url = getUrl(urls)(platform);
        window.open(`${url}`, '_blank');
    }

  return (
    <div className='share-btn'>
        <div className='share-container'>
            <FaTwitterSquare className='social-icon' style={iconStyles} fill='#1DA1F2' onClick={() => handleShare('twitter')} />
            <FaFacebookSquare className='social-icon' style={iconStyles} fill='#4267B2' onClick={() => handleShare('facebook')} />
            <FaInstagramSquare className='social-icon' style={iconStyles} fill='#C13584'/>
            <FaSnapchatSquare className='social-icon' style={iconStyles} fill='#f0ed00' onClick={() => handleShare('snapchat')}/>
            <div className="snapchat-creative-kit-share" data-text='false'></div>
        </div>
    </div>
  )
}

export default Share