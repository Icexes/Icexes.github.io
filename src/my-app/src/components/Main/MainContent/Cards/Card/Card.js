import React from 'react'
import './Card.css'
export default function Card(props) {

    const makeCard = () => {
    }
    return (

        <a className={props.small ? "card card--height-s" : "card"} href={props.cardData.href}>
            {!props.small && (<div className="card__icon-container">
                <div className={props.cardData.src}></div>
            </div>)}
            <p className="card__title">{props.cardData.title}</p>
            <p className="card__description">{props.cardData.description}</p>

        </a>
    )
}