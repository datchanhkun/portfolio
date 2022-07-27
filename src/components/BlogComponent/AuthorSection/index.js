import React, { useContext } from 'react'
import './index.css'
import AuthorAvatar from 'assets/images/ellipse2.svg'
import AuthorIcon from 'assets/images/arrowDark.svg';
import { Link } from 'react-router-dom';
import { themeContext } from 'Context';
const AuthorSection = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className='author-section'>
      <div className='author-section_avatar'>
        <img src={AuthorAvatar} alt="authorAvatar" />
      </div>
      <div className='author-section_biography'>
        <h6>Written by Cao Thanh Dat</h6>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
      </div>
      <Link to="/">
        <div className={`author-section_about ${darkMode ? 'author-section_about_light' : 'author-section_about_dark'}`}>
          <span>Learn more about me</span>
          <div className='author-section_icon'>
            <img src={AuthorIcon} alt="authorIcon" />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default AuthorSection