import React from 'react'
import { IoIosLogOut } from "react-icons/io";
import useLogout from '../Hooks/useLogout';

const Logout = () => {
  const { loading, logout } = useLogout()
  return (
    <div className='mt-auto bg-slate-600 relative'>
      {
        !loading ? (
          <IoIosLogOut className='text-2xl font-semibold text-black mt-[10px] cursor-pointer absolute top-5 -left-2' onClick={logout} />
        ) : (
          <span className=' loading loading-spinner'></span>
        )
      }
    </div>
  )
}

export default Logout
