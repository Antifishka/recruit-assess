import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from './constans/theme';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>  
      </ThemeProvider>  
    </HashRouter>
  </React.StrictMode>,
)
