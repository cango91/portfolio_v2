import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from './contexts/ThemeContext';
import ReactGA from 'react-ga4';
import { LangProvider } from './contexts/LangContext';
ReactGA.initialize('G-DFWZWR80MF');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <LangProvider>
        <App />
      </LangProvider>
    </ThemeProvider>
  </React.StrictMode>
);
