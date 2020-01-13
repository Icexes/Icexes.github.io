import React from 'react'
export default function NavigationItemList() {
    const itemListData = [
        {
            href: "#",
            value: "Home"
        },
        {
            href: "#",
            value: "Projects",
        },
        {
            href: "#",
            value: "Guides"
        },
        {
            href: "#",
            value: "Blog"
        }
        ,
        {
            href: "#",
            value: "Training & Certification"
        }
    ]
    const itemList = itemListData.map((element) =>
        <li className="mobile-menu__navbar-link">
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