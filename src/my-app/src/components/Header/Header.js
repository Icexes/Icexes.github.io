import React from 'react'
import MobileMenu from './MobileMenu/MobileMenu'
export default function Header() {
    return (
        <header className="header">
            <div className="navbar-wrap">
                <div className="container-wrap">
                    <div className="navbar">
                        <MobileMenu />
                    </div>
                </div>
            </div>
        </header>
    )
}