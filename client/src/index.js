import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "../src/redux/store/store";
import axios from "axios"
import { Auth0Provider } from '@auth0/auth0-react';

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider domain="dev-exhdae031l82yw7p.us.auth0.com" clientId='O3VyD2cF1ZuSKhQUmHnJBDaCMFMM0ajM' redirectUri={window.location.origin}>
        <App />
      </Auth0Provider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
