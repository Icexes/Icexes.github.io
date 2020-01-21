import React from 'react'
import Cards from './Cards/Cards'
import { mainProjects, communityProjects, projectsInTheAttic } from '../../DataFiles/Cards'
import './MainContent.css'
export default function MainContent(props) {

    const filterCards = (cards) => {

        let sortedCards = cards.filter(arr => {

            return arr.description.match(new RegExp(props.searchQuery, "i"))
        }
        )
        return sortedCards
    }

    const filteredMainProject = props.searchQuery ? filterCards(mainProjects) : mainProjects

    const cardsData = () => {
        if (filteredMainProject.length) {
            return <Cards cardsDataArray={filteredMainProject} searchQuery={props.searchQuery}></Cards>
        }
        else {
            return <div className="not-found-container">Not Found!!!!!!</div>
        }
    }
    return (
        <article className="main-content">
            <h1 className="main-content__title">Main Projects</h1>
            <p className="main-content__subtitle">From configuration to security, web apps to big data - whatever
                        the
                        infostructure
                        needs of your
                    application may be, there is <b>Spring Project</b> to help you build it. Start small and use just
                    what you need – <b>Spring is modular by design.</b></p>
            {cardsData()}

            <h2 className="main-content__title main-content__title--size-s">Community Projects</h2>
            <Cards cardsDataArray={communityProjects} small={true}></Cards>
            <h2 className="main-content__title main-content__title--size-s">Projects in the Attic</h2>
            <Cards cardsDataArray={projectsInTheAttic} small={true}></Cards>
        </article>
    )
}


