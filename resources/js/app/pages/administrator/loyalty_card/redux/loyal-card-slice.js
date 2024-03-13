import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'

export const loyalCardSlice = createSlice({
    name: 'local_card',
    initialState: {
        loyal_cards: [],
        loyalCardForm:{},
        loading: false
    },
    reducers: {
        setLoyalCard: (state, action) => {
            state.loyal_cards = action.payload
        },
        setLoyalCardForm: (state, action) => {
            state.loyalCardForm = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
    },
})
export const {
    setLoyalCard,
    setLoyalCardForm,
    setLoading
 } = loyalCardSlice.actions

export default loyalCardSlice.reducer
