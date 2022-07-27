import React, { useContext, useEffect, useState } from 'react'
import imgIntroBlog from '../../../assets/images/bg-intro-blog.svg'
import './index.css'
import { useLazyQuery } from '@apollo/client';
import SEARCH_ARTICLES from 'queries/searchArticles/searchArticles';
import SearchIconLight from 'assets/images/search-heart-light.svg';
import SearchIconDark from 'assets/images/search-heart-dark.svg';
import { themeContext } from 'Context';

const IntroBlog = (props) => {
  const [keyword, setKeyword] = useState("");
  const [searchArticles, { loading, error, data }] = useLazyQuery(SEARCH_ARTICLES);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode
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
        <div className={`intro-blog_left ${darkMode ? 'intro-blog_left_light' : 'intro-blog_left_dark'}`}>
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
            <button onClick={handleClickSearch}>
              {darkMode ? (
                <img src={SearchIconLight} alt='icon-search-light' />
              ): (
                <img src={SearchIconDark} alt='icon-search-dark' />
              )}
            </button>
          </div>
        </div>
        <div className='intro-blog_right'>
          <img src={imgIntroBlog} alt="imgIntroBlog" />
        </div>
    </div>
  )
}

export default IntroBlog
 