import React, { useCallback, useState } from 'react'
import './index.css'
import CategoryList from './CategoriesList'
import IntroBlog from './IntroBlog'
import Articles from './Articles'

const BlogComponent = () => {
  const [searchData, setSearchData] = useState(null);
  const [isSearch, setIsSearch] = useState(false);
  const getDataSearch = useCallback((data) => {
    setSearchData(data);
  },[setSearchData])

  const getIsSearch = (search) => {
    setIsSearch(search);
  }

  return (
    <div className='u-container blog-content'>
      <IntroBlog getDataSearch={getDataSearch} getIsSearch={getIsSearch} />
      <CategoryList />
      <Articles searchData={searchData?.articles?.data} isSearch={isSearch} />
    </div>
  )
}

export default BlogComponent
