import React from 'react'
import './FooterMenuList.css'
import footerMenuLinksData from '../../../DataFiles/FooterMenuLinksData'
export default function FooterMenuList() {

    const menuList = footerMenuLinksData.map(elem => {
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