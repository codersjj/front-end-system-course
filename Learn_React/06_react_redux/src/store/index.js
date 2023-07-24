import {
  createStore,
  // applyMiddleware,
  // compose,
  combineReducers
} from "redux";
import { applyMiddleware, log, thunk } from './middleware'

import counterReducer from './counter'
import homeReducer from './home'
import userReducer from './user'

// import thunk from "redux-thunk";

const reducer = combineReducers({
  counter: counterReducer,
  home: homeReducer,
  user: userReducer
})

// redux 中 combineReducers 的实现原理（简化版）
// 具体原理请查看源码：https://github.com/reduxjs/redux/blob/master/src/combineReducers.ts#L123
/*
function reducer(state = {}, action) {
  // 返回一个对象，作为 store 的 state 对象
  return {
    // 当然，第一次的时候，state.counter 是 undefined，action 中也是默认类型
    counter: counterReducer(state.counter, action),
    home: homeReducer(state.home, action),
    user: userReducer(state.user, action)
  }
}
*/

// redux devtools 开启配置
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// 开启 redux devtools 中的 Trace 功能
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

// 正常情况下，store.dispatch(object)
// 要想派发函数：store.dispatch(function)，需要在 createStore 时进行增强
const store = createStore(reducer)

// log(store)
// thunk(store)
applyMiddleware(store, log, thunk)

export default store