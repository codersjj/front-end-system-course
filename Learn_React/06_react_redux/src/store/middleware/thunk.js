function thunk(store) {
  const next = store.dispatch

  function dispatchThunk(action) {
    if (typeof action === 'function') {
      // 函数中可能会继续出现 dispatch(function) 的情况，所以这里传给 action 的第一个参数是 store.dispatch，而不是 next
      action(store.dispatch, store.getState)
    } else {
      next(action)
    }
  }

  store.dispatch = dispatchThunk
}

export default thunk