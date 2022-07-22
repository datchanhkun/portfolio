import React, { useState, useCallback } from 'react'
import './index.css';
import Query from 'components/Query';
import CATEGORIES_QUERY from 'queries/categories/categories';
import FILTER_ARTICLE_BY_CATE_QUERY from 'queries/filterArticleByCat/filterArticleByCat';
import { useQuery } from "@apollo/client";
const CategoryList = ({ category }) => {
  const [activeIdx, setActiveIdx] = useState(null);
  const [active, setActive] = useState(false);
  const { data: articleFilter, refetch} = useQuery(FILTER_ARTICLE_BY_CATE_QUERY, 
    { variables: { category } }
  );
  if (articleFilter) {
    console.log("dataFilter", articleFilter);
  }

  const handleClickFilter = useCallback((name, index) => {
    refetch({ category: name });
    setActiveIdx(index);
    setActive(!active);
  },[setActiveIdx, active, refetch]);
  return (
    <div className='categories-list'>
      <Query query={CATEGORIES_QUERY} id={null}>
        {({ data: { categories } }) => {
          return (
            <>
              <div className='categories-title'>
                <h3>Search blog by topics</h3>
              </div>
              <div className='categories-listItem'>
                {categories.data.length > 0 && categories.data.map((cate, index) => (
                  <button
                    key={index.toString()}
                    onClick={() => handleClickFilter(cate.attributes.name, index)}
                    className={`${index === activeIdx ? active ?'categoryActiveIdx' : 'categoryNotActiveIdx': ''}`}
                  >
                    {`#${cate.attributes.name}`}
                  </button>
                ))}
              </div>
            </>
          )
        }}
      </Query>
    </div>
  )
}

export default CategoryList
