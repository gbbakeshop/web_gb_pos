import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        productForm:{},
        loading: false
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },
        setProductForm: (state, action) => {
            state.productForm = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
    },
})
export const {
    setProducts,
    setRecipes,
    setProductForm,
 } = productsSlice.actions

export default productsSlice.reducer
