import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { logout_account_service } from '../../../services/account-service'



export default function LogoutSection() {

    const navigate = useNavigate()

    async function logoutAccount() {
        try {
            await logout_account_service()
            navigate('/')
        } catch (error) {

        }
    }

    return (
        <div className=" top-16 w-full max-w-sm px-4">
            <Popover className="relative">
                {({ open }) => (
                    <>
                        <Popover.Button
                            className={`
                ${open ? 'text-white' : 'text-white/90'}
                group inline-flex items-center rounded-md bg-red-500 px-3 py-2 z-[99] text-base font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
                        >
                            <span>Dropdown</span>
                            <ChevronDownIcon
                                className={`${open ? 'text-orange-300' : 'text-orange-300/70'}
                  ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-orange-300/80`}
                                aria-hidden="true"
                            />
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute z-10  ">
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5 ">
                                    <div className="relative grid gap-8 bg-white">
                                        <button
                                            onClick={logoutAccount}
                                            className="m-3 flex w-24  items-center rounded-lg p-2 transition duration-150 ease-in-out "
                                        >
                                            LOGOUT
                                        </button>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </div>
    )
}

