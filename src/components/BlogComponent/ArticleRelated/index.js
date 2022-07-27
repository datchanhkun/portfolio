import ARTICLE_DETAIL_QUERY from 'queries/articleDetail/articleDetail';
import React, { useContext } from 'react'
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import Slider from "react-slick";
import Card from '../Card';
import './index.css'
import { themeContext } from 'Context';
const ArticleRelated = () => {
  let { slug } = useParams();
  const { data: articles } = useQuery(ARTICLE_DETAIL_QUERY);
  const dataRelated = articles?.articles?.data.filter(artile => artile.attributes.slug !== slug);
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  const settings = {
    dots: true,
    autoplay: false,
    autoplayTimeout: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 739,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className={`u-container article-related ${darkMode ? 'article-related_light' : 'article-related_dark'}`}>
      <h1 style={{textAlign: 'center'}}>Post Related</h1>
      <div className='article-related_list'>
        <Slider {...settings}>
          {dataRelated?.map((data, idx) => (
            <div className='article-related_card' key={idx}>
              <Card
                img={data.attributes.image.data.attributes.url}
                slug={data.attributes.slug}
                title={data.attributes.title}
                date={data.attributes.updatedAt}
                desc={data.attributes.description}
                tags={data.attributes.categories.data}
              />
            </div>
          ))}
        </Slider>  
      </div>
    </div>
  ) 
}

export default ArticleRelated