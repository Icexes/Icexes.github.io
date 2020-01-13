import React from 'react'
export default function NavigationItemList() {
    const itemListData = [
        {   
            id="1",
            href: "#",
            value: "Home"
        },
        {
            id="2",
            href: "#",
            value: "Projects",
        },
        {
            id="3",
            href: "#",
            value: "Guides"
        },
        {
            id="4",
            href: "#",
            value: "Blog"
        }
        ,
        {
            id="5",
            href: "#",
            value: "Training & Certification"
        }
    ]
    const itemList = itemListData.map((element) =>
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