
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import ReactToPrint from 'react-to-print';

export default function CashierPrintDataComponent() {
    const componentRef = useRef();
    const { selectedItem,isPrint } = useSelector((state) => state.cashier);
    const { cart } = useSelector((state) => state.cashier);
    
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
                {
                    cart.map((res, index) => {
                        return <li key={index}>
                            <ul>
                                {res.description}
                            </ul>
                        </li>
                    })
                }
            </div>
            {/* Button to print the content */}
            <ReactToPrint
                trigger={() => <button id="printButton">Print</button>}
                content={() => componentRef.current}
            />
        </div>
    );
};
