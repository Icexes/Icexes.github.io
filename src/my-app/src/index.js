import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './font-awesome/css/all.min.css'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Main from "./components/Main/Main"
import { mainProjectCardsDataArray } from './components/DataFiles/CardsDataArrays'


class MainStuff extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mainProjectCardsDataArray: mainProjectCardsDataArray,
      searchQuery: ''
    }
  }

  handleInputChange = async (e) => {
    await this.setState({ searchQuery: e.target.value })
    if (this.state.searchQuery) {
      await this.setState({ mainProjectCardsDataArray: this.filterCards(mainProjectCardsDataArray) })
      
    }
  }

  filterCards = (arrays) => {
    
    let newArr = arrays.filter(arr => {
      if (arr.description.indexOf(this.state.searchQuery)!=-1) {
       alert(arr.id)       
        return arr
      }
    }
    )
    console.log(newArr)
  }

  render() {
    return (
      <>
        <Header handleInputChange={this.handleInputChange} />
        <Main mainProjectCardsDataArray={this.state.mainProjectCardsDataArray}/>
        <Footer />

      </>

    )

  }
}



// ========================================
ReactDOM.render(
  <>
    <MainStuff />
  </>,
  document.getElementById('root')
);

