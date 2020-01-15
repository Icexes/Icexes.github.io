import React from 'react'
import MobileMenu from './MobileMenu/MobileMenu'
import BurgerButton from './MobileMenu/BurgerButton/BurgerButton'
import NavbarLogo from './NavbarLogo/NavbarLogo'
import DesktopMenu from './DesktopMenu/DesktopMenu'
import DesktopSearchField from './DesktopSearchField/DesktopSearchField'
import './Header.css'
export default function Header() {
    return (
        <header className="header">
            <div className="navbar-wrap">
                <div className="container-wrap">
                    <div className="navbar">
                        <MobileMenu />
                        <BurgerButton />
                        <NavbarLogo />
                        <DesktopMenu />
                    </div>
                </div>
            </div>
            <DesktopSearchField />
        </header>
    )
}