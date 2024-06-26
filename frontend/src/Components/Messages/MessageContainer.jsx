import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti";
import useConversation from '../../Store/userConversation';
import { useAuthContext } from '../../Context/AuthContext';

const MessageContainer = () => {
    // const notSelected = true;
    // const notSelected = false;
    const { selectedConversation, setSelectedConversation } = useConversation();
    // console.log(selectedConversation)
    useEffect(() => {
        // clean up fun ction for after log out those user is slected is unselct ho jaye
        return () => setSelectedConversation(null);
    }, [setSelectedConversation])
    return (
        <div className={`md:min-w-[450px] flex flex-col bg-slate-50 rounded-e-md sm:h-[550px] md:h-[580px] ${selectedConversation ? "" : "items-center justify-center"} border-[1px] border-[#c5c5c5]`}>
            {
                selectedConversation ? (
                    <>
                        <div className="bg-slate-500 px-4 py-3 rounded-b-none rounded-e">
                            <span className='label-text text-white text-xl font-semibold'>To:
                                <span>
                                    {selectedConversation.fullname}
                                </span>
                            </span>

                            {/* Messages */}
                        </div>
                        <Messages />
                        <MessageInput />
                    </>

                ) : (
                    <NotSelectedChat />
                )
            }
        </div >
    )
}

export default MessageContainer

const NotSelectedChat = () => {
    const { authUser } = useAuthContext();
    // console.log(authUser)
    return (
        <div className="flex justify-center items-center flex-col gap-0">
            <h1 className='text-2xl  font-bold text-cyan-500'>
                Welcome 🤌 {authUser.resData.fullname} 🤖
                
            </h1>
            <h2 className='text-xl text-cyan-500 font-bold'>
                Select to start to messageing
            </h2>
            <TiMessages className='text-6xl text-cyan-500 font-bold' />
        </div>
    )
}
