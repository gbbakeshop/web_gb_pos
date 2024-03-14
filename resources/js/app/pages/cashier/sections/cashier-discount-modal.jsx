import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux';
import FormFieldInput from '../../../components/Input'
import store from './../../../../store/store'
import { get_specific_loyal_card_service } from '../../../../services/loyal-card-service';
import { setDiscount } from '../redux/cashier-slice';
export default function CashierDiscountModal() {
    const [open, setOpen] = useState(true)
    const { selectedItem,payment } = useSelector((state) => state.cashier);
    const cancelButtonRef = useRef(null)
    const [barcode, setBarcode] = useState('')
    const [pincode, setPincode] = useState('')
    const [error, setError] = useState('')
    const [data, setData] = useState({})
    const dispatch = useDispatch()
    useEffect(() => {
        if (selectedItem) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    }, [selectedItem]);

    console.log('payment',payment)

    useEffect(() => {
        const handleKeyPress = (event) => {
            if ((event.key === 'L' || event.key === 'l')) {
                setOpen(true)
            } else if ((event.key === 'C' || event.key === 'c')) {
                setOpen(false)
            }
        };

        window.addEventListener("keydown", handleKeyPress);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    async function searchBarcode(e) {
        e.preventDefault()
        setError('')
        const result = await get_specific_loyal_card_service(barcode)

        if (result.data) {
            setBarcode('')
            setData(result.data)
        } else {
            setBarcode('')
            setError('Incorrect Discound Code!')
        }
    }
    async function submitPincode(e) {
        e.preventDefault()
        setError('')
        if (data.pincode == pincode) {
            dispatch(setDiscount(data.discount))
            setError('')
            setOpen(false)
            setPincode('')
            setData({})
        } else {
            setError('Incorrect Pincode!')
        }
    }
    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="flex flex-col items-center justify-center bg-red-500">
                <h1 className="text-white text-5xl leading-tight font-black">L</h1>
                <div className='text-white'>
                    DISCOUNT
                </div>
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
                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="">

                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                    DISCOUNT
                                                </Dialog.Title>
                                                <div className='text-red-500'>
                                                    {error}
                                                </div>
                                                <div className="mt-5">
                                                    {
                                                        !data.pincode && <form onSubmit={searchBarcode}>
                                                            <FormFieldInput
                                                                autofocus={true}
                                                                onChange={setBarcode}
                                                                value={barcode}
                                                                name="barcode"
                                                                type="text"
                                                                label="Enter Barcode"
                                                            // errorMessage="Searching..."
                                                            />
                                                        </form>
                                                    }
                                                    {
                                                        data.pincode && <form onSubmit={submitPincode}>
                                                            <FormFieldInput
                                                                autofocus={true}
                                                                onChange={setPincode}
                                                                value={pincode}
                                                                name="pincode"
                                                                type="text"
                                                                label="Enter Pincode"
                                                            // errorMessage="Searching..."
                                                            />
                                                        </form>
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                            onClick={() => setOpen(false)}
                                        >
                                            Submit
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
