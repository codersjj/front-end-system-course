import React, { PureComponent } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { fetchHomeMultidataAction } from '../store'

export class Category extends PureComponent {
  // 在 Category 组件的 componentDidMount 生命周期函数中直接调用映射的方法，而异步网络请求代码则放到 store 中去做
  componentDidMount() {
    this.props.fetchHomeMultidata()
  }

  render() {
    return (
      <div>
        <h2>Category page</h2>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchHomeMultidata: () => dispatch(fetchHomeMultidataAction())
})

export default connect(null, mapDispatchToProps)(Category)