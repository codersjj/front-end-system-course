import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";

// 正常情况下，store.dispatch(object)
// 要想派发函数：store.dispatch(function)，需要在 createStore 时进行增强
const store = createStore(reducer, applyMiddleware(thunk))

export * from './actionCreators'
export default store