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
      searchQuery: '',
      notFound: false,
    }
  }

  handleInputChange = async (e) => {
    await this.setState({ searchQuery: e.target.value })
    if (this.state.searchQuery) {
      await this.setState({ mainProjectCardsDataArray: this.filterCards(mainProjectCardsDataArray) })
      if (this.state.mainProjectCardsDataArray.length) {
        this.setState({notFound: false})
      }
      else {
        this.setState({notFound: true})
      }
    }
    else {
      await this.setState({ mainProjectCardsDataArray: mainProjectCardsDataArray })
    }
  }
  
  addMark = (str, pos, length) => str.slice(0, pos) + '<mark>' + str.slice(pos, pos + length) + '</mark>' + str.slice(pos + length);
  
  
   filterCards = (arrays) => {
    
    let newArr = arrays.filter(arr => {
      if (arr.description.indexOf(this.state.searchQuery)!=-1) {
        return arr
      }
    }
    )
    newArr.forEach(elem => {
      elem.description = this.addMark(elem.description, elem.description.indexOf(this.state.searchQuery),this.state.searchQuery.length)
    })
    
    return newArr
  }

  render() {
    return (
      <>
        <Header handleInputChange={this.handleInputChange} />
        <Main mainProjectCardsDataArray={this.state.mainProjectCardsDataArray} notFound={this.state.notFound}/>
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

