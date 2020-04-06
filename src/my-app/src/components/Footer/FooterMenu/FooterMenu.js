import React from 'react'
import './FooterMenu.css'
import FooterMenuList from './FooterMenuList/FooterMenuList'
export default function FooterMenu() {
    return (
        <nav className='footer-menu'>
            <FooterMenuList />
        </nav>
    )
}