import React, { useEffect, useContext } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Projects.css'
import { projects } from '../../data'
import { themeContext } from '../../Context'
const Projects = (props) => {
  const {refScroll} = props;
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  useEffect(() => {
    AOS.init({
      once: true
    });
    AOS.refresh();
  }, []);
  return (
    <div className='projects-wrapper' ref={refScroll}>
      <div className='projects-title' data-aos="flip-right" data-aos-duration="2000">
        Recent Projects
      </div>
      <div className='projects-cards'>
        {projects.map((p) => (
          <div className={`project-card ${darkMode ? '' : 'project-dark'}`} key={p.id} style={{backgroundImage: `${darkMode ? p.backgroundColorLight : p.backgroundColorDark}`}} data-aos="slide-up" data-aos-duration="700">
          <img src={p.img} alt='ood' className={`project-card-img ${darkMode ? '' : 'project-card-img-dark'}`} />
          <div className='project-card-content'>
            <div className='project-intro'>
              <p className='project-title'>{p.title}</p>
              <p className='project-desc'>{p.description}</p>
              <p className={`project-time ${darkMode ? 'project-time-light' : 'project-time-dark'}`}>{p.time}</p>
            </div>
            <div className='project-frameworks'>
              {p.frameworks && p.frameworks.map((fr, index) => (
                <div className='framework' key={index}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="text-projecs-arrow"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                  <p>{fr}</p>
                </div>
              ))}
            </div>
            <div className={`project-buttons ${darkMode ? '' : 'project-buttons-dark'}`}>
              <a target="_blank" rel="noopener noreferrer" href={p.github} className={p.github === '' ? 'disabled-wrapper' : darkMode ? 'externalLinkButton-wrapper' : 'externalLinkButton-wrapper-dark'}>
                <button className={`${p.github === '' ? 'disabled-button' : darkMode ? 'externalLinkButton-button' : 'externalLinkButton-buttonDark'}`}>
                  <span className='externalLinkButton-buttonContent'>
                    View source
                    <div className='arrow-animation'>
                      <svg fill="none" height="20" stroke="currentColor" strokeLinecap="square" strokeLinejoin="inherit" strokeWidth="1" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" className="externalLinkButton-Icon"><path d="M5 12h13M12 5l7 7-7 7"></path></svg>
                  </div>
                  </span>
                </button>
              </a>
              <a target="_blank" rel="noopener noreferrer" href={p.domain} className={p.domain === '' ? 'disabled-wrapper' : darkMode ? 'externalLinkButton-wrapper' : 'externalLinkButton-wrapper-dark'}>
                <button className={`${p.domain === '' ? 'disabled-button' : darkMode ? 'externalLinkButton-button' : 'externalLinkButton-buttonDark'}`}>
                  <span className='externalLinkButton-buttonContent'>
                    Visit Website
                    <div className='arrow-animation'>
                      <svg fill="none" height="20" stroke="currentColor" strokeLinecap="square" strokeLinejoin="inherit" strokeWidth="1" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" className="externalLinkButton-Icon"><path d="M5 12h13M12 5l7 7-7 7"></path></svg>
                    </div>
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
        ))}

      </div>
    </div>
  )
}

export default Projects
