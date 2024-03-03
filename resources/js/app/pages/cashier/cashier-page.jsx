import React from 'react'
import CashierTableSection from './sections/cashier-table-section'
import CashierSubTotalSection from './sections/cashier-sub-total-section'
import CashierScannerSection from './sections/cashier-scanner-section'
import CashierModalItemSection from './sections/cashier-modal-item-section'
import CashierPayModalSection from './sections/cashier-pay-modal-section'
import CashierLogoutSection from './sections/cashier-logout-section'
import CashierPrintDataComponent from './components/cashier-print-data-component'

export default function CashierPage() {


    return (
        <div className='flex'>
            <div className='flex-1 basis-7/12 h-screen '>
                <div className='flex flex-col h-full w-full '>
                    <div className='flex-1 basis-4/6 border-1'>
                        <CashierTableSection />
                        <CashierModalItemSection />
                    </div>
                    <div className='flex-1 flex  basis-2/6 border-1'>
                        <div className='flex-1'>
                            keyboard
                        </div>
                        <div className='flex-1 '>
                            <CashierSubTotalSection />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex-1 flex flex-col basis-5/12 border-1'>

                <div className='flex-1 flex flex-col basis-4/6 border-1'>
                    <div className='flex-1'>
                        <CashierScannerSection />
                    </div>
                    <div className='flex-none  m-4'>
                        <CashierPayModalSection />

                    </div>
                </div>
                <div className='flex-1 basis-2/6  border-1'>
                    <div className="grid grid-cols-3 gap-4 h-full">
                        <button
                            className="flex items-center justify-center">
                            <img className='w-24' src="/images/search.jpg" />
                        </button>
                        <div className="...">02</div>
                        <div className="...">03</div>
                        <div className="...">01</div>
                        <div className="...">02</div>
                        <CashierLogoutSection />
                    </div>
                </div>
            </div>
            <div className='hidden'>
                <CashierPrintDataComponent />
            </div>
            {/* <CashierTableSection /> */}
        </div>
    )
}
