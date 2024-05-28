import React, { useState } from 'react'
import { IoIosSend } from "react-icons/io";
import useSendMessage from '../../Hooks/useSendMessage';

const MessageInput = () => {
  const { sendMessage, loading } = useSendMessage();
  const [message,setMessage]= useState("");
  const handleSubmit = async(e)=>{
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage("");
  }
  return (
    <div className='px-4 bg-slate-500 py-3 rounded-t-none rounded-e mb-0'>
      <div className="w-full relative">
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border text-sm rounded-lg p-2.5 block w-full bg-gray-600 text-white"
          placeholder='Type here message'
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
        />
        <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
          {loading ? (<div className=' loading loading-spinner'></div>) : <IoIosSend className='text-xl' />}
        </button>
        </form>
      </div>
    </div>
  )
}

export default MessageInput;

