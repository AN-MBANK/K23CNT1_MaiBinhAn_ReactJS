import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import MbaApp from './MbaApp';

const mbaRoot = ReactDOM.createRoot(document.getElementById('mbaRoot'));
mbaRoot.render(
  <React.StrictMode>
    <MbaApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
