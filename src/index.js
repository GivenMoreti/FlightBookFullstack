import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


//components
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Cards';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div>
   <Header />
  <div className="container">
    <App />
  </div>
  <div>
  <Card />
  </div>
  <Footer />
  </div>
);