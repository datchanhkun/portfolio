import React, { useEffect, useContext } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './MySkills.css'
import Eclipse from '../../assets/images/Eclipse.svg'
import { skillList, abilitiesSkill } from '../../data'
import { themeContext } from '../../Context'
const MySkills = (props) => {
  const {refScroll} = props;
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true
    });
    AOS.refresh();
  }, []);
  return (
    <div className='mySkills' ref={refScroll}>
      <div className='skills-container'>
        <img src={Eclipse} alt='Eclipse' className='eclipse' />
        <span className={darkMode ? 'skill-title' : 'skill-title-dark'} >
          <span data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-duration="500">M</span>
          <span data-aos="fade-left" data-aos-delay="500" data-aos-easing="ease-in" data-aos-duration="500">y</span>
          <span>&nbsp;</span>
          <span data-aos="fade-left" data-aos-delay="1000" data-aos-easing="ease-in" data-aos-duration="500">S</span>
          <span data-aos="fade-left" data-aos-delay="1500" data-aos-easing="ease-in" data-aos-duration="500">k</span>
          <span data-aos="fade-left" data-aos-delay="1800" data-aos-easing="ease-in" data-aos-duration="500">i</span>
          <span data-aos="fade-left" data-aos-delay="2200" data-aos-easing="ease-in" data-aos-duration="500">l</span>
          <span data-aos="fade-left" data-aos-delay="2600" data-aos-easing="ease-in" data-aos-duration="500">l</span>
          <span data-aos="fade-left" data-aos-delay="3000" data-aos-easing="ease-in" data-aos-duration="500">s</span>
        </span>
        <div className='skill-wrapper'>
          <div className='skill-cards' data-aos="slide-up" data-aos-duration="1500">
            {skillList.map((skill) => (
              <div className={`skill-card ${darkMode ? 'skill-card-light' : 'skill-card-dark'}`} key={skill.id}>
                <div className='card'>
                  <img src={skill.img} alt={skill.title} />
                  <p>{skill.title}</p>
                </div>
              </div>
            ))}
          </div>
          <ul className='abilities-wrapper' data-aos="slide-left" data-aos-duration="1500">
          {abilitiesSkill.map((ability, index) => (
            <li key={index}>
              <div className={`ability-card ${darkMode ? 'ability-card-light' : 'ability-card-dark'}`}>
                <p>{ability}</p>
              </div>
            </li>
          ))}

          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default MySkills
