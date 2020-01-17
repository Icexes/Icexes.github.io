import React from 'react'
import './Main.css'
import MainContent from './MainContent/MainContent'
export default function Main(props) {
    return (
        <main >
            <div className="container-wrap">
                <MainContent mainProjectCardsDataArray={props.mainProjectCardsDataArray} isNotFound={props.isNotFound}/>
            </div>
        </main>
    )
}