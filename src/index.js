import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import reportWebVitals from './reportWebVitals';

const GlobalStyles = createGlobalStyle`
  body {
    background: orange;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
