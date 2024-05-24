import React from 'react'
import { IoIosLogOut } from "react-icons/io";

const Logout = () => {
  return (
    <div className='mt-auto bg-slate-600 relative'>
      <IoIosLogOut className='text-2xl font-semibold text-black mt-[10px] cursor-pointer absolute top-5 -left-2' />
    </div>
  )
}

export default Logout
