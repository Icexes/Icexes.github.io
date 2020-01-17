import React from 'react'
import MobileSearchField from './MobileSearchField/MobileSearchField'
import NavigationItemList from './NavigationItemList/NavigationItemList'
import './MobileMenu.css'
export default function MobileMenu(props) {
    return (
        <div className={props.isOpen ? "mobile-menu mobile-menu--visible" : "mobile-menu"}>
            <MobileSearchField handleInputChange={props.handleInputChange}/>
            <NavigationItemList />

        </div>
    )
}