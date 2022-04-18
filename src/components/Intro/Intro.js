import React from 'react'
import './Intro.css';
import Avatar from '../../assets/images/avatar.png'

const Intro = () => {
  return (
    <div className='intro'>
        <div className='intro-left'>
          <div className='intro-name'>
            <span className='intro-name-welcome'>
              <span>Hi! </span>
              <span> I am </span>
              <span>Cao Thanh Dat 👋 </span>
            </span>
            <span>Welcome to my personal website!</span>
            <span>I enjoy building software that makes people's lives easier by writing elegant, performant, and maintainable frontend code.</span>
            <div className='intro-job'>
              <span>I'm a </span>
              <span className='blinker'>[</span>
              <ul className='intro-job-list'>
                <li>software engineer</li>
                <li>frontend developer</li>
                <li>travel blogger</li>
              </ul>
              <span className='blinker'>]</span>
            </div>

          </div>
          <button className='intro-button'>
            Download My Resume
          </button>
        </div>
        <div className='intro-right'>
            <img src={Avatar} alt='Avatar' />
        </div>
    </div>
  )
}

export default Intro