import React from 'react'
import Menu from './Menu'

const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__logo">
          <img src="./images/logo.png" alt="logo" className='nav__logo-img'/>
        </div>
        <>
          <Menu />
        </>
        <div className="nav__toggle">
          <h1>a</h1>
        </div>
      </nav>
    </header>
  )
}

export default Navbar