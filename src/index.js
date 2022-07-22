import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';
import { ThemeProvider } from './Context';
import { ApolloProvider } from "@apollo/client";
import client from 'utils/apolloClient';
const root = createRoot(document.getElementById('root'))
root.render(
  <ThemeProvider>
    <React.StrictMode>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
    </React.StrictMode>
  </ThemeProvider>
);
