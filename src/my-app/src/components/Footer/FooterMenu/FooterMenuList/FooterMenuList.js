import React from 'react'
import './FooterMenuList.css'
import menuLinks from '../../../DataFiles/FooterMenuLinks'
export default function FooterMenuList() {

    const menuList = menuLinks.map(elem => {
        return (<li key={elem.id} className="footer-menu__item">
            <a href={elem.href}> {elem.linkName} </a>
        </li>)
    })
    return (
        <ul className="footer-menu__list">
            {menuList}
        </ul>
    )
}