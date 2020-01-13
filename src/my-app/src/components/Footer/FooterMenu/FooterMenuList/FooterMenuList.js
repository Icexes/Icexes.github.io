import React from 'react'
export default function FooterMenuList() {
    const footerMenuData = [
        {
            id: 1,
            href: "#",
            linkName: "Team"
        },
        {
            id: 2,
            href: "#",
            linkName: "Tools"
        },
        {
            id: 3,
            href: "#",
            linkName: "Store"
        },
        {
            id: 4,
            href: "#",
            linkName: "Newsletter"
        },
    ]
    const menuList = footerMenuData.map((elem) => {
        <li id={elem.id} className = "footer-menu__item">
            <a href = {elem.href}>{elem.linkName}</a>
        </li>
    })
    return (
        <ul className = "footer-menu__list">
            {menuList}
        </ul>
    )
}