import ArticleDetail from 'components/BlogComponent/ArticleDetail';
// import ArticleRelated from 'components/BlogComponent/ArticleRelated';
import Footer from 'components/Footer/Footer';
import Navbar from 'components/Navbar/Navbar';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';
import SoundMusic from 'components/SoundMusic/SoundMusic';
import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import './ArticleDetailScreen.css';
const ArticleDetailScreen = () => {
  const [scroll, setScroll] = useState(0);
  const refPageYOffset = useRef(0);
  const [isScroll, setIsScroll] = useState(false);
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
      <div className='blog-detail-screen' >
          <Navbar bg={'black'} isScroll={isScroll} scroll={scroll}/>
          <ArticleDetail />
          {/* <ArticleRelated /> */}
      </div>
      <Footer animation={true} />
      <ScrollToTop />
      <SoundMusic />
    </>
  )
}

export default ArticleDetailScreen