import { applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import { configureStore } from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};
const middleware = [thunk];

const store = configureStore(
    {reducer:rootReducer},
    initialState,
    composeWithDevTools(
      applyMiddleware(...middleware),
      (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()))
  );

export default store;
