import React from 'react'
import './Container.css'
const Container = ({children}) => {
  return (
    <div className="u-container">
      {children}
    </div>
  )
}

export default Container
