import React from 'react'
import SideBarContainer from '../Components/Sidebar/SideBarContainer'

const Home = () => {
    return (
        <div className='h-[100vh] w-[100%] flex justify-center items-center'>
            <div className='sm:h-[450px] md:h-[550px] bg-clip-padding'>
                <SideBarContainer />
            </div>
        </div>
    )
}

export default Home
