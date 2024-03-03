import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { TrashIcon } from "@heroicons/react/24/outline";
import { changesCart } from '../redux/cashier-slice';
import CashierEditModal from './cashier-edit-modal';

export default function CashierTableSection() {

    const { cart } = useSelector((state) => state.cashier);
    const dispatch = useDispatch()

    function deleteCartById(randomId) {
       const newCart = cart.filter(obj => obj.randomId !== randomId);
        dispatch(changesCart(newCart))
    }
    return (
        <section className="container mx-auto">
            <div className="flex flex-col ">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className=" inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-auto h-[67vh] border border-gray-200  ">
                            <table className="min-w-full relative divide-y divide-gray-200 ">
                                <thead className="bg-red-500 sticky top-0 text-white ">
                                    <tr>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white ">
                                            Item ID
                                        </th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white ">
                                            Quantity
                                        </th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white ">
                                            Description
                                        </th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white ">
                                            Price
                                        </th>

                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white ">
                                            Total
                                        </th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white ">
                                            Action
                                        </th>

                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200  ">

                                    {
                                        cart.map((res, i) => {
                                            return <tr key={i}>
                                                <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                    <div>
                                                        <h2 className="font-medium text-gray-800 ">
                                                            {res.barcode}
                                                        </h2>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                    <h2 className="font-medium text-gray-800 ">
                                                        {res.quantity}
                                                    </h2>
                                                </td>
                                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                    <h2 className="font-medium text-gray-800 ">
                                                        {res.description}
                                                    </h2>
                                                </td>
                                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                    <div>
                                                        <h2 className="font-medium text-gray-800 ">
                                                            ₱ {res.price}
                                                        </h2>
                                                    </div>
                                                </td>

                                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                    <div>
                                                        <h2 className="font-medium text-gray-800 ">
                                                            ₱ {res.total}
                                                        </h2>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                    <div className='flex gap-4'>
                                                        <CashierEditModal data={res}/>
                                                        <button
                                                        onClick={()=>deleteCartById(res.randomId)}
                                                        className="font-medium text-gray-800 ">
                                                         <TrashIcon className='h-6 text-red-500'/>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        })
                                    }

                                </tbody>
                            </table>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
