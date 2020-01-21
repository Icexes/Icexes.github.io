import React from 'react'
import menuLinks from "../../DataFiles/HeaderMenuLinks"
import './DesktopMenu.css'

export default function DesktopMenu(props) {
    const filteredmenuLinks = menuLinks.filter(elem => {
        return elem.desktop ? true : false
    })
    const itemList = filteredmenuLinks.map((element) =>
        <li key={element.id} className="navbar-desktop-menu__item">
            <a href={element.href} className="navbar-desktop-menu__link">{element.value}
            </a>
        </li>

    )

    return (
        <ul className="navbar-desktop-menu">
            {itemList}
            <li key={menuLinks.length + 1} className="navbar-desktop-menu__item">
                <a href="#" className="navbar-desktop-menu__link search-link" onClick={() => props.onClick()}>
                    <i className="fas fa-search navbar-desktop-menu__search-icon"></i>
                    <i className="fas fa-times icon-remove  navbar-desktop-menu__remove-icon js-search-input--closed"></i></a>
            </li>
        </ul>
    )
}