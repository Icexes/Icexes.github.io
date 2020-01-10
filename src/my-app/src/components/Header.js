import React from 'react'
import MobileSearchField from './MobileSearchField'
export default function Header() {
    return (
        <header className="header">
            <div className = "navbar-wrap">
                <div className = "container-wrap">
                    <div className="navbar">
                        <MobileSearchField />
                    </div>
                </div>
            </div>
        </header>
    )
}