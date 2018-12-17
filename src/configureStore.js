import { createStore, applyMiddleware } from 'redux';
// import thunkMiddleware from "redux-thunk";
import logger from 'redux-logger';
import mainReducer from "./reducers/index.js";

const store = createStore(mainReducer, applyMiddleware(logger))

export default store;