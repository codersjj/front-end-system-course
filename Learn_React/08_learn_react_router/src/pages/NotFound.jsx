import React, { PureComponent } from 'react'

export class NotFound extends PureComponent {
  render() {
    return (
      <div>
        <h3>Not Found Page</h3>
        <p>当前页面不存在，请检查路径是否正确或联系管理员</p>
      </div>
    )
  }
}

export default NotFound