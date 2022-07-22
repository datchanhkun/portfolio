import React from 'react'
import imgIntroBlog from '../../../assets/images/bg-intro-blog.svg'
import './index.css'

const IntroBlog = () => {
  return (
    <div className='intro-blog'>
        <div className='intro-blog_left'>
          <h1>Find educational resources for React, Remix and more.</h1>
          <p>Tag along with me as I explore new tech and share my learning along the way!</p>
          <div className='intro-blog_inputSearch'>
            <input id="searchArticle" name="searchArticle" placeholder="Search Posts" />
          </div>
        </div>
        <div className='intro-blog_right'>
          <img src={imgIntroBlog} alt="imgIntroBlog" />
        </div>
    </div>
  )
}

export default IntroBlog
