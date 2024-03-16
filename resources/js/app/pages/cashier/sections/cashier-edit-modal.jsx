import { Fragment, useEffect, useRef, useState } from 'react'
import { PencilIcon } from '@heroicons/react/24/outline'
import { Dialog, Transition } from '@headlessui/react'
import {  changesCart, setIsPrint } from '../redux/cashier-slice';
import FormFieldInput from '../../../components/Input';
import { useDispatch, useSelector } from 'react-redux';
export default function CashierEditModal({ data }) {
    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)
    const { cart } = useSelector((state) => state.cashier);
    const [value,setValue] = useState(data.quantity)
    const dispatch = useDispatch()

    function saveChanges(e) {
        e.preventDefault()
        const updateCart = cart.map(obj => {
            if (obj.randomId === data.randomId) {
                return { ...obj, 
                    quantity:parseInt(value),
                    total:parseInt(value) * data.price
                 }; // merge old object with new data
            }
            return obj;
        });
        dispatch(changesCart(updateCart))
        setOpen(false)
    }
    function isSubmit() {

    }

  
    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="font-medium text-gray-800  text-white ">
                <PencilIcon className='h-6 text-blue-500' />
            </button>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <form
                                        onSubmit={saveChanges}
                                        className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="">
                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                    Edit Quantity
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <div className="relative overflow-x-auto">
                                                        <div className='m-3 my-2'>
                                                        <FormFieldInput
                                                            autofocus={true}
                                                            onChange={(value)=>setValue(value)}
                                                            value={value}
                                                            name="quantity"
                                                            type="number"
                                                            label="Quanity"
                                                        // errorMessage="Searching..."
                                                        />
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            disabled={isSubmit()}
                                            type="submit"
                                            className={`inline-flex w-full justify-center rounded-md ${isSubmit() ? 'bg-red-300' : 'bg-red-600 hover:bg-red-500'}  px-3 py-2 text-sm font-semibold text-white shadow-sm  sm:ml-3 sm:w-auto`}
                                            onClick={saveChanges}
                                        >
                                            Confirm Payment
                                        </button>
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                            onClick={() => setOpen(false)}
                                            ref={cancelButtonRef}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}
