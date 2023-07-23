import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 888
  },
  reducers: {
    addNumber(state, { payload }) {
      // 这里我们不需要再返回一个新的 state
      // Redux Toolkit 中允许在 reducer 中“直接修改”状态，这并不会真正改变状态，因为它使用了 Immer 库，Immer 库能检测到“草稿状态”的变化，并基于这些变化产生一个全新的不可变状态。
      state.counter += payload
    },
    subNumber(state, action) {
      console.log("🚀 ~ file: counter.js:13 ~ subNumber ~ action:", action)
      state.counter -= action.payload
    }
  }
})

// 先解构再导出
export const { addNumber, subNumber } = counterSlice.actions
// 等价于
// const { addNumber, subNumber } = counterSlice.actions
// export {
//   addNumber,
//   subNumber
// }

export default counterSlice.reducer