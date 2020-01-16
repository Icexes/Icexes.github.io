import React from 'react'
import MobileMenu from './MobileMenu/MobileMenu'
import BurgerButton from './MobileMenu/BurgerButton/BurgerButton'
import NavbarLogo from './NavbarLogo/NavbarLogo'
import DesktopMenu from './DesktopMenu/DesktopMenu'
import DesktopSearchField from './DesktopSearchField/DesktopSearchField'
import './Header.css'


export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {searchFieldIsOpen : false}
    }

    handleClick = () => {
        this.setState(state => ({
            searchFieldIsOpen: !state.searchFieldIsOpen
        }))       
    }

    render() {

        return (
            <header className="header">
            <div className="navbar-wrap">
                <div className="container-wrap">
                    <div className="navbar">
                        <MobileMenu />
                        <BurgerButton />
                        <NavbarLogo />
                        <DesktopMenu onClick={this.handleClick}/>
                    </div>
                </div>
            </div>
            <DesktopSearchField isOpen={this.state.searchFieldIsOpen} />
        </header>
        )
    }




}