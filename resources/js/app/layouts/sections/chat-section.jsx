import React, { useState } from 'react'
import SideModalChat from './../components/side-modal-chat';
import { Dialog } from '@headlessui/react';
import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/outline';

export default function ChatSection() {
    const [isChatOpen,setIsChatOpen] = useState(false)
  return (
    <>
    <button 
      onClick={()=>setIsChatOpen()}
      className="fixed flex items-center justify-center h-8 pr-2 pl-1 bg-red-600 shadow-2xl rounded-full bottom-0 right-0 mr-4 mb-4 text-red-100 hover:bg-red-600">
        <span className="text-sm ml-1 leading-none font-bold">Message</span>
        <div className="flex items-center justify-center h-6 w-6 ml-2 bg-red-500 rounded-full">
          <ChatBubbleLeftEllipsisIcon className='h-6' />
        </div>
      </button>
      <SideModalChat
      isOpen={isChatOpen}
      setIsOpen={setIsChatOpen}
      >
        <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
          <div className="px-4 sm:px-6">
            <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
               Chat Box
            </Dialog.Title>
          </div>
          <div className="relative mt-6 flex-1 px-4 sm:px-6">
            {/* Your content */}
            hello world
          </div>
        </div>
      </SideModalChat>
    </>
  )
}
