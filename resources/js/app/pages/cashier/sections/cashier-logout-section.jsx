import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { logout_account_service } from '../../../../services/account-service'

export default function CashierLogoutSection() {

    const navigate = useNavigate()

    useEffect(() => {
        const handleKeyPress = (event) => {
            const isEscapeKey = event.key.toLowerCase() === 'escape';
            if (isEscapeKey) {
                logoutAccount();
            }
        };

        window.addEventListener("keydown", handleKeyPress);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, []);


    async function logoutAccount() {
        try {
            await logout_account_service()
            navigate('/')
        } catch (error) {

        }

    }
    return (
        <button
            className="flex flex-col items-center justify-center bg-red-500">
            <h1 className="text-white text-5xl leading-tight font-black">ESC</h1>
            <div className='text-white'>
                LOGOUT
            </div>
        </button>
    )
}
