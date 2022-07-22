import React from 'react'
import './index.css'
import ARTICLE_DETAIL_QUERY from 'queries/articleDetail/articleDetail'
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from "react-markdown";
import moment from 'moment';
import Query from 'components/Query';
import ArrowIcon from 'assets/images/arrowDark.svg';
import AuthorSection from '../AuthorSection';

const ArticleDetail = () => {
  let { slug } = useParams();
  return (
    <Query query={ARTICLE_DETAIL_QUERY} slug={slug}>
    {({ data: { articles } }) => {
      const { categories, content, image, title, createdAt, updatedAt } = articles.data[0].attributes;
      if (articles.data.length) {
        const imageUrl =
          process.env.NODE_ENV !== "development"
            ? image.data.attributes.url
            : process.env.REACT_APP_BACKEND_URL +
            image.data.attributes.url;

        return (
          <div className='u-container article-detail'>
            <div className='article-detail_indicator'>

            </div>
            <div className='article-detail_header'>
              <Link to="/blog">
                <div className='article-detail_back'>
                  <img src={ArrowIcon} alt="arrowIcon" />
                  <span>Go Back</span>
                </div>
              </Link>
            </div>
            <div className='article-detail_content'>
              <h1 className='article-detail_title'>{title}</h1>
              <div className='article-detail_time'>
                <span>Published on {moment(createdAt).format('MMMM Do YYYY')} </span>
                <span>Last updated on {moment(updatedAt).format('MMMM Do YYYY')}</span>
              </div>
              <div className='article-detail_banner'>
                <img src={imageUrl} alt="ArticleDetailImg" />
              </div>
              <div className='article-detail_contentMarkdown'>
                <ReactMarkdown children={content} />
                <div className='article-detail_tags'>
                  <span>Tags: </span>
                  {categories?.data?.map((item, index) => (
                    <div className='article-detail_tag' key={index}>
                      {item.attributes.name}
                    </div>
                  ))}
                </div>
                <AuthorSection />
              </div>
            </div>
          </div>
        );
      }
    }}
  </Query>
  )
}

export default ArticleDetail