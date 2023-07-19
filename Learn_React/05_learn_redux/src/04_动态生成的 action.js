/*
  redux 代码优化：
    1. 编写函数，动态生成想要派发的 action；
    2. 将定义的所有用来生成 action 的函数抽取到独立的 createActions.js 文件中，以便共享；
    3. 创建 action 的函数中和 reducer 函数中使用的字符串常量是一致的，所以将常量抽取到一个独立的 constants.js 文件中；
    4. 将 index.js 中的 initialState 和 reducer 抽取到 reducer.js 文件中，再进行引入，精简 index.js 文件；
*/

const store = require('./store')
const { changeNameAction, addNumberAction } = require('./store/actionCreators')

// 订阅（在 react 中通常在组件的 componentDidMount 生命周期函数中做订阅操作）
const unsubscribe = store.subscribe(() => {
  console.log('订阅数据的变化：', store.getState())
})

// 修改 store 中的数据（state）：必须通过派发（dispatch） action 实现
// 修改 name
store.dispatch(changeNameAction('alan'))

store.dispatch(changeNameAction('lele'))

// 取消订阅（在 react 中通常在组件的 componentWillUnmount 生命周期函数中做取消订阅操作），后续的状态更新将不再被监听到
// unsubscribe()

// 修改 counter
store.dispatch(addNumberAction(10))
store.dispatch(addNumberAction(20))
store.dispatch(addNumberAction(30))
store.dispatch(addNumberAction(100))