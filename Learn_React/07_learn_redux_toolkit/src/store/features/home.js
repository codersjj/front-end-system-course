import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// createAsyncThunk() 的第一个参数可以在 Redux Devtools 的 Actions 中看到
export const fetchHomeMultidataAction =  createAsyncThunk('fetch/homemultidata', async () => {
  const res = await axios.get('http://123.207.32.32:8000/home/multidata')
  return res.data
})

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
  extraReducers: builder => {
    builder
      .addCase(fetchHomeMultidataAction.pending, (state, action) => {
        console.log('fetchHomeMultidataAction pending~')
      })
      .addCase(fetchHomeMultidataAction.fulfilled, (state, { payload }) => {
        console.log('fetchHomeMultidataAction fulfilled~')
        state.banners = payload.data.banner.list
        state.recommends = payload.data.recommend.list
      })
  }
})

export const { changeBanners, changeRecommends } = homeSlice.actions

export default homeSlice.reducer