import React, { useState } from 'react'
import FormFieldInput from '../../../components/Input'
import store from './../../../../store/store'
import { get_specific_product_service } from '../../../../services/products-service'
import { addCartThunk } from '../redux/cashier-thunk'
import { useDispatch, useSelector } from 'react-redux'
import { setSearch } from '../redux/cashier-slice'
export default function CashierScannerSection() {
    const { search } = useSelector((state) => state.cashier);
    const dispatch = useDispatch()

    async function submitSearch(e) {
        e.preventDefault()
        await store.dispatch(addCartThunk(get_specific_product_service(search)))
    }
    function getSearch(value) {
        dispatch(setSearch(value))
    }
    return (
        <div className='m-10'>
            <form onCutCapture={submitSearch} onSubmit={submitSearch}>
            <FormFieldInput
                autofocus={true}
                onChange={getSearch}
                value={search}
                name="search"
                type="text"
                label="Scanning Item"
                // errorMessage="Searching..."
            />
            </form>
        </div>
    )
}
