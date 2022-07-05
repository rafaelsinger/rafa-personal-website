import React, {FC, useEffect, useState} from 'react'
import Navbar from '../Navbar'
import { getPosts } from '../../services'
import ReviewCard from './ReviewCard';
import { Post } from '../../types';
import Search from './Search'

const ReviewPage:FC<{reviewType:string}> = ({reviewType}) => {

    const [posts, setPosts] = useState<Post[] | null>(null);
    const [filteredPosts, setFilteredPosts] = useState<Post[] | undefined>();

    useEffect(() => {
        const category = window.location.pathname.split('/')[2];
        const currActive = document.getElementsByClassName('active');
        if (currActive.length > 0) {
            currActive[0].classList.remove('active');
        }
        const element = document.getElementById(category);
        element?.classList.add('active');
    }, []);

    useEffect(() => {
        const fetchPosts = async (): Promise<Post[]> => {
            const posts = (await getPosts()) || [];
            setPosts(posts);
            return posts;
        } 

        fetchPosts();

    }, [])

    
    useEffect(() => {
        console.log(reviewType);
        const filteredPosts = posts?.filter((post: Post) => post.node.categories[0].slug === reviewType);
        setFilteredPosts(filteredPosts);
    }, [reviewType])

    return (
    <>
        <Navbar />
        <div className='review-header'>
            <div className='search-flex-container'>
                <Search />
                <input type="text" name='search' id="search-input" /> 
            </div>
            <div className='review-type'>{reviewType.toUpperCase()}</div>
            <div className='search-hide'><Search /></div>
        </div>
        <div className='seperator'></div>
        <div className='reviews-container'>
            {filteredPosts && filteredPosts.map((post) => (
                <ReviewCard post={post.node} category={reviewType} key={post.node.title} />
            ))}
        </div>
    </>
  )
}

export default ReviewPage