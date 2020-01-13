import React from 'react'
export default function DesktopMenu() {

    const itemList = itemListData.map((element) =>
        <li key={element.id} className="navbar-desktop-menu__item">
            <a href={element.href}>{element.value}
                <i className="fa fa-angle-right"></i></a>
        </li>

    )

    return (
        <ul className="navbar-desktop-menu">
            {itemList}
        </ul>
    )
}