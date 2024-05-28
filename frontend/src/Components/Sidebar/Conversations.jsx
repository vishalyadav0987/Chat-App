import React from 'react'
import SingleConversation from './SingleConversation'
import useGetConversation from '../../Hooks/useGetConversation'

const Conversations = () => {
  const { loading, conversations } = useGetConversation();
  console.log(conversations);
  return (
    <div className='py-2 px-2 flex flex-col overflow-y-scroll h-[70%]'>
      {
        conversations.map((Conversation,index)=>(
          <SingleConversation 
          key={index}
          conversation={Conversation}
          lastIndex={index === Conversation.length - 1}
          />
        ))
      }
    </div>
  )
}

export default Conversations
