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
        this.state = {
            searchFieldIsOpened: false,
            mobileMenuisOpened: false
        }
    }

    handleSearchLinkClick = () => {
        
        this.setState(state => ({
            
            searchFieldIsOpened: !state.searchFieldIsOpened
        }
        ))
    }
    handleBurgerButtonClick = () => {

        this.setState(state => ({
            mobileMenuisOpened: !state.mobileMenuisOpened
        }))
    }

    render() {

        return (
            <header className="header">
                <div className="navbar-wrap">
                    <div className="container-wrap">
                        <div className="navbar">
                            <MobileMenu isOpen={this.state.mobileMenuisOpened} handleSearchInputChange={this.props.handleSearchInputChange}/>
                            <BurgerButton onClick={this.handleBurgerButtonClick} isOpen={this.state.mobileMenuisOpened} />
                            <NavbarLogo isOpen={this.state.mobileMenuisOpened} />
                            <DesktopMenu onClick={this.handleSearchLinkClick} />
                        </div>
                    </div>
                </div>
           
            <DesktopSearchField isOpen={this.state.searchFieldIsOpened} handleSearchInputChange={this.props.handleSearchInputChange}/>
        </header>
        )
    }




}