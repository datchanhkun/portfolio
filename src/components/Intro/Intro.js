import React, { useEffect, useContext } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Intro.css';
import Avatar from '../../assets/images/avatar.png'
import { themeContext } from '../../Context'
import CV from '../../assets/files/CV_CaoThanhDat.pdf'
const Intro = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className={`stripes ${darkMode ? 'theme-light' : 'theme-dark'}`}></div>
      <div className='intro'>
          <div className='intro-left'>
            <div className='intro-name'>
              <span className='intro-name-welcome' >
                <span>Hi! </span>
                <span data-aos="fade-right" > I am </span>
                <span data-aos="fade-right" data-aos-delay="300">Cao Thanh Dat 👋</span>
              </span>
              <span data-aos="fade-up" data-aos-easing="ease-in" data-aos-duration="1500">Welcome to my personal website!</span>
              <span data-aos="fade-up" data-aos-easing="ease-in" data-aos-duration="1500">I enjoy building software that makes people's lives easier by writing elegant, performant, and maintainable frontend code.</span>
              <div className='intro-job' data-aos="fade-up" data-aos-easing="ease-in" data-aos-duration="1500">
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
            <a href={CV} download >
              <button className='intro-button' data-aos="fade-up" data-aos-easing="ease-in" data-aos-duration="1500">
                Download My Resume
              </button>
            </a>
          </div>
          <div className={`intro-right ${darkMode ? 'intro-right-light' : 'intro-right-dark'}`}>
              <img src={Avatar} alt='Avatar' />
          </div>
      </div>
    </>
  )
}

export default Intro
