import React from 'react'

const Navbar = () => {
  return (
    <>
        <header className="header">
            <nav className="nav container">
                <div>
                    <a href="/" className="nav__logo">
                        <img src=".\images\home\white-logo.png" alt="" />
                    </a>
                </div>

                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="/" className="nav__link">Home</a></li>
                        <li className="nav__item"><a href="/" className="nav__link">About</a></li>
                        <li className="nav__item"><a href="/" className="nav__link btn">TAKE ACTION</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    </>
  )
}

export default Navbar