import React, { useState } from 'react'
import Menu from './Menu'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <nav className={`${menuOpen ? 'nav container active' : 'nav container'}`}>
        <div className="nav__logo">
          <Link to='/'>
            <img src="./images/home/logo.png" alt="logo" className='nav__logo-img' />
          </Link>
        </div>
        <>
          <Menu menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
        </>
        <div className="nav__toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>
      </nav>
    </header>
  )
}

export default Navbar