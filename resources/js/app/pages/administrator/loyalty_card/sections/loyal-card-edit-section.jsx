import React, { useEffect, useState } from 'react'
import DrawerAction from '../../../../layouts/components/drawer-action'
import { useDispatch, useSelector } from 'react-redux'
import { setLoyalCardForm } from '../redux/loyal-card-slice'
import store from '../../../../../store/store'
import { editLoyalCardThunk } from '../redux/loyal-card-thunk'
import { PencilIcon } from '@heroicons/react/24/outline'

export default function LoyalCardEditSection({ data }) {
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()
    const { loyalCardForm } = useSelector((state) => state.loyal_card);
    const { toastStatus } = useSelector((state) => state.app);

    useEffect(() => {
        if (open) {
            dispatch(setLoyalCardForm({
                ...loyalCardForm,
                id:data.id,
                barcode: data.barcode,
                pincode: data.pincode,
                discount: data.discount,
                fullname: data.fullname,
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
        store.dispatch(editLoyalCardThunk())
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
                                Update Products
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
                                        value={loyalCardForm.fullname ?? ""}
                                        onChange={(e) => dispatch(setLoyalCardForm({
                                            ...loyalCardForm,
                                            fullname: e.target.value
                                        }))}
                                        className=" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="fullname"
                                        type="text"
                                        placeholder="Input fullname" />
                                </div>
                                <div className="mb-2">
                                    <label className="gap-3 flex text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                        Pincode <div className='text-red-500  font-thin'>(Pincode must be 6 digits)</div>
                                    </label>
                                    <input
                                        required
                                        value={loyalCardForm.pincode ?? ""}
                                        onChange={(e) => dispatch(setLoyalCardForm({
                                            ...loyalCardForm,
                                            pincode: e.target.value
                                        }))}
                                        className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="pincode"
                                        type="text"
                                        placeholder="Input pincode"
                                    />

                                </div>
                                <div className="mb-2">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                        Discount
                                    </label>
                                    <input
                                        required
                                        value={loyalCardForm.discount ?? ""}
                                        onChange={(e) => dispatch(setLoyalCardForm({
                                            ...loyalCardForm,
                                            discount: e.target.value.replace(/[^0-9.]/g, '')
                                        }))}
                                        className=" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="discount"
                                        type="text"
                                        placeholder="Input discount" />
                                </div>
                             
                            </div>
                        </div>
                        <div className='flex items-center justify-center w-full flex-none'>
                            <button className='bg-red-500 hover:bg-red-400 p-3 w-full rounded-md text-white font-bold'>Submit</button>
                        </div>
                    </form>
                </div>
            </DrawerAction>
        </div>
    )
}
