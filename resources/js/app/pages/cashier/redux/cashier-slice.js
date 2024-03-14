import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'

export const cashierSlice = createSlice({
  name: 'cashier',
  initialState: {
    value: 0,
    cart: JSON.parse(localStorage.getItem('cart')) ?? [],
    selectedItem: null,
    payment: {
      receipt_id: undefined,
      cashier_id: 0,
      discount: 0,
      tax: 0,
      subtotal: 0,
      total: 0,
      tenders: 0,
      change: 0
    },
    loading: false,
    isPrint: false,
    search: ''
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
        total: state.cart.reduce((acc, obj) => acc + obj.total, 0).toFixed(2)
      }
    },
    changesCart: (state, action) => {
      state.cart = action.payload
      state.payment = {
        ...state.payment,
        total: state.cart.reduce((acc, obj) => acc + obj.total, 0).toFixed(2)
      }
    },
    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload
    },
    changeTenders: (state, action) => {
      const payload = action.payload.value.replace(/[^0-9.]/g, '');
      state.payment = {
        ...state.payment,
        cashier_id: action.payload.cashier_id,
        receipt_id: state.payment.receipt_id ?? Math.floor(1000000000000 + Math.random() * 90000000000000),
        tenders: payload,
        change: (parseFloat(payload) - parseFloat(state.payment.total)).toFixed(2)
      }
    },
    resetPayment: (state) => {
      state.payment = {
        receipt_id: undefined,
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
    setSearch: (state, action) => {
      state.search = action.payload
    },
    setDiscount: (state, action) => {
      console.log(parseFloat(state.cart.reduce((acc, obj) => acc + obj.total, 0).toFixed(2)) * parseFloat(action.payload))
      state.payment = {
        ...state.payment,
        discount: parseFloat(action.payload),
        subtotal:parseFloat(state.cart.reduce((acc, obj) => acc + obj.total, 0).toFixed(2)),
        total: parseFloat(state.cart.reduce((acc, obj) => acc + obj.total, 0).toFixed(2)) - (parseFloat(state.cart.reduce((acc, obj) => acc + obj.total, 0).toFixed(2)) * parseFloat(action.payload))
      }
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
  setIsPrint,
  setSearch,
  changesCart,
  setDiscount
} = cashierSlice.actions

export default cashierSlice.reducer
