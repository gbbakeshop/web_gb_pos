import React, { useEffect, useState } from 'react'
import DrawerAction from '../../../../layouts/components/drawer-action'
import { useDispatch, useSelector } from 'react-redux'
import { setLoyalCardForm } from '../redux/loyal-card-slice'
import store from '../../../../../store/store'
import { createLoyalCardThunk } from '../redux/loyal-card-thunk'
import moment from 'moment'

export default function LoyalCardCreateSection() {
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()

    const { loyalCardForm } = useSelector((state) => state.loyal_card);
    const { toastStatus } = useSelector((state) => state.app);

    useEffect(() => {
        if (toastStatus.status == 'success') {
            setOpen(false)
        }
      
    }, [toastStatus.status]);

    function submitData(e) {
        e.preventDefault()
        store.dispatch(createLoyalCardThunk())
    }
    useEffect(() => {
        if (open) {
            dispatch(setLoyalCardForm({}));
        }
    }, [open]);

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

                        <span>Create Loyal Card</span>
                    </button>
                }
            >
                <div className='flex h-full w-full'>
                    <form
                        onSubmit={submitData}
                        className=" flex flex-col w-full">
                        <div className='flex-none'>
                            <div className='text-2xl font-bold'>
                                Create Loyal Card
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
                                        onChange={(e) => {
                                            const length = loyalCardForm.pincode?.length??0
                                            // if (length < 6) {
                                                const pincode = e.target.value.replace(/[^0-9]/g, '').substring(0, 6); // Limit to 6 digits
                                                dispatch(setLoyalCardForm({
                                                    ...loyalCardForm,
                                                    pincode: pincode,
                                                    barcode: moment().valueOf()
                                                }));
                                            // }
                                        }}
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
