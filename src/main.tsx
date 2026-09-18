import React from 'react';
import ReactDOM from 'react-dom/client';
// Design-system layer first: page styles and src/styles/base.css intentionally
// override its :root tokens with the Credence gold-on-near-black palette.
import './styles/nocturne.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
