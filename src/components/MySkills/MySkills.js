import React from 'react'
import './MySkills.css'
import Eclipse from '../../assets/images/Eclipse.svg'
import { skillList, abilitiesSkill } from '../../data'
const MySkills = () => {
  return (
    <div className='mySkills'>
      <div className='skills-container'>
        <img src={Eclipse} alt='Eclipse' className='eclipse' />
        <span className='skill-title'>
          <span>M</span>
          <span>y</span>
          <span>&nbsp;</span>
          <span>S</span>
          <span>k</span>
          <span>i</span>
          <span>l</span>
          <span>l</span>
          <span>s</span>
        </span>
        <div className='skill-wrapper'>
          <div className='skill-cards'>
            {skillList.map((skill) => (
              <div className='skill-card' key={skill.id}>
                <div className='card'>
                  <img src={skill.img} alt={skill.title} />
                  <p>{skill.title}</p>
                </div>
              </div>
            ))}
          </div>
          <ul className='abilities-wrapper'>
          {abilitiesSkill.map((ability, index) => (
            <li key={index}>
              <div className='ability-card'>
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