
import React, { useState } from 'react'
import SideBarComponent from './../components/sidebar-component';
import {
    BanknotesIcon,
    BuildingStorefrontIcon,
    ChatBubbleLeftRightIcon,
    CircleStackIcon,
    Cog6ToothIcon,
    HomeIcon,
    WrenchIcon,
} from "@heroicons/react/24/outline";
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { CakeIcon, ClipboardDocumentCheckIcon, ShoppingBagIcon, TruckIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom';
import { RadioGroup } from '@headlessui/react'

export default function SideBarSection() {

    const events = [

        {
            name: 'Dashboard',
            path: 'dashboard',
            icon: <CircleStackIcon className='h-6' />,
            to: '/administrator/dashboard'
        },
        
        {
            name: 'Sales',
            path: 'sales',
            icon: <BanknotesIcon className='h-6' />,
            to: '/administrator/sales'
        },
        {
            name: 'Products',
            path: 'products',
            icon: <ClipboardDocumentCheckIcon className='h-6' />,
            to: '/administrator/products'
        },
        {
            name: 'Accounts',
            path: 'accounts',
            icon: <UserGroupIcon className='h-6' />,
            to: '/administrator/accounts'
        },
    ]

    const [selected, setSelected] = useState(events[0])
    const { pathname } = useLocation();
    const path = pathname.split("/")[2];



    return (
        <>

            <div className="flex flex-col items-center w-64 pb-4 overflow-auto border-r border-gray-300">
                <div className="w-full pt-16 px-3">
                    <RadioGroup value={selected} onChange={setSelected}>
                        <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
                        <div className="space-y-2">
                            {events.map((plan, index) => (
                                <Link key={index} to={plan.to}>
                                    <div className='my-2'>
                                        <RadioGroup.Option
                                            key={plan.name}
                                            value={plan}
                                            className={({ active, checked }) =>
                                                `${plan.path == path
                                                    ? ' ring-red-300'
                                                    : ''
                                                }
                      ${plan.path == path ? 'bg-red-500 text-white' : 'bg-white'}
                        relative flex cursor-pointer border-2 border-red-300 rounded-lg px-5 py-3 shadow-md focus:outline-none`
                                            }
                                        >

                                            <>
                                                <div className="flex h-full w-full items-center justify-between">
                                                    <div className="flex items-center">
                                                        <div className="text-sm">
                                                            <RadioGroup.Label
                                                                as="p"
                                                                className={`font-medium  ${plan.path == path ? 'text-white' : 'text-red-500'
                                                                    }`}
                                                            >
                                                                {plan.name}
                                                            </RadioGroup.Label>
                                                        </div>
                                                    </div>
                                                    <div className={`shrink-0 ${plan.path == path ? 'text-white' : 'text-red-500'}`}>
                                                        {plan.icon}
                                                    </div>
                                                </div>
                                            </>
                                        </RadioGroup.Option>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </RadioGroup>
                </div>

            </div>
        </>
    )
}
