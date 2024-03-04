import React, { useEffect, useState } from 'react'
import DrawerAction from '../../../../layouts/components/drawer-action'
import { useDispatch, useSelector } from 'react-redux'
import { setProductForm } from '../redux/products-slice'
import store from '../../../../../store/store'
import { createProductThunk, editProductThunk } from '../redux/products-thunk'
import { PencilIcon } from '@heroicons/react/24/outline'

export default function ProductsEditSection({ data }) {
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()
    const { productForm } = useSelector((state) => state.products);
    const { toastStatus } = useSelector((state) => state.app);

    useEffect(() => {
        if (open) {
            dispatch(setProductForm({
                ...productForm,
                id:data.id,
                barcode: data.barcode,
                description: data.description,
                quantity: data.quantity,
                price: data.price,
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
        store.dispatch(editProductThunk())
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
                                        Barcode
                                    </label>
                                    <input
                                        required
                                        value={productForm.barcode ?? ""}
                                        onChange={(e) => dispatch(setProductForm({
                                            ...productForm,
                                            barcode: e.target.value
                                        }))}
                                        className=" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="barcode"
                                        type="text"
                                        placeholder="Input Barcode" />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                        Description
                                    </label>
                                    <input
                                        required
                                        value={productForm.description ?? ""}
                                        onChange={(e) => dispatch(setProductForm({
                                            ...productForm,
                                            description: e.target.value
                                        }))}
                                        className=" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="description"
                                        type="text"
                                        placeholder="Input Description" />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                        Quantity
                                    </label>
                                    <input
                                        required
                                        value={productForm.quantity ?? ""}
                                        onChange={(e) => dispatch(setProductForm({
                                            ...productForm,
                                            quantity: e.target.value
                                        }))}
                                        className=" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="quantity"
                                        type="number"
                                        placeholder="Input Quantity" />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                        Price
                                    </label>
                                    <input
                                        required
                                        value={productForm.price ?? ""}
                                        onChange={(e) => dispatch(setProductForm({
                                            ...productForm,
                                            price: e.target.value
                                        }))}
                                        className=" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="price"
                                        type="number"
                                        placeholder="Input Price" />
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
