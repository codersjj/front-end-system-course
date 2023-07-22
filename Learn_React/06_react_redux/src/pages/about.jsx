import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
// import store from '../store'
import { addNumberAction, subNumberAction } from '../store/counter'

export class About extends PureComponent {
  calcNumber(num, isAdd) {
    if (isAdd) {
      console.log('加', num)
      // 组件中直接使用 store，耦合度有点高，如何解耦呢？如何把 dispatch action 这一操作从组件中移出去呢？
      // store.dispatch(addNumberAction(num))

      // 我们可以通过 react-redux 的 connect 函数实现组件与 store 的解耦，把 store.dispatch 操作放到 connect 中去做，组件中就不再需要引入 store 了，而是直接从 props 中拿到 mapDispatchToProps 函数返回的对象中的函数来执行
      this.props.addNumber(num)
    } else {
      console.log('减', num)
      // store.dispatch(subNumberAction(num))
      this.props.subNumber(num)
    }
  }

  render() {
    // step 2: 在 render() 函数中从 props 中获取相应的数据
    const {
      counter,
      banners,
      recommends,
      userInfo
    } = this.props

    return (
      <div>
        <h2>About Page counter: {counter}</h2>
        <div className='user'>
          <h3>nickname: {userInfo.nickname}</h3>
        </div>
        <button onClick={e => this.calcNumber(1, true)}>+1</button>
        <button onClick={e => this.calcNumber(1, false)}>-1</button>
        {/* step 3: 拿到数据后在页面中进行展示 */}
        <div className='banner'>
          <h2>轮播图数据：</h2>
          <ul>
            {
              banners.map((item, index) => {
                return <li key={index}>{item.title}</li>
              })
            }
          </ul>
        </div>
        <div className='recommend'>
          <h2>推荐数据：</h2>
          <ul>
            {
              recommends.map((item, index) => {
                return <li key={index}>{item.title}</li>
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

// 将当前组件中需要用到的数据映射出来（返回的对象中的数据会映射到 props 中）
// connect(mapStateToProps) 函数中会将 store 中的 state 传给 mapStateToProps 函数
// function mapStateToProps(state) {
//   return {
//     counter: state.counter
//   }
// }

// step 1: 从 store 的 state 中映射出需要的数据
const mapStateToProps = state => ({
  counter: state.counter.counter,
  banners: state.home.banners,
  recommends: state.home.recommends,
  userInfo: state.user.userInfo
})

// 对 dispatch 操作进行映射（返回的对象中的函数会映射到 props 中）
// function mapDispatchToProps(dispatch) {
//   return {
//     addNumber: function(num) {
//       dispatch(addNumberAction(num))
//     },
//     subNumber: function(num) {
//       dispatch(subNumberAction(num))
//     }
//   }
// }

const mapDispatchToProps = dispatch => ({
  addNumber: num => dispatch(addNumberAction(num)),
  subNumber: num => dispatch(subNumberAction(num))
})

// 通过 react-redux 中的 connect 函数将 About 组件与 index.js 中使用的 react-redux 中的 Provider 上传入的 store 关联起来
// connect() 函数是一个高阶函数，接收另外两个函数作为参数，返回值是一个高阶组件（也是一个函数，接收一个组件作为参数）
// connect 内部会将传入函数返回的对象作为 props 的一部分进行传递，类似于 <About {...this.props} {...obj} />
export default connect(mapStateToProps, mapDispatchToProps)(About)