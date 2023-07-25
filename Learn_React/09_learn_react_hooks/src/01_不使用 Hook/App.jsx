import React, { PureComponent } from 'react'

// 类组件存在的问题：
// 1. 复杂组件变得难以理解
// 2. 难以理解的 class
// 3. 组件复用状态很难
class HelloWord extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      message: 'Hello World'
    }
  }

  changeText() {
    this.setState({ message: '你好，世界！' })
  }

  render() {
    const { message } = this.state

    return (
      <div>
        <h2>内容：{message}</h2>
        <button onClick={e => this.changeText()}>修改文本</button>
      </div>
    )
  }
}

function HelloWorld2(props) {
  let message = 'Hello World'

  // 函数式组件存在的最大的缺陷：
  // 1. 组件不会被重新渲染：修改 message 之后，组件是不知道自己要重新渲染的
  // 2. 即使页面会重新渲染，那么函数会被重新执行，意味着会重新给 message 赋值为 'Hello World'
  // 3. 类似于生命周期的回调函数也是没有的

  return (
    <div>
      <h2>内容：{message}</h2>
      <button onClick={e => message = '你好，世界！'}>修改文本</button>
    </div>
  )
}

export class App extends PureComponent {
  render() {
    return (
      <div>
        <HelloWord />
        <hr />
        <HelloWorld2 />
      </div>
    )
  }
}

export default App