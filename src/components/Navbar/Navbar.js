import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import toogleSun from '../../assets/images/sun.svg'
import toogleMoon from '../../assets/images/moon.svg'
import { themeContext } from '../../Context'
import { useWindowScroll } from 'react-use'
import useSound from 'use-sound'
import Container from '../Container/Container'
import tickSound from '../../assets/audio/tick.wav'
const Navbar = (props) => {
  const {gotoSkills, gotoProjects, gotoContact} = props
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  const [openMenu, setOpenMenu] = useState(true)
  const [scrolling, setScrolling] = useState(false)
  const {y: pageYOffset } = useWindowScroll()

  const [play] = useSound(tickSound);

  useEffect(() => {
    if(pageYOffset > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  },[pageYOffset])

  const handleClickMenu = () => {
    setOpenMenu(!openMenu);
  }

  const changeDarkTheme = () => {
    theme.dispatch({type: 'toggle'})
    play()
  }

  return (
    <>
      <div className={`nav-wrapper ${scrolling ? darkMode ? 'scrolling_light' : 'scrolling_dark' : ''}`}>
        <Container>
          <div className="nav-main">

        <div className={`nav-hamburger ${openMenu ? '' : 'openMenu'}`} onClick={handleClickMenu}>
          <div className='icon-left'></div>
          <div className='icon-right'></div>
        </div>
        <div className='nav-logo'>
          <div className='nav-name'>
            <a href='/'>
              Thanh Dat Dev
            </a>
          </div>
        </div>
        <div className={`nav-list nav-mobile${openMenu ? '' : ' nav-mobile-active'}`}>
          <ul onClick={handleClickMenu}>
            <li>
              <a href='#blog' className='underlined'>Blog</a>
            </li>
            <li>
              <a onClick={gotoSkills} href='#portfolio' className='underlined'>Portfolio</a>
            </li>
            <li>
              <a onClick={gotoProjects} href='#projects' className='underlined'>Projects</a>
            </li>
            <li>
              <a onClick={gotoContact} href='#contact' className='underlined'>Contact</a>
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
        </Container>
      </div>
      <div className={`stripes ${darkMode ? 'theme-light' : 'theme-dark'}`}></div>
    </>

  )
}

export default Navbar
