import { createStore, applyMiddleware, compose, combineReducers } from "redux";

import counterReducer from './counter'
import homeReducer from './home'
import userReducer from './user'

import thunk from "redux-thunk";

const reducer = combineReducers({
  counter: counterReducer,
  home: homeReducer,
  user: userReducer
})

// redux devtools 开启配置
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// 开启 redux devtools 中的 Trace 功能
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

// 正常情况下，store.dispatch(object)
// 要想派发函数：store.dispatch(function)，需要在 createStore 时进行增强
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store