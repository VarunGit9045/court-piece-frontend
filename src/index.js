import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Agar index.css nahi hai toh is line ko hata sakte ho

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
