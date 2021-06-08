import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import {Provider} from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import Reducer from './_reducers';

//promise, function 형식을 store에 저장할수 있게하는 미들웨어를 등록한 redux stroe
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk) (createStore)

ReactDOM.render(
  <BrowserRouter>
    <Provider
      store = {createStoreWithMiddleware(Reducer,
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__() //브라우저 extension
        )}
    >
      <App />
    </Provider>    
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
