import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div className="nav__menu">
            <ul className="nav__list">
                <li className="nav__item">
                    <Link to="/" className="nav__link">Home</Link>
                </li>
                <li className="nav__item">
                    <Link to="/about" className="nav__link">About</Link>
                </li>
                <li className="nav__item">
                    <Link to="/services" className="nav__link">Services</Link>
                </li>

                <li className="nav__item cta">
                    <a href="#" className="nav__link btn ">take actions</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu