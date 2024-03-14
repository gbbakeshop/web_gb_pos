import React, { useEffect } from 'react'
import CashierLogoutSection from './cashier-logout-section'
import CashierDiscountModal from './cashier-discount-modal'

export default function FunctionKeysSection() {

  return (
    <div className="grid grid-cols-3 gap-4 h-full p-4 border-t">
      <button
        className="flex flex-col items-center justify-center bg-red-500">
        <h1 className="text-white text-5xl leading-tight font-black">P</h1>
        <div className='text-white'>
          PAY
        </div>
      </button>
   
      <button
        className="flex flex-col items-center justify-center bg-red-500">
        <h1 className="text-white text-5xl leading-tight font-black">F</h1>
        <div className='text-white'>
          FUCOS
        </div>
      </button>
      {/* <button
        className="flex flex-col items-center justify-center bg-red-500">
        <h1 className="text-white text-5xl leading-tight font-black">E</h1>
        <div className='text-white'>
          CHANGE PRICE
        </div>
      </button> */}
      
      <CashierDiscountModal />
      
      <button
        className="flex flex-col items-center justify-center bg-red-500">
        <h1 className="text-white text-5xl leading-tight font-black">C</h1>
        <div className='text-white'>
          CANCEL
        </div>
      </button>
      <button
        className="flex flex-col items-center justify-center bg-red-500">
        <h1 className="text-white text-5xl leading-tight font-black">D</h1>
        <div className='text-white'>
          DELETE
        </div>
      </button>
      
      <CashierLogoutSection />
    </div>
  )
}
