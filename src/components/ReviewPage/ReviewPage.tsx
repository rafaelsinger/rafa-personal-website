import React, {FC, useEffect, useState} from 'react'
import Navbar from '../Navbar'
import { getPosts } from '../../services'
import ReviewCard from './ReviewCard';
import { Post } from '../../types';
import Search from './Search'
import SearchItem from './SearchItem';
import Loading from '../Loading';

interface ReviewPageProps {
    reviewType: string;
}

const ReviewPage:FC<ReviewPageProps> = ({reviewType}) => {

    const [posts, setPosts] = useState<Post[] | null>(null);
    const [filteredPosts, setFilteredPosts] = useState<Post[] | undefined>();

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchedReviews, setSearchedReviews] = useState<Post[] | undefined>();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    //setting icon active color
    useEffect(() => {
        // const category = window.location.pathname.split('/')[2];
        setActiveIcon();
        window.addEventListener('popstate', () => setActiveIcon());
    }, []);

    useEffect(() => {
        fetchPosts();
    }, [])

    useEffect(() => {
        getFilteredPosts();
    }, [reviewType])

    useEffect(() => {
        if (posts === null){
            fetchFilteredPosts();
        }
    }, [posts])

    useEffect(() => {
        const searchedReviews = filteredPosts?.filter(post => post.node.title.toLowerCase().includes(searchTerm.toLowerCase()));
        const searchBox = document.querySelector<HTMLElement>('.search-box');
        if (searchBox != undefined){
            searchBox.style.display = 'block';
        }
        setSearchedReviews(searchedReviews);
    }, [searchTerm])

    const getFilteredPosts = ():void => {
        const filteredPosts = posts?.filter((post: Post) => post.node.categories[0].slug === reviewType);
        setFilteredPosts(filteredPosts);
        setIsLoading(false);
    }

    const fetchFilteredPosts =  async (): Promise<void> => {
        setIsLoading(true);
        const posts = (await getPosts()) || [];
        const filteredPosts = posts?.filter((post: Post) => post.node.categories[0].slug === reviewType);
        setFilteredPosts(filteredPosts);
        setIsLoading(false);
    }
    
    const fetchPosts = async (): Promise<void> => {
        setIsLoading(true);
        const posts = (await getPosts()) || [];
        setPosts(posts);
    } 

    const setActiveIcon = (): void => {
        const currActive = document.getElementsByClassName('active');
        if (currActive.length > 0) {
            currActive[0].classList.remove('active');
        }
        const element = document.getElementById(reviewType);
        element?.classList.add('active');
    }

    return (
    <>
        {isLoading ? <Loading /> : <>
        <div className='review-header'>
            <div className='search-flex-container'>
                <Search />
                <input type="text" name='search' id="search-input" placeholder='Search...' onChange={(e) => setSearchTerm(e.target.value)} /> 
                <ul className='search-box'>
                    {searchTerm.length > 0 && searchedReviews?.map(review => (
                        <SearchItem title={review.node.title} searchTerm={searchTerm} category={reviewType} slug={review.node.slug} />
                    ))}
                </ul>
            </div>
            <div className='review-type'>{reviewType.toUpperCase()}</div>
            <div className='search-hide'><Search /></div>
        </div>
        <div className='seperator'></div>
        <div className='reviews-container'>
            {filteredPosts && filteredPosts.map((post) => (
                <ReviewCard post={post.node} category={reviewType} key={post.node.title} />
            ))}
        </div> </>}
    </>
  )
}

export default ReviewPage