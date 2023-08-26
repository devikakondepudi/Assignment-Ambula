import React from 'react';
import ReactDOM from 'react-dom/client';



//import './index.css';
//  import './weather.css';
//  import Calci from './calci';
  // import './calci.css';

/// import App from './weatherapp';
// import Devi from './devi.jsx';
// import './devi.css';
//import Dk from './user.js';
import Apps from './Apps.js';
//  import App from './App.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Calci/>  */}
  
   {/* <App/> */}
    <Apps/> 
   
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
