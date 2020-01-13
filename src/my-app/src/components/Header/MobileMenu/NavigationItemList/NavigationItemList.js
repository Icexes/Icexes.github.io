import React from 'react'
export default function NavigationItemList() {
    const itemList = [
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
    const createLink = (obj) => {
        <li className="mobile-menu__navbar-link">
            <a href={obj.href}>{obj.value}
                <i className="fa fa-angle-right"></i></a>
        </li>
    }
    return (
        <div className="mobile-menu">
            <div className="container-wrap">
                <MobileSearchField />

            </div>
        </div>
    )
}