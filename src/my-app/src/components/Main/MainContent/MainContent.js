import React from 'react'
import Cards from './Cards/Cards'
import { mainProjectCardsDataArray, communityProjectsDataArray, projectInTheAtticDataArray } from '../../DataFiles/CardsDataArrays'
import './MainContent.css'
export default function MainContent() {
    return (
        <article className="main-content">
            <h1 className="main-content__title">Main Project</h1>
            <p className="main-content__subtitle">From configuration to security, web apps to big data - whatever
                        the
                        infostructure
                        needs of your
                    application may be, there is <b>Spring Project</b> to help you build it. Start small and use just
                    what you need – <b>Spring is modular by design.</b></p>
            <Cards cardsDataArray={mainProjectCardsDataArray}>  </Cards>
            <h2 className="main-content__title main-content__title--size-s">Community Projects</h2>
            <Cards cardsDataArray={communityProjectsDataArray} small={true}></Cards>
            <h2 className="main-content__title main-content__title--size-s">Projects in the Attic</h2>
            <Cards cardsDataArray={projectInTheAtticDataArray} small={true}></Cards>
        </article>
    )
}


