import React from 'react'
import MobileMenu from './MobileMenu/MobileMenu'
import BurgerButton from './MobileMenu/BurgerButton/BurgerButton'
export default function Header() {
    return (
        <header className="header">
            <div className="navbar-wrap">
                <div className="container-wrap">
                    <div className="navbar">
                        <MobileMenu />
                        <BurgerButton />
                        
                    </div>
                </div>
            </div>
        </header>
    )
}