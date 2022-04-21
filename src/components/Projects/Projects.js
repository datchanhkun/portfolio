import React from 'react'
import './Projects.css'
import { projects } from '../../data'
const Projects = () => {
  return (
    <div className='projects-wrapper'>
      <div className='projects-title'>
        Recent Projects
      </div>
      <div className='projects-cards'>
        {projects.map((p) => (
          <div className='project-card' key={p.id} style={{backgroundImage: `${p.backgroundColor}`}}>
          <img src={p.img} alt='ood' className='project-card-img' />
          <div className='project-card-content'>
            <div className='project-intro'>
              <p className='project-title'>{p.title}</p>
              <p className='project-desc'>{p.description}</p>
              <p className='project-time'>{p.time}</p>
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
            <div className='project-buttons'>
              <a href='##' className={p.github === '' ? 'disabled-wrapper' : 'externalLinkButton-wrapper'}>
                <button className={p.github === '' ? 'disabled-button' : 'externalLinkButton-button'}>
                  <span className='externalLinkButton-buttonContent'>
                    View source
                    <div className='arrow-animation'>
                      <svg fill="none" height="20" stroke="currentColor" strokeLinecap="square" strokeLinejoin="inherit" strokeWidth="1" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" className="externalLinkButton-Icon"><path d="M5 12h13M12 5l7 7-7 7"></path></svg>
                  </div>
                  </span>
                </button>
              </a>
              <a href='##' className={p.domain === '' ? 'disabled-wrapper' : 'externalLinkButton-wrapper'}>
                <button className={p.domain === '' ? 'disabled-button' : 'externalLinkButton-button'}>
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
