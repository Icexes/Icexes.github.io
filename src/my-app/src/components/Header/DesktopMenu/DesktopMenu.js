import React from 'react'
import menuLinksData from "../../DataFiles/HeaderMenuLinksData"
import './DesktopMenu.css'

export default function DesktopMenu() {
    const itemList = menuLinksData.map((element) =>
        <li key={element.id} className="navbar-desktop-menu__item">
            <a href={element.href} className="navbar-desktop-menu__link">{element.value}
            </a>
        </li>

    )

    return (
        <ul className="navbar-desktop-menu">
            {itemList}
            <li key={menuLinksData.length + 1} className="navbar-desktop-menu__item">
                <a href="#" className="navbar-desktop-menu__link search-link">
                    <i className="fas fa-search navbar-desktop-menu__search-icon"></i>
                    <i className="fas fa-times icon-remove  navbar-desktop-menu__remove-icon js-search-input--closed"></i></a>
            </li>
        </ul>
    )
}