import React from 'react'
import './index.css'
import ShareIcon from 'assets/images/share.svg'
import Facebook from 'assets/images/facebook.svg'
import Instagram from 'assets/images/instagram.svg'
import Twitter from 'assets/images/twitter.svg'
const FloatingHeader = ({ scroll }) => {
  return (
    <div className='floating-header'>
      <div className='floating-header_left'>
        <span className='floating-header_logo'>ThanhDatDev's Blog</span>
        <span>—</span>
        <span className='floating-header-title'>Domain Name System (DNS) and How It Works</span>
      </div>
      <div className='floating-header_right'>
        <span className='floating-header_label'>Share this</span>
        <div className='floating-header_icon'>
          <img src={ShareIcon} alt="share-icon" />
        </div>
        <div className='floating-header_social'>
          <div className='floating-header_facebook icon_social'>
            <img src={Facebook} alt="socialFB" />
          </div>
          <div className='floating-header_instagram icon_social'>
            <img src={Instagram} alt="socialIns" />
          </div>
          <div className='floating-header_twitter icon_social'>
            <img src={Twitter} alt="socialTwitter" />
          </div>
        </div>
      </div>
      <div className='floating-header_line' style={{ width: `${scroll}%` }} />
    </div>
  )
}

export default FloatingHeader