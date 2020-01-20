import React from 'react'
import './Card.css'
export default function Card(props) {
    console.log(props)
   const addMark = (str, pos, length) => str.slice(0, pos) + '<mark>' + str.slice(pos, pos + length) + '</mark>' + str.slice(pos + length);
   
   if (!props.isSearchInputEmpty) {

   }
    return (
        <a key={props.cardData.id} className={props.small ? "card card--height-s" : "card"} href={props.cardData.href}>
            {!props.small && (<div className="card__icon-container">
                <img src={props.cardData.src} alt={props.cardData.alt}></img>
            </div>)}
            <p className="card__title">{props.cardData.title}</p>
            <p className="card__description"  dangerouslySetInnerHTML={props.isSearchInputEmpty ? {__html: props.cardData.description} : {__html: addMark(props.cardData.description,props.cardData.description,props.cardData.description)}}></p>

        </a>
    )
}