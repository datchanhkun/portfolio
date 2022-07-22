import React from 'react'
import './index.css'
import dateIcon from '../../../assets/images/dateIcon.svg';
import moment from 'moment';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const {img, slug, title, date, desc, tags } = props;
  const URL_BACKEND = process.env.REACT_APP_BACKEND_URL;
  const [ copied, setCopied ] = useState(false);

  const handleClickCopy = () => {
    navigator.clipboard.writeText(`${URL_BACKEND}/blog/${slug}`);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }
  return (
    <Link to={`/blog/${slug}`}>
      <div className='article-card'>
        <div className='article-card_wrapper'>
          <button className='article-card_btnCopy' onClick={handleClickCopy}>{copied ? 'Copied' : 'Copy URL'}</button>
          <div className='article-card_img'>
            <img src={URL_BACKEND + img} alt="img-test" />
          </div>
          <div className='article-card_content'>
            <div className='article-card_content-info'>
              <div className='article-card_content-date'>
                <img src={dateIcon} alt="dateIcon" />
                <p>{moment(date).format('MMMM Do YYYY')}</p>
              </div>
              <h6>{title}</h6>
              <p>{desc}</p>
            </div>
            <div className='article-card_content-tags'>
              {
                tags.length > 0 && tags.map((tag, index) => (
                  <span key={index.toString()}>{`#${tag.attributes.name}`}</span>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card