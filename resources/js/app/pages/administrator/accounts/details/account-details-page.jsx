import React, { useEffect } from 'react'
import AccountDetailsTableSection from './sections/account-details-table-section'
import store from './../../../../../store/store'
import { get_all_account_details_thunk } from './redux/account-details-thunk';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function AccountDetailsPage() {
  const { id } = useParams()
  const { year } = useSelector((state) => state.dashboard);

  useEffect(() => {
    store.dispatch(get_all_account_details_thunk(id))
  }, [year]);
  return (
    <div>
      <AccountDetailsTableSection />
    </div>
  )
}
