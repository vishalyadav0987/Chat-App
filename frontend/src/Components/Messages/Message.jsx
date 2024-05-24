import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
            <img src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png' alt="" className="" />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-400`}>Aur bhai kaise hai!</div>
      <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center`}>08:15</div>
    </div>
  )
}

export default Message
