import React, { Suspense } from 'react'
import './BlogScreen.css'
import Loading from 'components/Loading/Loading'
import Navbar from 'components/Navbar/Navbar'
import Footer from 'components/Footer/Footer'
import BlogComponent from 'components/BlogComponent'
import ScrollToTop from 'components/ScrollToTop/ScrollToTop'
import SoundMusic from 'components/SoundMusic/SoundMusic'

const BlogScreen = () => {
  return (
    <>
      <div className='blog-screen'>
        <Suspense fallback={<Loading />}>
          <Navbar bg={'black'}/>
          <BlogComponent />
        </Suspense>
      </div>
      <Footer animation={true} />
      <ScrollToTop />
      <SoundMusic />
    </>
  )
}

export default BlogScreen