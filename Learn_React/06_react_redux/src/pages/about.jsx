import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

export class About extends PureComponent {
  render() {
    const { counter } = this.props

    return (
      <div>
        <h2>About Page counter: {counter}</h2>
      </div>
    )
  }
}

// 将当前组件中需要用到的数据映射出来
// connect(mapStateToProps) 函数中会将 store 中的 state 传给 mapStateToProps 函数
// function mapStateToProps(state) {
//   return {
//     counter: state.counter
//   }
// }

const mapStateToProps = state => ({ counter: state.counter })

// 通过 react-redux 中的 connect 函数将 About 组件与 index.js 中使用的 react-redux 中的 Provider 上传入的 store 关联起来
// connect() 函数会返回一个高阶组件（本身又是一个函数）
// connect 内部会将传入函数返回的对象作为 props 的一部分进行传递，类似于 <About {...this.props} {...obj} />
export default connect(mapStateToProps)(About)