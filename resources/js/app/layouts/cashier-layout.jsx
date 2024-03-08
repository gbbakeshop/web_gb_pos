import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Toastify from '../components/toastify';
import { get_account_service } from '../../services/account-service';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/app-slice';

export default function CashierLayout() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    get_account_service()
      .then(res => {
        if (res.role == 'admin') {
          navigate('/administrator/dashboard')
        }
        dispatch(setUser(res))
      })
  }, []);
  return (
    <div>
      <Toastify />
      <Outlet />
    </div>
  )
}
