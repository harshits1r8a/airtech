import React from 'react'
import logo from '../../assets/logo.png'
const Logo = ({size}) => {
  return (
    <img src={logo} alt="airtech" className={`${size}`}/>
  )
}

export default Logo
