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

// 异步请求
// https://redux.js.org/tutorials/essentials/part-5-async-logic#thunks-and-async-logic
export const fetchEntireListAction = () => {
  // 返回新的函数
  return async (dispatch, getState) => {
    // 根据页码获取最新的数据
    const currentPage = getState().entire.currentPage
    const res = await getEntireList(currentPage * 20)

    // 将最新的数据保存到 redux 的 store 中
    dispatch(changeRoomListAction(res.list))
    dispatch(changeTotalCountAction(res.totalCount))
  }
}