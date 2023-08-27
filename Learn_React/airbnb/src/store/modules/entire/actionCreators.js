import { getEntireList } from '@/services/modules/entire'
import * as actionTypes from './constants'

export const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage
})

export const changeRoomListAction = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList
})

export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount
})

export const changeIsLoadingAction = (isLoading) => ({
  type: actionTypes.CHANGE_IS_LOADING,
  isLoading
})

// 异步请求
// https://redux.js.org/tutorials/essentials/part-5-async-logic#thunks-and-async-logic
// rtk 中已经默认集成了 redux-thunk，所以我们不需要再进行安装
// https://redux.js.org/tutorials/essentials/part-5-async-logic#thunks-and-async-logic:~:text=The%20most%20common%20async,logic%20with%20Redux.
export const fetchEntireListAction = (page = 0) => {
  // 返回新的函数
  return async (dispatch) => {
    // 修改 currentPage
    dispatch(changeCurrentPageAction(page))

    dispatch(changeIsLoadingAction(true))
    // 根据页码获取最新的数据
    const res = await getEntireList(page * 20)
    dispatch(changeIsLoadingAction(false))

    // 将最新的数据保存到 redux 的 store 中
    dispatch(changeRoomListAction(res.list))
    dispatch(changeTotalCountAction(res.totalCount))
  }
}