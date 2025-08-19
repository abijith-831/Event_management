'use client';
import React from 'react'
import Header from '../Components/Header';
import Tasks from '../Components/Tasks';
import SideBar from '../Components/SideBar';

const Page = () => {
  return (
    <div  className='flex items-center justify-center min-h-screen px-4 md:px-8 lg:px-12 xl:px-16 py-4 bg-center bg-cover'  style={{ backgroundImage: "url('/bg/dark-bg.jpg')" }} >
      {/* Outer container */}
      <div className='flex flex-col md:flex-row w-full min-h-[calc(100vh-4rem)] gap-4'>
        
        {/* Left Sidebar */}
        <div className='w-full md:w-1/5 flex  bg-white rounded-xl p-4'>
          <SideBar/>
        </div>
        
        {/* Right Section */}
        <div className="w-full md:w-4/5 flex flex-col gap-4 h-auto md:h-[calc(100vh-4rem)]">   
          <Header/>         

          {/* Tasks section */}
          <div className="flex bg-white rounded-xl p-4 overflow-auto h-auto md:h-[65vh]">
            <Tasks/>
          </div>

          {/* Bottom/Right section */}
          <div className="flex items-center justify-center bg-white rounded-xl w-full p-4 md:flex-1">
            Right
          </div>
        </div>


      </div>
    </div>
  )
}

export default Page;
