import React, { PureComponent } from 'react'
import Home from './pages/home'
import Profile from './pages/profile'
import './style.css'
import store from './store'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      // 这里确实产生了依赖，但是：
      // 第一，这只会在初始化的时候依赖；
      // 第二，后续会对此代码做优化；
      // 第三，后面我们不会这么写，但是底层在帮我们做这种事情；
      counter: store.getState().counter
    }
  }

  componentDidMount() {
    // 订阅（store 中的状态发生变化时执行传入的回调函数，因此初始化时不会执行，意味着一开始的值不是 store 中的 initialState 里的值，要想初始化时就是 initialState 中的值，需要在 constructor 中用 store 中的值给 this.state 中的内容赋值）
    store.subscribe(() => {
      console.log('store subscribe callback~')
      // 获取 store 中最新的 state
      const state = store.getState()
      // 更新当前组件中的 state，之后会重新执行 render() 函数
      this.setState({ counter: state.counter })
    })
  }

  render() {
    const { counter } = this.state

    return (
      <div>
        <h2>App counter: {counter}</h2>

        <div className='pages'>
          <Home />
          <Profile />
        </div>
      </div>
    )
  }
}

export default App