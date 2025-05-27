import React from 'react'
import "./footer-styles.css"

const Footer = () => {
  return (
    <div className='footer'><h3>&copy; {new Date().getFullYear()} Trust. All rights reserved </h3></div>
  )
}

export default Footer