import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import toogleSun from '../../assets/images/sun.svg'
import toogleMoon from '../../assets/images/moon.svg'
import { themeContext } from '../../Context'
import { useWindowScroll } from 'react-use'
import Container from '../Container/Container'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  const {gotoSkills, gotoProjects, gotoContact} = props
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  const [openMenu, setOpenMenu] = useState(true)
  const [scrolling, setScrolling] = useState(false)
  const {y: pageYOffset } = useWindowScroll()


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
  }

  return (
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
                <Link to="/blog" className='underlined'>Blog</Link>
              </li>
              <li>
                <Link to="/" className='underlined' onClick={gotoSkills}>Portfolio</Link>
              </li>
              <li>
                <Link to="/" className='underlined' onClick={gotoProjects}>Projects</Link>
              </li>
              <li>
                <Link to="/" className='underlined' onClick={gotoContact}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className='nav-toogle'>
            <button className={darkMode ? 'btn-toogle' : 'btn-toogle-dark'} onClick={changeDarkTheme}>
              {darkMode ? (
                <img src={toogleSun} alt="toogleSun" />
              ) : (
                <img src={toogleMoon} alt="toogleMoon" />
              )}
            </button>
          </div>
        </div>
      </Container>
    </div>

  )
}

export default Navbar
