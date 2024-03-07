import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    value: 0,
    tab: 'daily',
    year:moment().format('Y'),
    analytics: [],
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.value = action.payload
    },
    setTab: (state, action) => {
      state.tab = action.payload
    },
    setAnalytics: (state, action) => {
      state.analytics = action.payload
    },
    setYear: (state, action) => {
      state.year = action.payload
    },
  },
})
export const {
  incrementByAmount,
  setTab,
  setAnalytics,
  setYear
 } = dashboardSlice.actions

export default dashboardSlice.reducer
