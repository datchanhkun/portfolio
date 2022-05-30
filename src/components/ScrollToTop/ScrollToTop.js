import React, { useEffect, useState, useContext } from 'react'
import './ScrollToTop.css'
import arrowUp from '../../assets/images/arrowUp.png'
import { useWindowScroll } from 'react-use'
import { themeContext } from '../../Context'
import smoothscroll from 'smoothscroll-polyfill'
const ScrollToTop = () => {
  // kick off the polyfill!
  smoothscroll.polyfill();
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  const {y: pageYOffset } = useWindowScroll();
  const [visible, setVisiblity] = useState(false)

  useEffect(() => {
    if(pageYOffset > 400) {
      setVisiblity(true);
    } else {
      setVisiblity(false);
    }
  },[pageYOffset])
  
  const scrollToTop = () => window.scrollTo({top: 0, behavior: 'smooth'})

  if(!visible) {
    return false;
  }
  return (
    <div className={`scroll-to-top ${darkMode ? 'scroll-light' : 'scroll-dark'}`} onClick={scrollToTop}>
      <img src={arrowUp} alt='arrowUp' className='scroll-icon' />
    </div>
  )
}

export default ScrollToTop
