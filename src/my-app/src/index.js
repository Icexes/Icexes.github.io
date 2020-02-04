import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './font-awesome/css/all.min.css'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Main from "./components/Main/Main"
import AutorizationForm from "./components/AutorizationForm/AutorizationForm";

import {BrowserRouter, Switch, Route} from 'react-router-dom'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    searchQuery: '',     
    }
  }

  handleSearchInputChange = async (e) => {
    await this.setState({ searchQuery: e.target.value })
  }
 

  render() {
    return (
      <>
        <Header handleSearchInputChange={this.handleSearchInputChange} />
        <Main searchQuery={this.state.searchQuery} />
        <Footer />
        
      </>

    )

  }
}

const application = (
    <BrowserRouter>      
      <Switch>        
        <Route path="/" exact component={App} />
        <Route path="/login" exact component={AutorizationForm}/>
      </Switch>
    </BrowserRouter>
  )

// ========================================
ReactDOM.render(
    application
  ,
  document.getElementById('root')
);

