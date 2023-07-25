import React, { PureComponent } from 'react'

export class HomeRanking extends PureComponent {
  render() {
    return (
      <div>
        <h4>HomeRanking Nav</h4>
        <h4>榜单数据</h4>
        {/* ul>li{歌曲数据$$}*5 */}
        <ul>
          <li>歌曲数据01</li>
          <li>歌曲数据02</li>
          <li>歌曲数据03</li>
          <li>歌曲数据04</li>
          <li>歌曲数据05</li>
        </ul>
      </div>
    )
  }
}

export default HomeRanking