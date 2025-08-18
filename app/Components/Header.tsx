'use client';
import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi';
import { useEventStore } from '../../src/store/useEventStore';


const Header = () => {

  const { viewType, setViewType } = useEventStore();

  return (
    <div>
      <div className="flex items-center justify-between px-6 bg-white rounded-xl flex-[1] w-full gap-6">
        <div className="flex items-center justify-between w-1/2">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search.."
              className="w-full pr-10 pl-4 py-2 rounded-full border border-gray-300 bg-gray-200"
            />
            <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <div className="ml-4">
            <h1 className="text-gray-500">Monday, 6th March</h1>
          </div>
        </div>

            

                <div className='w-1/2 flex justify-end'>
                  <div className="view-toggle-wrapper flex mt-5 justify-end ">
                    <div className="view-toggle-container">
                      <button  className={`view-toggle-button font-bold ${viewType === 'card' ? 'active' : ''}`}  onClick={() => setViewType('card')}>  Card View</button>
                      <button  className={`view-toggle-button font-bold ${viewType === 'list' ? 'active' : ''}`}  onClick={() => setViewType('list')}>  List View</button>
                    </div>
                  </div>
                </div>
                </div>
    </div>
  )
}

export default Header
