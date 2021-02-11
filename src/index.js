import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import images from './data.js';
import images2 from './data2';
import images3 from './data3';

ReactDOM.render(
  <React.StrictMode>
    <App dataObject={images} text='Horned Creatures'/>
    <App dataObject={images3} text='Nicky Cage'/>
    <App dataObject={images2} text='Cats'/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
