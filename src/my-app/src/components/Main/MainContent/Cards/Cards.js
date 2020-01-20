import React from 'react'
import Card from './Card/Card'
import './Cards.css'
export default function Cards(props) {
console.log(props, "CARDS")
let cards = props.cardsDataArray.map((data) => {

  return  <Card key={data.id} cardData = {data} small = {props.small ? true : false} isSearchInputEmpty={props.isSearchInputEmpty} searchQuery={props.searchQuery}></Card>
}
  )

  return (
      <section className = {props.small ? "cards  cards--separator-top cards--border-top" : "cards"}>
          {cards}
      </section>
  )
}