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
      isSearchInputEmpty: true
    }
  }

  handleSearchInputChange = async (e) => {
    console.log(this.state.mainProjectCardsDataArray,"STATE")
    console.log(mainProjectCardsDataArray,"USUAL")
    await this.setState({ searchQuery: e.target.value })
    console.log("YES", this.state.searchQuery.length)
    if (this.state.searchQuery) {
      
      console.log("WHY")
      await this.setState({ mainProjectCardsDataArray: this.filterCards(mainProjectCardsDataArray.slice()) })
      if (this.state.mainProjectCardsDataArray.length) {
        
        await this.setState({isNotFound: false} )
      }
      else {
        await  this.setState({isNotFound: true})
      }
    }
    else {
      
      console.log(mainProjectCardsDataArray)
      await this.setState({isNotFound: false})
      await this.setState({ mainProjectCardsDataArray: mainProjectCardsDataArray.slice() })

      
    }
  }
  
  addMark = (str, pos, length) => str.slice(0, pos) + '<mark>' + str.slice(pos, pos + length) + '</mark>' + str.slice(pos + length);
  
  
   filterCards = (arrays) => {
    
    let newArr = arrays.filter(arr => {
      
      if (arr.description.toLowerCase().indexOf(this.state.searchQuery.toLowerCase())!==-1) { 
        return arr
      }
    }
    )

    return newArr
  }

  render() {
    return (
      <>
        <Header handleSearchInputChange={this.handleSearchInputChange} />
        <Main mainProjectCardsDataArray={this.state.mainProjectCardsDataArray} isNotFound={this.state.isNotFound} searchQuery={this.state.searchQuery}/>
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

