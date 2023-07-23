import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// createAsyncThunk() 的第一个参数可以在 Redux Devtools 的 Actions 中看到
export const fetchHomeMultidataAction =  createAsyncThunk(
  'fetch/homemultidata',
  async (arg, { dispatch }) => {
    console.log("🚀 ~ file: home.js:6 ~ fetchHomeMultidataAction ~ arg:", arg)
    // 1. 发送网络请求，获取数据
    const res = await axios.get('http://123.207.32.32:8000/home/multidata')

    // 2. 取出数据
    const data = res.data.data
    const banners = data.banner.list
    const recommends = data.recommend.list
    // 之后可以在此处直接 dispatch，或者返回数据，交给 extraReducers 处理
    dispatch(changeBanners(banners))
    dispatch(changeRecommends(recommends))

    // 使用上面这种方式派发 action 时，这里可以不用返回数据给 extraReducers 做处理了，当然，也可以返回数据
    // 3. 返回结果，那么 action 状态会变成 fulfilled
    // return res.data
  }
)

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    banners: [],
    recommends: []
  },
  reducers: {
    changeBanners(state, { payload }) {
      state.banners = payload
    },
    changeRecommends(state, { payload }) {
      state.recommends = payload
    }
  },
  // extraReducers: {
  //   [fetchHomeMultidataAction.pending](state, action) {
  //     console.log('fetchHomeMultidataAction pending~')
  //   },
  //   [fetchHomeMultidataAction.fulfilled](state, action) {
  //     console.log('fetchHomeMultidataAction fulfilled~', state, action)
  //     state.banners = action.payload.data.banner.list
  //     state.recommends = action.payload.data.recommend.list
  //   },
  //   [fetchHomeMultidataAction.rejected](state, action) {
  //     console.log('fetchHomeMultidataAction rejected~')
  //   }
  // }
  // extraReducers: builder => {
  //   builder
  //     .addCase(fetchHomeMultidataAction.pending, (state, action) => {
  //       console.log('fetchHomeMultidataAction pending~')
  //     })
  //     .addCase(fetchHomeMultidataAction.fulfilled, (state, { payload }) => {
  //       console.log('fetchHomeMultidataAction fulfilled~')
  //       state.banners = payload.data.banner.list
  //       state.recommends = payload.data.recommend.list
  //     })
  // }
})

export const { changeBanners, changeRecommends } = homeSlice.actions

export default homeSlice.reducer