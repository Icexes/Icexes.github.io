import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import './font-awesome/css/all.min.css'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Main from "./components/Main/Main"
import {mainProjectCardsDataArray} from './components/DataFiles/CardsDataArrays'




class MainStuff extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mainProjectCardsDataArray : mainProjectCardsDataArray,
      searchQuery: ''
    }
  }

   handleInputChange = async (e) => {
   await this.setState({searchQuery: e.target.value})
    alert(this.state.searchQuery)
  }
    render() {
      return (
        <>
        <Header handleInputChange={this.handleInputChange}/>
        <Main />
        <Footer />
    
      </>

      )

    }
}



// ========================================
ReactDOM.render(
  <>
<MainStuff/>

  </>,
  document.getElementById('root')
);

