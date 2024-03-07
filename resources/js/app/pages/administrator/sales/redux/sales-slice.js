import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'

export const salesSlice = createSlice({
  name: 'sales',
  initialState: {
    sales: [],
  },
  reducers: {
    setSales: (state, action) => {
      state.sales = action.payload
    },
  },
})
export const { 
    setSales, 
  } = salesSlice.actions

export default salesSlice.reducer
