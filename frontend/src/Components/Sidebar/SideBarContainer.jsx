import React from 'react'
import TopSearchBar from './TopSearchBar'
import Conversations from './Conversations'
import Logout from '../../Logout/Logout'
import MessageContainer from '../Messages/MessageContainer'

const SideBarContainer = () => {
    return (
        <div className="flex">
            <div className=' bg-white py-5 px-8 rounded-s-md'>
                <TopSearchBar />
                {/* <div className="divider px-3"></div> */}
                <Conversations />
                <Logout />
            </div>
            <MessageContainer />
        </div>
    )
}

export default SideBarContainer
