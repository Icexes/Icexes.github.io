import React from 'react'
import './NavbarLogo.css'
export default function NavbarLogo(props) {
    return (
        <div className={props.isOpen ? "navbar__logo js-slide--right":"navbar__logo"}>
            <a className="logo__img" href="#"></a>
        </div>
    )
}