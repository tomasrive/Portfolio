import React from 'react';
import ReactDOM from 'react-dom/client';
import MainView from './components/MainView';
import './styles.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainView />
  </React.StrictMode>
);
