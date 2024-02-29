import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    accounts: [],
    loading: false,
    accountsForm:{
      status:'active'
    }
  },
  reducers: {
    setAccounts: (state, action) => {
      state.accounts = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setAccountsForm: (state, action) => {
      state.accountsForm = action.payload
    },
    
  },
})
export const {
  setAccounts,
  setLoading,
  setAccountsForm
} = accountSlice.actions

export default accountSlice.reducer
