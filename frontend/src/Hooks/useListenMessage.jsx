import React, { useEffect } from 'react'
import { useSocketContext } from '../Context/SocketContext'
import  useConversation  from '../Store/userConversation'

const useListenMessage = () => {
    const { socket } = useSocketContext();
    const { messages, setMessages } = useConversation();
    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            // For notification sound add here
            setMessages([...messages, newMessage]);
        });

        // clean up
        return () => {
            socket?.off("newMessage")
        }
    }, [socket,setMessages,messages])
}

export default useListenMessage
