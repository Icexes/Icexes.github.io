import React from 'react'
import Card from './Card/Card'
import './Cards.css'
export default function Cards(props) {


let cards = props.cardsDataArray.map((data) => {

  return  <Card key={data.id} cardData = {data} small = {props.small ? true : false} searchQuery={props.searchQuery!==undefined ? props.searchQuery : ""}></Card>
}
  )

  return (
      <section className = {props.small ? "cards  cards--separator-top cards--border-top" : "cards"}>
          {cards}
      </section>
  )
}