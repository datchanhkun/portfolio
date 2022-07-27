import ArticleDetail from 'components/BlogComponent/ArticleDetail';
import ArticleRelated from 'components/BlogComponent/ArticleRelated';
import Footer from 'components/Footer/Footer';
import Navbar from 'components/Navbar/Navbar';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';
import SoundMusic from 'components/SoundMusic/SoundMusic';
import { themeContext } from 'Context';
import React, { useContext, useRef, useState } from 'react'
import { useEffect } from 'react';
import './ArticleDetailScreen.css';
const ArticleDetailScreen = () => {
  const [scroll, setScroll] = useState(0);
  const refPageYOffset = useRef(0);
  const [isScroll, setIsScroll] = useState(false);
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  useEffect(() => {
    const handleScroll = () => {
      const Scrolled = document.documentElement.scrollTop;
      const MaxHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const ScrollPercent = (Scrolled / MaxHeight) * 100;
      setScroll(ScrollPercent);
      if (window.pageYOffset > 120) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
      refPageYOffset.current = window.pageYOffset;
      
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`blog-detail-screen ${darkMode ? 'blog-detail-screen_light' : 'blog-detail-screen_dark'}`} >
          <Navbar bg={`${darkMode ? 'var(--nav-color-main)' : 'var(--nav-color-dark)'}`} isScroll={isScroll} scroll={scroll}/>
          <ArticleDetail />
      </div>
      <ArticleRelated />
      <Footer animation={darkMode ? true : false} />
      <ScrollToTop />
      <SoundMusic />
    </>
  )
}

export default ArticleDetailScreen