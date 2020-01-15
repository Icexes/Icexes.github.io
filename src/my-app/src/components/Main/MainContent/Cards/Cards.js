import React from 'react'
import Card from './Card/Card'
import './Cards.css'
export default function Cards(props) {

let cards = props.cardDataArray.map((data) => {

  return  <Card cardData = {data} small = {props.small ? true : false} ></Card>
}
  )

  return (
      <section className = {props.small ? "cards  cards--separator-top cards--border-top" : "cards"}>
          {cards}
      </section>
  )
}