const store = require('./store')

// 订阅（在 react 中通常在组件的 componentDidMount 生命周期函数中做订阅操作）
const unsubscribe = store.subscribe(() => {
  console.log('订阅数据的变化：', store.getState())
})

// 修改 store 中的数据（state）：必须通过派发（dispatch） action 实现
// 修改 name
store.dispatch({ type: 'change_name', name: 'alan' })

store.dispatch({ type: 'change_name', name: 'lele' })

// 取消订阅（在 react 中通常在组件的 componentWillUnmount 生命周期函数中做取消订阅操作），后续的状态更新将不再被监听到
unsubscribe()

// 修改 counter
store.dispatch({ type: 'add_number', num: 10 })