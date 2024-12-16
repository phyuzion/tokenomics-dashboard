import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App.js';
import { ContextProvider } from './contexts/ContextProvider';
import { Buffer } from 'buffer';
window.Buffer = Buffer;

ReactDOM.render(
  <>
    <ContextProvider>
      <App />
    </ContextProvider>
  </>,
  document.getElementById('root'),
);
