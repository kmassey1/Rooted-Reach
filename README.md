// Rooted Reach: React App Entry Point
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './HomePage.jsx';
import './tailwind-custom.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);
