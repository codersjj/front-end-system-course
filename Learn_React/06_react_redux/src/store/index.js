import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer)

export * from './actionCreators'
export default store