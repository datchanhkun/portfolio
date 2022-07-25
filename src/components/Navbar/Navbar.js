import React, { useCallback, useContext, useEffect, useState } from 'react'
import './Navbar.css'
import toogleSun from '../../assets/images/sun.svg'
import toogleMoon from '../../assets/images/moon.svg'
import { themeContext } from '../../Context'
import Container from '../Container/Container'
import { Link } from 'react-router-dom'
import ShareIcon from 'assets/images/share.svg'
import Facebook from 'assets/images/facebook.svg'
import Instagram from 'assets/images/instagram.svg'
import Twitter from 'assets/images/twitter.svg'
import { FacebookShareButton } from 'react-share';
const Navbar = (props) => {
  const {gotoSkills, gotoProjects, gotoContact, bg, isScroll, scroll} = props
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const articleData = theme.state.article;

  const [openMenu, setOpenMenu] = useState(true)
  const [scrolling, setScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if(window.pageYOffset > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[])

  const handleClickMenu = useCallback(() => {
    setOpenMenu(!openMenu);
  },[openMenu])

  const changeDarkTheme = () => {
    theme.dispatch({type: 'toggle'});
  }

  return (
    <>
    <div className={`floating-header ${isScroll ? 'floating-header_active' : ''}`}>
      <div className='floating-header_left'>
        <Link to="/blog">
          <span className='floating-header_logo'>ThanhDatDev's Blog</span>
        </Link>
        <span className='floating-header-title'>—&nbsp;{articleData?.title}</span>
      </div>
      <div className='floating-header_right'>
        <span className='floating-header_label'>Share this</span>
        <div className='floating-header_icon'>
          <img src={ShareIcon} alt="share-icon" />
        </div>
        <div className='floating-header_social'>
          <div className='floating-header_facebook icon_social'>
            <FacebookShareButton
              url={"https://www.alissanguyen.dev/blog/introduction-to-web-hosting"}
              quote={articleData?.title}
              hashtag={"#thanhdatdev-blog"}
              description={articleData?.description}
            >
              <img src={Facebook} alt="socialFB" />
            </FacebookShareButton>
          </div>
          <div className='floating-header_instagram icon_social'>
            <img src={Instagram} alt="socialIns" />
          </div>
          <div className='floating-header_twitter icon_social'>
            <img src={Twitter} alt="socialTwitter" />
          </div>
        </div>
      </div>
      <div className='floating-header_line' style={{ width: `${scroll}%` }} />
    </div>
    <div style={{background: bg}} className={
      `nav-wrapper ${scrolling ? darkMode ? 'scrolling_light' : 'scrolling_dark' : ''} ${isScroll ? 'nav-wrapper_notActive' : 'nav-wrapper_active'}`
      }>
      <Container>
        <div className="nav-main">
          <div className={`nav-hamburger ${openMenu ? '' : 'openMenu'}`} onClick={handleClickMenu}>
            <div className='icon-left'></div>
            <div className='icon-right'></div>
          </div>
          <div className='nav-logo'>
            <div className='nav-name'>
              <a href='/'>
                Thanh Dat Dev
              </a>
            </div>
          </div>
          <div className={`nav-list nav-mobile${openMenu ? '' : ' nav-mobile-active'}`}>
            <ul onClick={handleClickMenu}>
              <li>
                <Link to="/blog" className='underlined'>Blog</Link>
              </li>
              <li>
                <Link to="/" className='underlined' onClick={gotoSkills}>Portfolio</Link>
              </li>
              <li>
                <Link to="/" className='underlined' onClick={gotoProjects}>Projects</Link>
              </li>
              <li>
                <Link to="/" className='underlined' onClick={gotoContact}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className='nav-toogle'>
            <button className={darkMode ? 'btn-toogle' : 'btn-toogle-dark'} onClick={changeDarkTheme}>
              {darkMode ? (
                <img src={toogleSun} alt="toogleSun" />
              ) : (
                <img src={toogleMoon} alt="toogleMoon" />
              )}
            </button>
          </div>
        </div>
      </Container>
    </div>
    </>

  )
}

export default Navbar
