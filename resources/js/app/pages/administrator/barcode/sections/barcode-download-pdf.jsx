import React from 'react';
import { useRef } from 'react';
import Barcode from 'react-barcode';
import { useLocation } from 'react-router-dom';
import generatePDF from 'react-to-pdf';




export default function BarcodeDownloadPdfSection() {
    const targetRef = useRef();
    const { search } = useLocation()
    const barcode = search.split('?value=')[1]

    return (
        <div className='flex items-center justify-center flex-col gap-3 mt-5'>
            <button className='p-3 bg-red-500 hover:bg-red-600 rounded-lg text-white' onClick={() => generatePDF(targetRef, { filename: `${barcode}.pdf` })}>DOWNLOAD</button>
            <div ref={targetRef}>
                <div className='flex'>
                    <div class="grid grid-cols-4 gap-4 w-full">
                        <div class="">
                            <Barcode value={barcode} />
                        </div>
                        <div class="">
                            <Barcode value={barcode} />
                        </div>
                        <div class="">
                            <Barcode value={barcode} />
                        </div>
                        <div class="">
                            <Barcode value={barcode} />
                        </div>
                        <div class="">
                            <Barcode value={barcode} />
                        </div>
                        <div class="">
                            <Barcode value={barcode} />
                        </div>
                        <div class="">
                            <Barcode value={barcode} />
                        </div>
                        <div class="">
                            <Barcode value={barcode} />
                        </div>
                        <div class="">
                            <Barcode value={barcode} />
                        </div>
                        <div class="">
                            <Barcode value={barcode} />
                        </div>
                        <div class="">
                            <Barcode value={barcode} />
                        </div>
                        <div class="">
                            <Barcode value={barcode} />
                        </div>
                        <div class="">
                            <Barcode value={barcode} />
                        </div>
                        <div class="">
                            <Barcode value={barcode} />
                        </div>
                        <div class="">
                            <Barcode value={barcode} />
                        </div>
                        <div class="">
                            <Barcode value={barcode} />
                        </div>
                        <div class="">
                            <Barcode value={barcode} />
                        </div>
                        <div class="">
                            <Barcode value={barcode} />
                        </div>
                        <div class="">
                            <Barcode value={barcode} />
                        </div>
                        <div class="">
                            <Barcode value={barcode} />
                        </div>
                        <div class="">
                            <Barcode value={barcode} />
                        </div>
                        <div class="">
                            <Barcode value={barcode} />
                        </div>
                        <div class="">
                            <Barcode value={barcode} />
                        </div>
                        <div class="">
                            <Barcode value={barcode} />
                        </div>
                        <div class="">
                            <Barcode value={barcode} />
                        </div>
                        <div class="">
                            <Barcode value={barcode} />
                        </div>
                        <div class="">
                            <Barcode value={barcode} />
                        </div>
                        <div class="">
                            <Barcode value={barcode} />
                        </div>
                        <div class="">
                            <Barcode value={barcode} />
                        </div>
                        <div class="">
                            <Barcode value={barcode} />
                        </div>
                        <div class="">
                            <Barcode value={barcode} />
                        </div>
                        <div class="">
                            <Barcode value={barcode} />
                        </div>
                        <div class="">
                            <Barcode value={barcode} />
                        </div>
                        <div class="">
                            <Barcode value={barcode} />
                        </div>
                        <div class="">
                            <Barcode value={barcode} />
                        </div>
                        <div class="">
                            <Barcode value={barcode} />
                        </div>
                        <div class="">
                            <Barcode value={barcode} />
                        </div>
                        <div class="">
                            <Barcode value={barcode} />
                        </div>
                        <div class="">
                            <Barcode value={barcode} />
                        </div>
                        <div class="">
                            <Barcode value={barcode} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
