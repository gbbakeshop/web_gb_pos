import React, { useEffect, useState } from 'react'
import DrawerAction from '../../../../layouts/components/drawer-action'
import { useDispatch, useSelector } from 'react-redux'
import store from '../../../../../store/store'
import { KeyIcon } from '@heroicons/react/24/outline'
import { changeAccountPasswordThunk } from '../redux/account-thunk'

export default function AdministratorAccountChangePasswordSection({ data }) {
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()
    const { toastStatus } = useSelector((state) => state.app);
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (toastStatus.status == 'success') {
            setOpen(false)
        }
    }, [toastStatus.status]);

    function submitData(e) {
        e.preventDefault()
        store.dispatch(changeAccountPasswordThunk({
            id: data.id,
            password: password,
        }))
        setPassword('')
    }

    return (
        <div>

            <DrawerAction
                open={open}
                setOpen={setOpen}
                button={
                    <button
                        onClick={() => setOpen(true)}
                        className=" text-green-500">
                        <KeyIcon className='h-6' />
                    </button>
                }
            >
                <div className='flex h-full w-full'>
                    <form
                        onSubmit={submitData}
                        className=" flex flex-col w-full">
                        <div className='flex-none'>
                            <div className='text-2xl font-bold'>
                                Change Password
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div className="mb-2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                    New Password
                                </label>
                                <input
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
                                    className=" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="text"
                                    placeholder="Input password" />
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
