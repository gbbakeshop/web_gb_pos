import React from 'react'
import { useNavigate } from 'react-router-dom'
import { logout_account_service } from '../../../../services/account-service'

export default function CashierLogoutSection() {

    const navigate = useNavigate()

    async function logoutAccount() {
        try {
            await logout_account_service()
            navigate('/')
        } catch (error) {

        }

    }
    return (
        <button
            onClick={logoutAccount}
            className="flex items-center justify-center">
            <img className='w-24' src="/images/logout.jpg" />
        </button>
    )
}
