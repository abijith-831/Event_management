'use client';
import React, { useEffect, useState } from 'react';
import EventModal from './EventModal';
import { FiTrash2 } from 'react-icons/fi';

type MyEvent = {
    name: string;
    date: string;
};

const Tasks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [events, setEvents] = useState<MyEvent[]>([]);

  
  
  useEffect(() => {
    const stored = localStorage.getItem('events');
    if (stored) setEvents(JSON.parse(stored));
  }, []);

  const handleSave = (event: MyEvent) => {
    const updated = [...events, event];
    console.log('ipdatedddd',updated);
    
    setEvents(updated);

    localStorage.setItem('events', JSON.stringify(updated));
  };

  return (
    <div className="w-full p-4">
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-col w-1/2 py-4 justify-between px-12">
          <h1 className="text-4xl px-6 font-bold">Events</h1>
          <h4 className='px-6 mt-2'>{events.length } Total , Proceed to resolve them</h4>
        </div>
        <div className="flex gap-12 w-1/2 px-12 py-2 justify-end">
          <div className="flex flex-col items-center justify-center">
            <span className="text-4xl font-bold">44 </span>
            <span className="text-gray-500">Done</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-4xl font-bold">13</span>
            <span className="text-gray-500">In Progress</span>
          </div>
          <div>
            <button onClick={() => setIsModalOpen(true)}   className="bg-black text-white px-6 py-2 rounded-full text-lg hover:bg-white hover:text-black hover:border hover:border-black">  Add Event</button>
          </div>
        </div>
      </div>
      <div className="flex-1 mt-6 h-[300px] px-6 overflow-y-auto">
        {events.map((ev, idx) => (
            <div key={idx} className="flex justify-between items-center bg-gray-200 p-4 rounded mb-2">
            <span className='px-2'>{idx + 1} -  </span>
            <span className="flex-1 text-left">   { ev.name}</span>
            <span className="w-32 text-center">{ev.date}</span>

            <button
            onClick={() => {
            const updated = events.filter((_, i) => i !== idx);
            setEvents(updated);
            localStorage.setItem('events', JSON.stringify(updated));
            }}
            className="text-red-500 hover:text-red-700" >   <FiTrash2 size={20} /> </button>
            </div>
        ))}
        </div>



      {/* Modal */}
      <EventModal isOpen={isModalOpen}  onClose={()=>setIsModalOpen(false)} onSave={handleSave} />
    </div>
  );
};

export default Tasks;

