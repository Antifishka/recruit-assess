import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <HelmetProvider>
        <Provider store={store}>
          <App />
        </Provider>  
      </HelmetProvider>
    </HashRouter>
  </React.StrictMode>,
)
