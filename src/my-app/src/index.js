import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './font-awesome/css/all.min.css'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Main from "./components/Main/Main"
import { BrowserRouter } from 'react-router-dom'
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
    <App />
  </BrowserRouter>
)

// ========================================
ReactDOM.render(

  application
  ,
  document.getElementById('root')
);

