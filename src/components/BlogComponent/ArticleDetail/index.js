import React, { useContext, useEffect, useMemo } from 'react'
import './index.css'
import ARTICLE_DETAIL_QUERY from 'queries/articleDetail/articleDetail'
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from "react-markdown";
import moment from 'moment';
import ArrowIcon from 'assets/images/arrowDark.svg';
import AuthorSection from '../AuthorSection';
import { themeContext } from 'Context';
import { useQuery } from '@apollo/client';
import { Helmet } from 'react-helmet';

const ArticleDetail = () => {
  let { slug } = useParams();
  const theme = useContext(themeContext);
  const { data: articles } = useQuery(ARTICLE_DETAIL_QUERY, {variables: { slug }});
  const props = useMemo(() => {
    return articles?.articles?.data[0]?.attributes;
  },[articles]);

  const imageUrl =
  process.env.NODE_ENV !== "development"
    ? props?.image.data.attributes.url
    : process.env.REACT_APP_BACKEND_URL +
    props?.image.data.attributes.url;
  useEffect(() => {
    theme.dispatch({type: 'titleArticle', payload: articles?.articles?.data[0].attributes.title})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[articles])
  return (
    <>
      <Helmet>
        <title>{`${articles?.articles?.data[0].attributes.title} | ThanhDatDev's Blog`}</title>
      </Helmet>
      <div className='u-container article-detail'>
        <div className='article-detail_header'>
          <Link to="/blog">
            <div className='article-detail_back'>
              <img src={ArrowIcon} alt="arrowIcon" />
              <span>Go Back</span>
            </div>
          </Link>
        </div>
        <div className='article-detail_content'>
          <h1 className='article-detail_title'>{props?.title}</h1>
          <div className='article-detail_time'>
            <span>Published on {moment(props?.createdAt).format('MMMM Do YYYY')} </span>
            <span>Last updated on {moment(props?.updatedAt).format('MMMM Do YYYY')}</span>
          </div>
          <div className='article-detail_banner'>
            <img src={imageUrl} alt="ArticleDetailImg" />
          </div>
          <div className='article-detail_contentMarkdown'>
            <ReactMarkdown children={props?.content} />
            <div className='article-detail_tags'>
              <span>Tags: </span>
              {props?.categories?.data?.map((item, index) => (
                <div className='article-detail_tag' key={index}>
                  {item.attributes.name}
                </div>
              ))}
            </div>
            <AuthorSection />
          </div>
        </div>
      </div>
    </>
  )
}

export default ArticleDetail