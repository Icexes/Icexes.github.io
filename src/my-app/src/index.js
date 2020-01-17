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
      mainProjectCardsDataArray: mainProjectCardsDataArray,
      searchQuery: '',
      isNotFound: false,
    }
  }

  handleInputChange = async (e) => {
    
    await this.setState({ searchQuery: e.target.value })
    console.log("YES", this.state.searchQuery.length)
    if (this.state.searchQuery) {
      console.log("WHY")
      await this.setState({ mainProjectCardsDataArray: this.filterCards(mainProjectCardsDataArray) })
      if (this.state.mainProjectCardsDataArray.length) {
        await this.setState({isNotFound: false})
      }
      else {
        await  this.setState({isNotFound: true})
      }
    }
    else {
      console.log("HI")
    //  console.log(mainProjectCardsDataArray)
      await this.setState({isNotFound: false})
      await this.setState({ mainProjectCardsDataArray: mainProjectCardsDataArray })
      console.log(this.state.mainProjectCardsDataArray)
    }
  }
  
  //addMark = (str, pos, length) => str.slice(0, pos) + '<mark>' + str.slice(pos, pos + length) + '</mark>' + str.slice(pos + length);
  
  
   filterCards = (arrays) => {
    
    let newArr = arrays.filter(arr => {
      
      if (arr.description.toLowerCase().indexOf(this.state.searchQuery.toLowerCase())!==-1 || arr.title.toLowerCase().indexOf(this.state.searchQuery.toLowerCase())!==-1) {
        return arr
      }
    }
    )
   // newArr.forEach(elem => {
   //   elem.description = this.addMark(elem.description, elem.description.indexOf(this.state.searchQuery),this.state.searchQuery.length)
   // })
    
    return newArr
  }

  render() {
    return (
      <>
        <Header handleInputChange={this.handleInputChange} />
        <Main mainProjectCardsDataArray={this.state.mainProjectCardsDataArray} isNotFound={this.state.isNotFound}/>
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

