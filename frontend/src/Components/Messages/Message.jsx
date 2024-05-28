import React from 'react'
import { useAuthContext } from '../../Context/AuthContext'
import useConversation from '../../Store/userConversation';
import { extractTime } from '../../utils/extractdbTime';



const Message = ({ message }) => {
  const { authUser } = useAuthContext();


  // console.log(authUser.resData)
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser.resData._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  // console.log(fromMe,message.senderId,authUser.resData._id,chatClassName)
  const profilePic = fromMe ? authUser.resData.profilePic : selectedConversation?.profilePic;
  const bubbleColor = fromMe ? 'bg-blue-500' : "";
  // console.log(authUser.resData,message)
  const formattedTime = extractTime(message.createdAt);
  return (
    <div className={`chat ${chatClassName ? chatClassName : "chat-end"}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="" className="" />
          {/* <img src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png' alt="" className="" /> */}
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleColor}`}>{message.message}</div>
      <div className={`chat-footer text-xs flex gap-1 items-center text-[#c5c5c5]`}>
        {formattedTime}
        </div>
    </div>
  )
}

export default Message
