import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
// import axios from 'axios'
// import store from '../store'
import { addNumber } from '../store/features/counter'
import {
  // changeBanners,
  // changeRecommends,
  fetchHomeMultidataAction
} from '../store/features/home'

export class Home extends PureComponent {
  componentDidMount() {
    // axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
    //   const data = res.data.data
    //   const banners = data.banner.list
    //   const recommends = data.recommend.list

    //   store.dispatch(changeBanners(banners))
    //   store.dispatch(changeRecommends(recommends))
    // })

    this.props.fetchHomeMultidata()
  }

  addNumber(num) {
    this.props.addNumber(num)
  }

  render() {
    const { counter } = this.props

    return (
      <div>
        <h2>Home page counter: {counter}</h2>
        <button onClick={e => this.addNumber(5)}>+5</button>
        <button onClick={e => this.addNumber(10)}>+10</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({ counter: state.counter.counter })

const mapDispatchToProps = dispatch => ({
  addNumber(num) {
    dispatch(addNumber(num))
  },
  fetchHomeMultidata() {
    dispatch(fetchHomeMultidataAction())
  }
})
// const mapDispatchToProps = {
//   addNumber(num) {
//     return addNumber(num)
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(Home)