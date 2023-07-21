import * as actionTypes from './constants'
import axios from 'axios'

export const addNumberAction = num => ({ type: actionTypes.ADD_NUMBER, num })
export const subNumberAction = num => ({ type: actionTypes.SUB_NUMBER, num })

export const changeBannersAction = banners => ({ type: actionTypes.CHANGE_BANNERS, banners })
export const changeRecommendsAction = recommends => ({ type: actionTypes.CHANGE_RECOMMENDS, recommends })

export const fetchHomeMultidataAction = () => {
  // 如果是一个普通的 action，这里需要返回 action 对象
  // 问题：对象中不能直接拿到从服务器请求的异步数据
  // return {}

  // 对于异步请求，我们可以返回一个函数，在该函数中发送网络请求，获取请求数据后再想办法拿到 dispatch 并派发 action
  // 但默认情况下，这里 redux 是不支持我们返回函数的，所以我们还要使用 react 的中间件功能以及中间件 redux-thunk
  return function(dispatch, getState) {
    // console.log('function 被执行了~', getState().counter)

    axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
      const banners = res.data.data.banner.list
      const recommends = res.data.data.recommend.list
      // console.log(banners, recommends)

      dispatch(changeBannersAction(banners))
      dispatch(changeRecommendsAction(recommends))
    })
  }
}