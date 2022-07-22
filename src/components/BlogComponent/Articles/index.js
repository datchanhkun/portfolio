import React from 'react'
import Card from '../Card'
import './index.css'
import ARTICLES_QUERY from 'queries/articles/articles'
import Query from 'components/Query'

const Articles = () => {
  return (
    <div className='blog-articles'>
      <ul>
        <Query query={ARTICLES_QUERY}>
          {({ data: { articles } }) => (
            articles?.data?.map((info, index) => (
              <li key={index.toString()}>
                <Card
                  img={info.attributes.image.data.attributes.url}
                  slug={info.attributes.slug}
                  title={info.attributes.title}
                  date={info.attributes.updatedAt}
                  desc={info.attributes.description}
                  tags={info.attributes.categories.data}
                />
              </li>
            ))
          )}
        </Query>
      </ul>
    </div>
  )
}

export default Articles