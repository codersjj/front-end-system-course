import React, { PureComponent } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { changeBannersAction, changeRecommendsAction } from '../store'

export class Category extends PureComponent {
  // 在 Category 组件中发送网络请求，获取数据并存储到 store 中，之后在 About 组件中使用该数据做页面展示
  componentDidMount() {
    axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
      const banners = res.data.data.banner.list
      const recommends = res.data.data.recommend.list
      console.log(banners, recommends)

      this.props.changeBanners(banners)
      this.props.changeRecommends(recommends)
    })
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
  changeBanners: banners => dispatch(changeBannersAction(banners)),
  changeRecommends: recommends => dispatch(changeRecommendsAction(recommends))
})

export default connect(null, mapDispatchToProps)(Category)