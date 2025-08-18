'use client';
import React, { useState } from 'react'
import Header from '../Components/Header';
import Tasks from '../Components/Tasks';


const Page = () => {


  return (
    <div className='flex items-center justify-center bg-blue-400 h-screen px-16 bg-center' style={{ backgroundImage: "url('/bg/dark-bg.jpg')" }}>
      {/* inner container should account for padding */}
      <div className='flex w-full h-[calc(100vh-4rem)] gap-4'>
        <div className='w-1/5 flex items-center justify-center bg-white rounded-xl'>
          <h1>left</h1>
        </div>
        <div className="w-4/5 flex flex-col gap-4 h-full">   
            <Header/>         
            <div className="flex  bg-white rounded-xl flex-[5] ">
                <Tasks/>
            </div>
            <div className="flex items-center justify-center bg-white rounded-xl flex-[2] w-full">
                right
            </div>
        </div>
      </div>
    </div>
  )
}

export default Page
