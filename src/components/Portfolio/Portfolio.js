import React, { useEffect, useContext } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Portfolio.css'
import { themeContext } from '../../Context'
const Portfolio = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
    AOS.refresh();
  }, []);
  return (
    <div className='portfolio-wrapper' style={{color: `${darkMode ? 'black' : 'white'}`}}>
      <div className='portfolio-intro'>
        <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" className="portfolio-intro-svg">
          <defs>
            <radialGradient id="Gradient1" cx="50%" cy="50%" fx="10%" fy="50%" r=".5">
              <animate attributeName="fx" dur="34s" values="0%;10%;0%" repeatCount="indefinite"></animate>
              <stop offset="0%" stopColor="#00aeef"></stop>
              <stop offset="100%" stopColor="#00aeef00"></stop>
            </radialGradient>
            <radialGradient id="Gradient2" cx="50%" cy="50%" fx="10%" fy="50%" r=".5">
              <animate attributeName="fx" dur="23.5s" values="0%;10%;0%" repeatCount="indefinite"></animate>
              <stop offset="0%" stopColor="#ec008c"></stop>
              <stop offset="100%" stopColor="#ec008c00"></stop>
            </radialGradient>
            <radialGradient id="Gradient3" cx="50%" cy="50%" fx="50%" fy="50%" r=".5">
              <animate attributeName="fx" dur="21.5s" values="0%;10%;0%" repeatCount="indefinite"></animate>
              <stop offset="0%" stopColor="#fff200"></stop>
              <stop offset="100%" stopColor="#fff20000"></stop>
            </radialGradient>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient1)">
            <animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite"></animate>
            <animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite"></animate>
            <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="17s" repeatCount="indefinite"></animateTransform>
          </rect>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient2)">
            <animate attributeName="x" dur="23s" values="-25%;0%;-25%" repeatCount="indefinite"></animate>
            <animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite"></animate>
            <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="18s" repeatCount="indefinite"></animateTransform>
          </rect>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient3)">
            <animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite"></animate>
            <animate attributeName="y" dur="26s" values="0%;25%;0%" repeatCount="indefinite"></animate>
            <animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="19s" repeatCount="indefinite"></animateTransform>
          </rect>
        </svg>
        <div className='spacer-div1'></div>
        <div className='portfolio-intro-text'>
          <span data-aos="fade-right">Learn.</span>
          <span data-aos="fade-up" data-aos-delay="300">Code.</span>
          <span data-aos="fade-left" data-aos-delay="600">Travel.</span>
        </div>
      </div>
      <div className='portfolio-floating'>
        <div className='portfolio-floating-title'>
          <span>P</span>
          <span>O</span>
          <span>R</span>
          <span>T</span>
          <span>F</span>
          <span>O</span>
          <span>L</span>
          <span>I</span>
          <span>O</span>
        </div>
      </div>
      <div className='spacer-div'></div>
    </div>
  )
}

export default Portfolio