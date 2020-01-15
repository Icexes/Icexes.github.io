import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import './font-awesome/css/all.min.css'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Main from "./components/Main/Main"

// ========================================

ReactDOM.render(
  <>
    <Header />
    <Main />
    <Footer />

  </>,
  document.getElementById('root')
);

