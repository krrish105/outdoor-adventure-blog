import React from 'react'

const Menu = () => {
  return (
    <div className="nav__menu">
        <ul className="nav__list">
            <li className="nav__item">
                <a href="/" className="nav__link">Home</a>
            </li>
            <li className="nav__item">
                <a href="/" className="nav__link">About</a>
            </li>
            <li className="nav__item">
                <a href="/" className="nav__link">Services</a>
            </li>
            <li className="nav__item">
                <a href="/" className="nav__link">Projects</a>
            </li>
            <li className="nav__item cta">
                <a href="/" className="nav__link btn ">take actions</a>
            </li>
        </ul>
    </div>
  )
}

export default Menu