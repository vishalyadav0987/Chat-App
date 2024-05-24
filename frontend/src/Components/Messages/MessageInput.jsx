import React from 'react'
import { IoIosSend } from "react-icons/io";

const MessageInput = () => {
  return (
    <div className='px-4 bg-slate-500 py-3 rounded-t-none rounded-e mb-0'>
      <div className="w-full relative">
        <input 
        type="text" 
        className="border text-sm rounded-lg p-2.5 block w-full bg-gray-600 text-white" 
        placeholder='Type here message'
        />
        <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
            <IoIosSend className='text-xl'/>
        </button>
      </div>
    </div>
  )
}

export default MessageInput;

