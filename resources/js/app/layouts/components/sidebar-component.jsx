import React from 'react'

import { Link, useLocation } from 'react-router-dom';

export default function SideBarComponent({ icon, href }) {
    const { pathname } = useLocation()

    return (
        <>
        
            <Link
                to={href}
                className={`${pathname.split('/')[2] == href.split('/')[2] ? 'bg-red-500 text-white' : 'hover:bg-red-400 hover:text-white'} flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded `} href="#">
                {icon}
            </Link>
        </>
    )
}
