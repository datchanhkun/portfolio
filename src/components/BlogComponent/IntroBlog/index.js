import React, { useEffect, useState } from 'react'
import imgIntroBlog from '../../../assets/images/bg-intro-blog.svg'
import './index.css'
import { useLazyQuery } from '@apollo/client';
import SEARCH_ARTICLES from 'queries/searchArticles/searchArticles';

const IntroBlog = (props) => {
  const [keyword, setKeyword] = useState("");
  const [searchArticles, { loading, error, data }] = useLazyQuery(SEARCH_ARTICLES);

  const handleClickSearch = () => {
    searchArticles({variables: { keyword }});
  }

  useEffect(() => {
    const sendDataSearch = () => {
      props.getDataSearch(data);
    }
    const sendIsSearch = () => {
      if(keyword) {
        props.getIsSearch(true);
      } else {
        props.getIsSearch(false);
      }
    }
    if (data) {
      sendDataSearch();
    }
    sendIsSearch();
  },[data, props, keyword])

  if (loading) return <p>Loading ...</p>;
  if (error) return `Error! ${error}`;

  return (
    <div className='intro-blog'>
        <div className='intro-blog_left'>
          <h1>Find educational resources for React, Remix and more.</h1>
          <p>Tag along with me as I explore new tech and share my learning along the way!</p>
          <div className='intro-blog_inputSearch'>
            <input
              id="searchArticle"
              name="searchArticle"
              placeholder="Search Posts"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>
          <button onClick={handleClickSearch}>
          Tìm
        </button>
        </div>
        <div className='intro-blog_right'>
          <img src={imgIntroBlog} alt="imgIntroBlog" />
        </div>
    </div>
  )
}

export default IntroBlog
 