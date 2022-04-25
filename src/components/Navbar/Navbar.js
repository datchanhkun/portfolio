import React, { useContext } from 'react'
import './Navbar.css'
import toogleSun from '../../assets/images/sun.svg'
import toogleMoon from '../../assets/images/moon.svg'
import { themeContext } from '../../Context'
const Navbar = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  const changeDarkTheme = () => {
    theme.dispatch({type: 'toggle'})
  }
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
          <button className={darkMode ? 'btn-toogle' : 'btn-toogle-dark'} onClick={changeDarkTheme}>
            {darkMode ? (
              <img src={toogleSun} alt="toogleSun"/>
            ) : (
              <img src={toogleMoon} alt="toogleMoon"/>
            )}

          </button>
        </div>
      </div>
      <div className={`stripes ${darkMode ? 'theme-light' : 'theme-dark'}`}></div>
    </>

  )
}

export default Navbar