import React from 'react'
import "./footer-styles.css"

const Footer = () => {
  return (
    
    <div className='footer'>
      <h3><span>©</span> {new Date().getFullYear()} Trusted Ideas. All rights reserved </h3>
    </div>
  )
}

export default Footer