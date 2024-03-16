import React, { useEffect, useState } from 'react'
import DrawerAction from '../../../../layouts/components/drawer-action'
import { useDispatch, useSelector } from 'react-redux'
import { setAccountsForm } from '../redux/account-slice'
import store from '../../../../../store/store'
import { createAccountThunk } from '../redux/account-thunk'

export default function AdministratorCreateAccountSection() {
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()
    const { accountsForm } = useSelector((state) => state.accounts);
    const { toastStatus } = useSelector((state) => state.app);

    useEffect(() => {
        if (toastStatus.status == 'success') {
            setOpen(false)
        }
    }, [toastStatus.status]);

    function submitData(e) {
        e.preventDefault()
        store.dispatch(createAccountThunk())
    }
    return (
        <div>

            <DrawerAction
                open={open}
                setOpen={setOpen}
                button={
                    <button
                        onClick={() => setOpen(true)}
                        className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600  hover:bg-blue-500  bg-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                        <span>Create Account</span>
                    </button>
                }
            >
                <div className='flex h-full w-full'>
                    <form
                        onSubmit={submitData}
                        className=" flex flex-col w-full">
                        <div className='flex-none'>
                            <div className='text-2xl font-bold'>
                                Create Account
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div>
                                <div className="mb-2">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                        Fullname
                                    </label>
                                    <input
                                        required
                                        value={accountsForm.name ?? ""}
                                        onChange={(e) => dispatch(setAccountsForm({
                                            ...accountsForm,
                                            name: e.target.value
                                        }))}
                                        className=" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="name"
                                        type="text"
                                        placeholder="Input name" />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                        Email
                                    </label>
                                    <input
                                        required
                                        value={accountsForm.email ?? ""}
                                        onChange={(e) => dispatch(setAccountsForm({
                                            ...accountsForm,
                                            email: e.target.value
                                        }))}
                                        className=" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="email"
                                        placeholder="Input email" />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                        Password
                                    </label>
                                    <input
                                        required
                                        value={accountsForm.password ?? ""}
                                        onChange={(e) => dispatch(setAccountsForm({
                                            ...accountsForm,
                                            password: e.target.value
                                        }))}
                                        className=" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="password"
                                        type="text"
                                        placeholder="Input password" />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                        Role
                                    </label>
                                    <select name="role" id="role"
                                        className=" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        onChange={(e) => dispatch(setAccountsForm({
                                            ...accountsForm,
                                            role: e.target.value
                                        }))}>
                                        <option disabled selected>Select Role</option>
                                        <option value="admin">Admin</option>
                                        <option value="cashier">Cashier</option>
                                    </select>

                                </div>
                                <div className="mb-2">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                        Contact
                                    </label>
                                    <input
                                        required
                                        value={accountsForm.contact ?? ""}
                                        onChange={(e) => dispatch(setAccountsForm({
                                            ...accountsForm,
                                            contact: e.target.value
                                        }))}
                                        className=" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="contact"
                                        type="number"
                                        placeholder="Input contact" />
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center w-full flex-none'>
                            <button className='bg-red-500 hover:bg-red-600 p-3 w-full rounded-md text-white font-bold'>Submit</button>
                        </div>
                    </form>
                </div>
            </DrawerAction>
        </div>
    )
}
