import React from 'react'
import FooterMenu from './FooterMenu/FooterMenu'
import Copyrights from './Copyrights/Copyrights'
import './Footer.css'
export default function Footer() {
    return (
        <footer className="footer">
            <div className="container-wrap">
                <FooterMenu />
                <Copyrights /> 
            </div>
        </footer>
    )
}
