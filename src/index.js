import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
 import store from './Middleware_reduxeStore'
 import persistStore from "redux-persist/es/persistStore";
 import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// import { Provider } from 'react-redux';
const persistedStore = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
    <App />
    </PersistGate>
        </Provider>
    {/* </Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
