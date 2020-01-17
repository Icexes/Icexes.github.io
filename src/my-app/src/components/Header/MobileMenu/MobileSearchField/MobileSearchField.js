import React from 'react'
import './MobileSearchField.css'
export default function MobileSearchField(props) {
    return (
        <div className="mobile-search-container">
            <form action="/search" className="form-inline form-search" method="get">
                <button className="mobile-search-form__submit" type="submit">
                    <i className="fas fa-search mobile-search-form__search-icon"></i>
                </button>
                <input className="mobile-search__input search-field--js" name="q" placeholder="Search..."
                    type="text" onChange={props.handleSearchInputChange}/>
            </form>
        </div>
    )
}