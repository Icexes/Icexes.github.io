import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './font-awesome/css/all.min.css'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Main from "./components/Main/Main"
import { mainProjectCardsDataArray } from './components/DataFiles/CardsDataArrays'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mainProjectCardsDataArray: mainProjectCardsDataArray.slice(),
      searchQuery: '',
      isNotFound: false,
    }
  }

  handleSearchInputChange = async (e) => {

    await this.setState({ searchQuery: e.target.value })
    if (this.state.searchQuery) {
      await this.setState({ mainProjectCardsDataArray: this.filterCards(mainProjectCardsDataArray.slice()) })
      if (this.state.mainProjectCardsDataArray.length) {
        await this.setState({ isNotFound: false })
      }
      else {
        await this.setState({ isNotFound: true })
      }
    }
    else {
      await this.setState({ isNotFound: false })
      await this.setState({ mainProjectCardsDataArray: mainProjectCardsDataArray.slice() })
    }
  }

  filterCards = (cards) => {

    let sortedCards = cards.filter(arr => {
      if (arr.description.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1) {
        return arr
      }
    }
    )
    return sortedCards
  }

  render() {
    return (
      <>
        <Header handleSearchInputChange={this.handleSearchInputChange} />
        <Main mainProjectCardsDataArray={this.state.mainProjectCardsDataArray} isNotFound={this.state.isNotFound} searchQuery={this.state.searchQuery} />
        <Footer />
      </>

    )

  }
}



// ========================================
ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById('root')
);

