import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'

export const cashierSlice = createSlice({
  name: 'cashier',
  initialState: {
    value: 0,
    cart: [],
    selectedItem: null,
    payment: {
      cashier_id: 0,
      discount: 0,
      tax: 0,
      subtotal: 0,
      total: 0,
      tenders: 0,
      change: 0
    },
    loading: false,
    isPrint:false
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.value = action.payload
    },
    setCart: (state, action) => {
      state.cart = [
        ...state.cart,
        action.payload
      ];
      state.payment = {
        ...state.payment,
        total: state.cart.reduce((acc, obj) => acc + obj.price, 0).toFixed(2)
      }
    },
    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload
    },
    changeTenders: (state, action) => {
      const payload = action.payload.replace(/[^0-9.]/g, '');
      state.payment = {
        ...state.payment,
        tenders: payload,
        change: (parseFloat(payload) - parseFloat(state.payment.total)).toFixed(2)
      }
    },
    resetPayment: (state) => {
      state.payment = {
        cashier_id: 0,
        discount: 0,
        tax: 0,
        subtotal: 0,
        total: 0,
        tenders: 0,
        change: 0
      }
      state.cart = []
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setIsPrint: (state, action) => {
      state.isPrint = action.payload
    },
  },
})
export const {
  incrementByAmount,
  setCart,
  setSelectedItem,
  changeTenders,
  setLoading,
  resetPayment,
  setIsPrint
} = cashierSlice.actions

export default cashierSlice.reducer
