import React, {FC} from 'react'
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

const SearchItem:FC<{title: string, searchTerm: string, category: string, slug: string}> = ({title, searchTerm, category, slug}) => {

    function modify(result: string, query: string) {
        var re = new RegExp(query.split("").map(function(x) { 
            return x.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); 
        }).join("[-\\s.]*"), 'ig');
        return result.replace(re, '<b>$&</b>');
      }

    let displayTitle = modify(title, searchTerm);

  return (
    <li className='search-item'>
        <Link to={`/reviews/${category}/${slug}`}>
        {parse(`${displayTitle}`)}
        </Link>
    </li>
  )
}

export default SearchItem