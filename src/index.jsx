import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/globalCss/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);