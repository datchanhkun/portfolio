import React, { Suspense } from 'react'
import './BlogScreen.css'
import Loading from 'components/Loading/Loading'
import Navbar from 'components/Navbar/Navbar'
const BlogScreen = () => {
  return (
    <div className='blog-screen'>
      <Suspense fallback={<Loading />}>
        <Navbar bg={'black'}/>

      </Suspense>
    </div>
  )
}

export default BlogScreen