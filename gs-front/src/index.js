import React from "react";
import ReactDOM from "react-dom";

import { Router } from "react-router-dom";
import history from "./history";

import { createStore } from 'redux';
import { Provider } from "react-redux";
import reducer from './Redux'
import { loadState, saveState } from './Redux/LocalStore/index';

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";


const initialData = loadState();
const store = createStore(reducer, initialData);

store.subscribe(function() {
	saveState(store.getState());
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
