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

    // 第一次执行，其实就拿到了各个模块中的初始状态，即：
    // counter: {
    //   counter: 100
    // },
    // home: {
    //   banners: [],
    //   recommends: []
    // },
    // user: {
    //   nickname: '光战士',
    //   level: 100
    // }
  }
}
*/

// redux devtools 开启配置
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// 开启 redux devtools 中的 Trace 功能
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

// 正常情况下，store.dispatch(object)
// 要想派发函数：store.dispatch(function)，需要在 createStore 时进行增强
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

// 对每次派发的 action 进行拦截，做日志打印
function log(store) {
  const next = store.dispatch

  function logAndDispatch(action) {
    console.log('当前派发的 action：', action)
    // 真正派发的代码，使用之前的 dispatch 进行派发
    next(action)
    console.log('派发之后的 state：', store.getState())
  }

  // monkey patch：猴补丁，是一种在不改变原始源代码的情况下扩展或修改动态语言(如Smalltalk、JavaScript、Objective-C、Ruby、Perl、Python、Groovy等)运行时代码的方式。
  store.dispatch = logAndDispatch
}
log(store)

// store.dispatch({ type: 'add_number', num: 100 })

export default store