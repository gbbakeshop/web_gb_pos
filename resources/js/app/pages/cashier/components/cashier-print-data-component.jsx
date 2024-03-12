
import React, { useEffect, useRef } from 'react';
import Barcode from 'react-barcode';
import { useSelector } from 'react-redux';
import ReactToPrint from 'react-to-print';

export default function CashierPrintDataComponent() {
    const componentRef = useRef();
    const { selectedItem, isPrint } = useSelector((state) => state.cashier);
    const { user } = useSelector((state) => state.app);
    const { cart, payment } = useSelector((state) => state.cashier);

    useEffect(() => {
        // Automatically trigger printing when component mounts
        if (componentRef.current && isPrint) {
            const printButton = document.getElementById('printButton');
            if (printButton) {
                printButton.click();
            }
        }
    }, [isPrint]);

    return (
        <div>
            <div ref={componentRef}>

                <div className="flex w-full items-center justify-center mb-52">
                    <div className="w-80 ">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="chippz" className="mx-auto w-16 py-4 font-semibold text-black" />
                        <div className="flex flex-col justify-center items-center gap-2">
                            <h4 className="font-semibold">GBS Minimart</h4>
                            <p className="text-xs text-center font-semibold">Corner of V. Gustilo Street and S. Carmnona Street.</p>
                        </div>
                        <div className="flex flex-col gap-3 border-b py-6 text-xs">
                            <p className="flex justify-between">
                                <span className="text-black font-semibold">Receipt No.:</span>
                                <span className='font-semibold'>#{payment.receipt_id}</span>
                            </p>
                            {/* <p className="flex justify-between">
                                <span className="text-black">Order Type:</span>
                                <span>Dine-in</span>
                            </p> */}
                            <p className="flex justify-between">
                                <span className="text-black font-semibold">Cashier:</span>
                                <span className='font-semibold'>{user.name}</span>
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 pb-6 pt-2 text-xs">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="flex">
                                        <th className="w-full py-2">Products</th>
                                        <th className="min-w-[44px] py-2">QTY</th>
                                        <th className="min-w-[44px] py-2">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cart.map((res, index) => {
                                            return <tr key={index} className="flex">
                                                <td className="font-semibold text-xs flex-1 py-1">{res.description}</td>
                                                <td className="font-semibold text-xs min-w-[44px]">{res.quantity}</td>
                                                <td className="font-semibold text-xs min-w-[44px]">₱ {res.total.toFixed(2)}</td>
                                            </tr>

                                        })
                                    }

                                </tbody>
                            </table>
                            <div className=" justify-center items-center flex flex-col gap-2">
                                --------------------------------------------------------
                            </div>

                            <p className="flex justify-between">
                                <span className="text-black font-semibold">Total:</span>
                                <span className='font-semibold'>₱ {payment.total}</span>
                            </p>
                            <p className="flex justify-between">
                                <span className="text-black font-semibold">Item Purchased:</span>
                                <span className='font-semibold'>{cart.reduce((acc, obj) => acc + obj.quantity, 0)}</span>
                            </p>
                            <div className="font-semibold py-4 justify-center items-center flex flex-col gap-2 mb-50">
                                <p className="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21.3 12.23h-3.48c-.98 0-1.85.54-2.29 1.42l-.84 1.66c-.2.4-.6.65-1.04.65h-3.28c-.31 0-.75-.07-1.04-.65l-.84-1.65a2.567 2.567 0 0 0-2.29-1.42H2.7c-.39 0-.7.31-.7.7v3.26C2 19.83 4.18 22 7.82 22h8.38c3.43 0 5.54-1.88 5.8-5.22v-3.85c0-.38-.31-.7-.7-.7ZM12.75 2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2h1.5V2Z" fill="#000"></path><path d="M22 9.81v1.04a2.06 2.06 0 0 0-.7-.12h-3.48c-1.55 0-2.94.86-3.63 2.24l-.75 1.48h-2.86l-.75-1.47a4.026 4.026 0 0 0-3.63-2.25H2.7c-.24 0-.48.04-.7.12V9.81C2 6.17 4.17 4 7.81 4h3.44v3.19l-.72-.72a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l2 2c.01.01.02.01.02.02a.753.753 0 0 0 .51.2c.1 0 .19-.02.28-.06.09-.03.18-.09.25-.16l2-2c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-.72.72V4h3.44C19.83 4 22 6.17 22 9.81Z" fill="#000"></path></svg>
                                    gbs.minimart2024@gmail.com</p>
                                <p className="flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path fill="#000" d="M11.05 14.95L9.2 16.8c-.39.39-1.01.39-1.41.01-.11-.11-.22-.21-.33-.32a28.414 28.414 0 01-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41C2.24 8.67 2 7.58 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56l2.32 3.27c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.1.1.21.2.31.3.4.39.41 1.03.01 1.43zM21.97 18.33a2.54 2.54 0 01-.25 1.09c-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.01 0-.02.01-.03.01-.59.24-1.23.37-1.92.37-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98c-.39-.29-.78-.58-1.15-.89l3.27-3.27c.28.21.53.37.74.48.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78z"></path></svg>
                                    09......
                                </p>
                            </div>
                            <div className="justify-center items-center flex flex-col gap-2 ">
                                -------------------------
                            </div>
                            <div className='flex items-center justify-center'>
                            <Barcode value={String(payment.receipt_id)??'0'} />
                            </div>
                            <div className="justify-center items-center flex flex-col gap-2 ">
                                -------------------------
                            </div>
                            <div className="py-4 font-semibold text-black justify-center items-center flex flex-col gap-2 mb-50">
                                Only Defective or damage items will be accepted for return or exchange and subject
                                to DTI rules on return/exchange. Bring this Receipt to return or exchange within 7days from purchase date.
                            </div>
                            <div className="py-4 justify-center items-center flex flex-col gap-2 mb-50">
                                -------------------------
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Button to print the content */}
            <ReactToPrint
                trigger={() => <button id="printButton">Print</button>}
                content={() => componentRef.current}
            />
        </div>
    );
};
