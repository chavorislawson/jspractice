"use strict";
const JSX = <h1>Hello JSX!</h1>;
ReactDOM.render(JSX, document.getElementById('root'));
//Need to download react stuff and not sure if that first part work, but I do know that the JSX stuff needs to be converted
/*
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './redux/reducers'
import App from './components/App'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
*/