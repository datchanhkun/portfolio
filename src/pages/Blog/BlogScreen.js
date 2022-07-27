import React, { Suspense, useContext } from 'react'
import './BlogScreen.css'
import Loading from 'components/Loading/Loading'
import Navbar from 'components/Navbar/Navbar'
import Footer from 'components/Footer/Footer'
import BlogComponent from 'components/BlogComponent'
import ScrollToTop from 'components/ScrollToTop/ScrollToTop'
import SoundMusic from 'components/SoundMusic/SoundMusic'
import { Helmet } from 'react-helmet'
import { themeContext } from 'Context'

const BlogScreen = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <>
      <Helmet>
        <title>{`ThanhDatDev's Blog`}</title>
      </Helmet>
      <div className={`blog-screen ${darkMode ? 'blog-screen_light' : 'blog-screen_dark'}`}>
        <Suspense fallback={<Loading />}>
          <Navbar bg={`${darkMode ? 'var(--nav-color-main)' : 'var(--nav-color-dark)'}`}/>
          <BlogComponent />
        </Suspense>
      </div>
      <Footer animation={darkMode ? true : false} />
      <ScrollToTop />
      <SoundMusic />
    </>
  )
}

export default BlogScreen