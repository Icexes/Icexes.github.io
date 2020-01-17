import React from 'react'
import menuLinksData from '../../../DataFiles/HeaderMobileMenuLinksData'

import './NavigationItemList.css'
export default function NavigationItemList() {
    const itemList = menuLinksData.map((element) =>
        <li key={element.id} className="mobile-menu__navbar-link">
            <a href={element.href}>{element.value}
                <i className="fa fa-angle-right"></i></a>
        </li>

    )

    return (
        <ul className="navigation-item-list">
            {itemList}
        </ul>
    )
}