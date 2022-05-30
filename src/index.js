import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';
import { ThemeProvider } from './Context';
const root = createRoot(document.getElementById('root'))
root.render(
  <ThemeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);

