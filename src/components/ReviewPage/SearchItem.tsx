import React, {FC} from 'react'
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

const SearchItem:FC<{title: string, searchTerm: string, category: string, slug: string}> = ({title, searchTerm, category, slug}) => {

    const boldQuery = (str: string, query: string) => {
        const n = str.toUpperCase();
        const q = query.toUpperCase();
        const x = n.indexOf(q);
        if (!q || x === -1) {
            return str; // bail early
        }
        const l = q.length;
        return str.substring(0, x) + '<b>' + str.substring(x, l) + '</b>' + str.substring(x + l);
    }

    const displayTitle = boldQuery(title, searchTerm);

  return (
    <li className='search-item'>
        <Link to={`/reviews/${category}/${slug}`}>
        {parse(`${displayTitle}`)}
        </Link>
    </li>
  )
}

export default SearchItem