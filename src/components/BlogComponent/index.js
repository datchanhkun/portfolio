import React from 'react'
import './index.css'
import CategoryList from './CategoriesList'
import IntroBlog from './IntroBlog'
import Articles from './Articles'

const BlogComponent = () => {
  return (
    <div className='u-container blog-content'>
      <IntroBlog />
      <CategoryList />
      <Articles />
    </div>
  )
}

export default BlogComponent
