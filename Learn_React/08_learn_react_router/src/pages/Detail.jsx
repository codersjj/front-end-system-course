import React, { PureComponent } from 'react'
import { withRouter } from '../hoc'

export class Detail extends PureComponent {
  render() {
    // console.log(this.props.router)
    // 拿到高阶组件中获取的动态路由参数
    const { id } = this.props.router.params

    return (
      <div>
        <h4>Detail page</h4>
        <h5>id: {id}</h5>
      </div>
    )
  }
}

export default withRouter(Detail)