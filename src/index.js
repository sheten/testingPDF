import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import App from './App';
import PDF from './reactPDF/index';
// import PDF from './CreatePDF/jsPDF';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <div style={{alignItems: "center", display: "flex", height: "500px", justifyContent: "center", width: "100%"}}>
      <PDF />    
    </div> */}
    <PDF/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
