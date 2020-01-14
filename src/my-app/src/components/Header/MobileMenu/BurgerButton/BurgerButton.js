import React from 'react'
import './BurgerButton.css'
export default function BurgerButton() {
    return (
            <button className = "burger-button">
                <span className="burger-button__line"></span>
                <span className="burger-button__line"></span>
                <span className="burger-button__line"></span>
            </button>
    )
}