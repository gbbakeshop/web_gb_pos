import React, { useState } from 'react'
import FormFieldInput from '../../../components/Input'
import store from './../../../../store/store'
import { get_specific_product_service } from '../../../../services/products-service'
import { addCartThunk } from '../redux/cashier-thunk'
export default function CashierScannerSection() {
    const [search,setSearch] = useState(' ')
    
 

    function submitSearch(e) {
        e.preventDefault()
        store.dispatch(addCartThunk(get_specific_product_service(search)))
    }
    
    return (
        <div className='m-10'>
            <form onSubmit={submitSearch}>
            <FormFieldInput
                autofocus={true}
                onChange={setSearch}
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
