import React from 'react'
import MenuLinksData from '../../../DataFiles/MenuLinksData'
export default function NavigationItemList() {

    const itemList = MenuLinksData.map((element) =>
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