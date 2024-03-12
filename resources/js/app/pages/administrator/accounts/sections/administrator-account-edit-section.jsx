import React, { useEffect, useState } from 'react'
import DrawerAction from '../../../../layouts/components/drawer-action'
import { useDispatch, useSelector } from 'react-redux'
import store from '../../../../../store/store'
import { PencilIcon } from '@heroicons/react/24/outline'
import { setAccountsForm } from '../redux/account-slice'
import { editAccountThunk } from '../redux/account-thunk'

export default function AdministratorAccountEditSection({ data }) {
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()
    const { toastStatus } = useSelector((state) => state.app);
    const { accountsForm } = useSelector((state) => state.accounts);
    useEffect(() => {
        if (open) {
            dispatch(setAccountsForm({
                ...accountsForm,
                id:data.id,
                name: data.name,
                email: data.email,
                role: data.role,
                contact: data.contact,
                status: data.status,
            }))
        }
    }, [open]);

    useEffect(() => {
        if (toastStatus.status == 'success') {
            setOpen(false)
        }
    }, [toastStatus.status]);

    function submitData(e) {
        e.preventDefault()
        store.dispatch(editAccountThunk())
    }

    return (
        <div>

            <DrawerAction
                open={open}
                setOpen={setOpen}
                button={
                    <button
                        onClick={() => setOpen(true)}
                        className=" text-blue-500">
                        <PencilIcon className='h-6' />
                    </button>
                }
            >
                <div className='flex h-full w-full'>
                <form
                        onSubmit={submitData}
                        className=" flex flex-col w-full">
                        <div className='flex-none'>
                            <div className='text-2xl font-bold'>
                                Edit Account
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
                                        Role
                                    </label>
                                    <select name="role" id="role"
                                        className=" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        onChange={(e) => dispatch(setAccountsForm({
                                            ...accountsForm,
                                            role: e.target.value
                                        }))}>
                                        <option selected={accountsForm.role == 'admin'} value="admin">Admin</option>
                                        <option selected={accountsForm.role == 'cashier'} value="cashier">Cashier</option>
                                    </select>

                                </div>
                                <div className="mb-2">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                        Status
                                    </label>
                                    <select name="status" id="status"
                                        className=" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        onChange={(e) => dispatch(setAccountsForm({
                                            ...accountsForm,
                                            status: e.target.value
                                        }))}>
                                        <option selected={accountsForm.status == 'Active'} value="Active">Active</option>
                                        <option selected={accountsForm.status == 'Block'} value="Block">Block</option>
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
