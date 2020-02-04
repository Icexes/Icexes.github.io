import React from 'react'
import {NavLink, context,router, Route} from 'react-router-dom'
import './AutorizationForm.css'
export default function AutorizationForm(props) {
    return (
        <form className="autorizationForm">
            <p className="field">
                <input type="text" name="login" placeholder="Login" />
                <i className="icon-user icon-large"></i>
            </p>
            <p className="field">
                <input type="password" name="password" placeholder="Password" />
                <i className="icon-lock icon-large"></i>
            </p>
            <p className="sumbit">
                <button type="submit" name="submit" onClick={handlerSubmitClick}>
                    <i className="fas fa-arrow-right icon-arrow-right icon-large"></i>
                </button>
            </p>
        </form>
    )



}

const handlerSubmitClick = (e) => {
        e.preventDefault();
}
