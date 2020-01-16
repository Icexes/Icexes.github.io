import React from 'react'
import './BurgerButton.css'
export default function BurgerButton(props) {
    return (
        <button className="burger-button" onClick={()=>props.onClick()}>
            <span className="burger-button__line"></span>
            <span className="burger-button__line"></span>
            <span className="burger-button__line"></span>
        </button>
    )
}