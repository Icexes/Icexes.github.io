import React from 'react'
import menuLinksData from '../../../DataFiles/HeaderMobileMenuLinksData'

import './NavigationItemList.css'
export default function NavigationItemList() {
    const filteredMenuLinksData = menuLinksData.filter(elem => {
        return elem.mobile ? true : false 
    })
    const itemList = filteredMenuLinksData.map((element) =>
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