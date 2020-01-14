import React from 'react'
import MobileSearchField from './MobileSearchField/MobileSearchField'
import NavigationItemList from './NavigationItemList/NavigationItemList'
import './MobileMenu.css'
export default function MobileMenu() {
    return (
        <div className="mobile-menu">
            <div className="container-wrap">
                <MobileSearchField />
                <NavigationItemList />               
            </div>
        </div>
    )
}