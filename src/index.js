import React from 'react';
import { render } from 'react-dom';

// Load Compiled TailwindCSS
import './css/main.css';

// Load Main App Component
import App from './App';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
