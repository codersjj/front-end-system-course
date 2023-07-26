import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      count: 100
    }
  }

  // 在生命周期函数中修改标题
  componentDidMount() {
    document.title = this.state.count
  }

  componentDidUpdate() {
    console.log('componentDidUpdate~')
    document.title = this.state.count
  }

  render() {
    const { count } = this.state

    return (
      <div>
        <h2>计数: {count}</h2>
        <button onClick={e => this.setState({ count: count + 1 })}>+1</button>
      </div>
    )
  }
}

export default App