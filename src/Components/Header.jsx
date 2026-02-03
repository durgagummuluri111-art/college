import React from 'react'
import './header.css'
import logo from '../../public/images/logo.jpg'

const Header = () => {
  return (
    <div>
      <h1>VEDA DEGREE COLLEGE</h1>
      <div class="img">
        <img src={logo}></img>
      </div>
    </div>
  )
}

export default Header
