import React from 'react'

const SingleConversation = () => {
    return (
        <>
            <div className='flex gap-2 items-center hover:bg-slate-500 rounded py-1 cursor-pointer'>
                <div className='avatar online'>
                    <div className='w-12 rounded-full'>
                        <img
                            src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'
                            alt='user avatar'
                        />
                    </div>
                </div>

                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-slate-950'>John Doe</p>
                        <span className='text-xl'>🎃</span>
                    </div>
                </div>
            </div>

            <div className='divider my-0 py-0 h-1 bg-slate-50' />
        </>
    )
}

export default SingleConversation
