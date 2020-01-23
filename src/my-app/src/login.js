import React from 'react';
import ReactDOM from 'react-dom';
import './login.css';
import './font-awesome/css/all.min.css'
import AutorizationForm from './components/AutorizationForm/AutorizationForm'

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
        <AutorizationForm/>
        
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

