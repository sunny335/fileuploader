import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const FILES = [
  { fileType: 'jpg', size: '4.3MB', name: 'me on skis', status: 'Uploaded' },
  { fileType: 'mov', size: '1.3GB', name: 'cats falli', status: 'Synced' },
  { fileType: 'txt', size: '0.9KB', name: 'My Decembe', status: 'Uploaded' },
  { fileType: 'mp3', size: '3.4MB', name: 'disturbed_', status: 'New' },
];

ReactDOM.render(
  <React.StrictMode>
    <App files={FILES} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
