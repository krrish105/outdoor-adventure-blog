import React, { useState } from 'react'
import Menu from './Menu'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <nav className={` ${menuOpen? 'nav container active' : 'nav container'}`}>
        <div className="nav__logo">
          <img src="./images/home/logo.png" alt="logo" className='nav__logo-img'/>
        </div>
        <>
          <Menu />
        </>
        <div className="nav__toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen? <AiOutlineClose /> : <GiHamburgerMenu /> }
        </div>
      </nav>
    </header>
  )
}

export default Navbar