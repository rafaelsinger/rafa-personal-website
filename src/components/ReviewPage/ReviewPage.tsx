import React, {FC, useEffect, useState} from 'react'
import Navbar from '../Navbar'
import { getPosts } from '../../services'
import ReviewCard from './ReviewCard';
import { Post } from '../../types';
import Search from './Search'
import SearchItem from './SearchItem';

const ReviewPage:FC<{reviewType:string}> = ({reviewType}) => {

    const [posts, setPosts] = useState<Post[] | null>(null);
    const [filteredPosts, setFilteredPosts] = useState<Post[] | undefined>();

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchedReviews, setSearchedReviews] = useState<Post[] | undefined>();

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
        setSearchedReviews(searchedReviews);
    }, [searchTerm])

    // node:
    // author: {name: 'Rafael Singer', id: 'cl52tboatiio00blroaed9kem'}
    // categories: [{…}]
    // createdAt: "2022-07-04T07:54:30.400961+00:00"
    // excerpt: "\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur "
    // featuredImage: {url: 'https://media.graphassets.com/BRt9QwCRRuyzE3kKaRAL'}
    // slug: "kendrick-lamar-mr-morale-and-the-big-steppers"
    // title: "Kendrick Lamar - \"Mr. Morale & the Big Steppers"

    

    const getFilteredPosts = ():void => {
        const filteredPosts = posts?.filter((post: Post) => post.node.categories[0].slug === reviewType);
        setFilteredPosts(filteredPosts);
    }

    const fetchFilteredPosts =  async (): Promise<void> => {
        const posts = (await getPosts()) || [];
        const filteredPosts = posts?.filter((post: Post) => post.node.categories[0].slug === reviewType);
        setFilteredPosts(filteredPosts);
    }
    
    const fetchPosts = async (): Promise<void> => {
        const posts = (await getPosts()) || [];
        setPosts(posts);
    } 

    return (
    <>
        <Navbar />
        <div className='review-header'>
            <div className='search-flex-container'>
                <Search />
                <input type="text" name='search' id="search-input" placeholder='Search...' onChange={(e) => setSearchTerm(e.target.value)} /> 
                <ul className='search-box'>
                    {searchedReviews?.map(review => (
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
        </div>
    </>
  )
}

export default ReviewPage