import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles.css';

import './font-awesome/css/all.min.css'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"


// ========================================

ReactDOM.render(
  <>
    <Header />
    <Footer />
  </>,
  document.getElementById('root')
);

