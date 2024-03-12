import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'

export const accountDetailsSlice = createSlice({
    name: 'accountDetails',
    initialState: {
        account_details: [],
        search: ''
    },
    reducers: {
        setAccountDetails: (state, action) => {
            state.account_details = action.payload
        },
        setSearch: (state, action) => {
            state.search = action.payload
        },
    },
})
export const {
    setAccountDetails,
    setSearch,
} = accountDetailsSlice.actions

export default accountDetailsSlice.reducer
