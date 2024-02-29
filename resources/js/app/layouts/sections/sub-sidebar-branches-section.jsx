import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import {
  BuildingStorefrontIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { Disclosure } from "@headlessui/react";
import BranchRadioGroupComponent from '../components/radio-group-component';

export default function SubSidebarBranchesSection() {
  const { pathname } = useLocation();
  const branchid = pathname.split("/")[3];
  const { branches } = useSelector((state) => state.app);

  return (
    <>
      <button className="relative text-sm focus:outline-none group">
        <div className="flex items-center justify-between w-full h-16 px-4 border-b border-gray-300 hover:bg-red-400 hover:text-white">
          <span className="font-medium">
            Dropdown
          </span>
          <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="absolute z-10 flex-col items-start hidden w-full pb-1 bg-white shadow-lg group-focus:flex">
          <a className="w-full px-4 py-2 text-left hover:bg-red-400 hover:text-white" href="#">Menu Item 1</a>
          <a className="w-full px-4 py-2 text-left hover:bg-red-400 hover:text-white" href="#">Menu Item 1</a>
          <a className="w-full px-4 py-2 text-left hover:bg-red-400 hover:text-white" href="#">Menu Item 1</a>
        </div>
      </button>
      <div className="flex flex-col flex-grow overflow-auto">
        {branches.map((branch, index) => (
          <div key={index} className="w-full h-full">
            <div className="mx-auto w-full max-w-md rounded-2xl bg-white">
              <Disclosure defaultOpen={branchid == branch.id}>
                {({ open }) => (
                  <>
                    <h3 className="flow-root  border-b border-gray-300 ">
                      <Disclosure.Button className="flex w-full items-center justify-between bg-white  text-sm text-gray-400 hover:text-gray-500">
                        <div
                          className={`${branchid == branch.id
                            ? "bg-red-500 text-white"
                            : " text-gray-500 hover:bg-gray-100"
                            } flex items-center w-full px-5 py-2 transition-colors duration-200  gap-x-2  focus:outline-none`}
                        >
                          <div
                            className={` ${branchid == branch.id
                              ? "text-white"
                              : "text-red-500"
                              }`}
                          >
                            <BuildingStorefrontIcon className="h-6" />
                          </div>

                          <div className="text-left rtl:text-right">
                            <h1 className="text-sm font-medium  capitalize ">
                              {branch.branch_name}
                            </h1>

                            <p className="text-xs ">
                              11.2 Followers
                            </p>
                          </div>
                        </div>
                      </Disclosure.Button>
                    </h3>
                    <Disclosure.Panel className="text-sm text-gray-500 mx-2">
                      <BranchRadioGroupComponent
                        branchid={branch.id}
                      />
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        ))}
      </div>



      <button className="flex items-center flex-shrink-0 h-10 px-3 mt-auto text-sm font-medium bg-red-500  hover:bg-red-600 text-white hover:text-white"
        href="#">
        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        <span className="ml-2 leading-none">Create Branch</span>
      </button>

    </>
  )
}
