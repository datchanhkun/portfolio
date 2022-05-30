import React, { useContext } from 'react'
import './Footer.css'
import { themeContext } from '../../Context'
const Footer = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className={`footer-wrapper ${darkMode ? '' : 'footer-dark'}`}>
      <div className='footer'>
        <p>Built by Cao Thanh Dat and refer to Alissa's desgin.</p>
        <p>Copyright 	&copy; 2022 All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
