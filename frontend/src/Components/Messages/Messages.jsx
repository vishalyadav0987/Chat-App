import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../Hooks/useGetMessages'

const Messages = () => {
    const { messages, loading } = useGetMessages();
    console.log(messages);
    const lastMessageRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: "smooth" })
        }, 100)
    }, [messages])
    return (
        <div className='px-2 flex-1 overflow-auto'>
            {
                !loading &&
                messages.length > 0 &&
                messages.map((message) => (<div key={message._id} ref={lastMessageRef}>
                    <Message message={message} />
                </div>))
            }
            {
                !loading &&
                messages.length === 0 &&
                (
                    <p className='text-center'>Send a message to start the message</p>
                )
            }
        </div>
    )
}

export default Messages
