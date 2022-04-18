import React from 'react'
import './Navbar.css'
import toogleSun from '../../assets/images/sun.svg'
const Navbar = () => {
  return (
    <>
      <div className='nav-wrapper'>
        <div className='nav-logo'>
          <div className='nav-name'>Thanh Dat Dev</div>
        </div>
        <div className='nav-list'>
          <ul>
            <li>
              <a href='#blog' className='underlined'>Blog</a>
            </li>
            <li>
              <a href='#portfolio' className='underlined'>Portfolio</a>
            </li>
            <li>
              <a href='#projects' className='underlined'>Projects</a>
            </li>
            <li>
              <a href='#contact' className='underlined'>Contact</a>
            </li>
          </ul>
        </div>
        <div className='nav-toogle'>
          <button className='btn-toogle'>
            <img src={toogleSun} alt="toogleSun"/>
          </button>
        </div>
      </div>
      <div className='stripes'></div>
    </>

  )
}

export default Navbar