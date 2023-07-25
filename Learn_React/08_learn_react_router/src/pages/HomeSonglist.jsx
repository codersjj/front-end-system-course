import React, { PureComponent } from 'react'
import { withRouter } from '../hoc'

export class HomeSonglist extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      songMenus: [
        { id: 101, name: '华语流行' },
        { id: 102, name: '民谣歌曲' },
        { id: 103, name: '古典音乐' }
      ]
    }
  }

  navigateToDetail(id) {
    const { navigate } = this.props.router
    navigate(`/detail/${id}`)
  }

  render() {
    const { songMenus } = this.state

    return (
      <div>
        <h4>HomeSonglist page</h4>
        <ul>
          {
            songMenus.map(item => {
              return <li key={item.id} onClick={e => this.navigateToDetail(item.id)}>{item.name}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default withRouter(HomeSonglist)