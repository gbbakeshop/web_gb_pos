import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTab } from '../redux/dashboard-slice'

export default function DashboardPeriodicTabSection() {
  const dispatch = useDispatch()

  const { tab } = useSelector((state) => state.dashboard);

  function isActive(value) {
    if (tab == value) {
      return 'px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-red-100 sm:text-sm '
    } else {
      return 'px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm   hover:bg-gray-100'
    }
  }

  return (
    <div className='my-4 px-2'>
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-x-3">
            <h2 className="text-lg font-medium text-gray-800">Dashboard Monitoring</h2>
          </div>
        </div>
      </div>

      <div className="mt-6 md:flex md:items-center md:justify-between">
        <div className='inline-flex overflow-hidden bg-white border divide-x rounded-lg  rtl:flex-row-reverse'>
          <button
            onClick={() => dispatch(setTab('daily'))}
            className={isActive('daily')}>
            Daily
          </button>

          <button
            onClick={() => dispatch(setTab('weekly'))}
            className={isActive('weekly')}>
            Weekly
          </button>

          <button
            onClick={() => dispatch(setTab('monthly'))}
            className={isActive('monthly')}>  Monthly
          </button>

          <button
            onClick={() => dispatch(setTab('quarterly'))}
            className={isActive('quarterly')}>  Quarterly
          </button>
        </div>


      </div>
    </div>
  )
}
