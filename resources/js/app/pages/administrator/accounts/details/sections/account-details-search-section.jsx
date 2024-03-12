import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../redux/account-details-slice'
import store from './../../../../../../store/store'
import { useParams } from 'react-router-dom'
import { get_all_account_details_thunk } from '../redux/account-details-thunk'

export default function AccountDetailsSearchSection() {
    const dispatch = useDispatch()
    const { id } = useParams()

    function submitSearch(e) {
        e.preventDefault()
        store.dispatch(get_all_account_details_thunk(id))
    }
    return (
        <form onSubmit={submitSearch}>
            <div className="relative flex items-center mt-4 md:mt-0">
                <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </span>

                <input
                    onChange={(e) => dispatch(setSearch(e.target.value))}
                    type="text" placeholder="Search" className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
        </form>
    )
}
