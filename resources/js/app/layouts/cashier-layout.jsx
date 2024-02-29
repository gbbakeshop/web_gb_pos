import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Toastify from '../components/toastify';
import { get_account_service } from '../../services/account-service';

export default function CashierLayout() {
  const navigate = useNavigate()
  useEffect(() => {
    get_account_service()
      .then(res => {
        if (res.role == 'admin') {
          navigate('/administrator/dashboard')
        }
      })
  }, []);
  return (
    <div>
      <Toastify />
      <Outlet />
    </div>
  )
}
