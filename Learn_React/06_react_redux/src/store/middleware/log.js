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

export default log