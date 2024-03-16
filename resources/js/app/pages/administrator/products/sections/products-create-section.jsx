import React, { useEffect, useState } from 'react'
import DrawerAction from '../../../../layouts/components/drawer-action'
import { useDispatch, useSelector } from 'react-redux'
import { setProductForm, setProducts } from '../redux/products-slice'
import store from '../../../../../store/store'
import { createProductThunk } from '../redux/products-thunk'

export default function ProductsCreateSection() {
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()
    const { productForm } = useSelector((state) => state.products);
    const { toastStatus } = useSelector((state) => state.app);

    useEffect(() => {
        if (toastStatus.status == 'success') {
            setOpen(false)
        }
    }, [toastStatus.status]);

    function submitData(e) {
        e.preventDefault()
        store.dispatch(createProductThunk())
    }
    useEffect(() => {
        if(open){
            dispatch(setProductForm({}));
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

                        <span>Create Product</span>
                    </button>
                }
            >
                <div className='flex h-full w-full'>
                    <form
                        onSubmit={submitData}
                        className=" flex flex-col w-full">
                        <div className='flex-none'>
                            <div className='text-2xl font-bold'>
                                Create Products
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
                                            quantity: e.target.value.replace(/[^0-9.]/g, '')
                                        }))}
                                        className=" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="quantity"
                                        type="text"
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
                                            price: e.target.value.replace(/[^0-9.]/g, '')
                                        }))}
                                        className=" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="price"
                                        type="text"
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
