import React, { PureComponent } from 'react'
import { Link, Outlet } from 'react-router-dom'

export class Home extends PureComponent {
  render() {
    return (
      <div>
        <h3>Home page</h3>
        <div className="home-nav">
          <Link to='/home/recommend'>推荐</Link>
          <Link to='/home/ranking'>排行榜</Link>
        </div>

        {/* 占位的组件，作为子组件的占位元素 */}
        <Outlet />
      </div>
    )
  }
}

export default Home