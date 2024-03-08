import React, { useEffect } from 'react'
import CashierLogoutSection from './cashier-logout-section'

export default function FunctionKeysSection() {

  return (
    <div className="grid grid-cols-3 gap-4 h-full p-4 border-t">
      <button
        className="flex flex-col items-center justify-center bg-red-500">
        <h1 class="text-white text-5xl leading-tight font-black">P</h1>
        <div className='text-white'>
          PAY
        </div>
      </button>
      <button
        className="flex flex-col items-center justify-center bg-red-500">
        <h1 class="text-white text-5xl leading-tight font-black">F</h1>
        <div className='text-white'>
          FUCOS
        </div>
      </button>
      <button
        className="flex flex-col items-center justify-center bg-red-500">
        <h1 class="text-white text-5xl leading-tight font-black">C</h1>
        <div className='text-white'>
          CANCEL
        </div>
      </button>
      <div className="...">01</div>
      <div className="...">02</div>
      <CashierLogoutSection />
    </div>
  )
}
