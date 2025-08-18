'use client';
import React, { useState } from 'react';
import EventModal from './EventModal';
import ListView from './ListView';
import { useEventStore } from '../../src/store/useEventStore';

const Tasks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { events, addEvent, deleteEvent } = useEventStore();

  const handleSave = (event: { name: string; date: string }) => {
    addEvent(event);
  };

  return (
    <div className="w-full p-4">
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-col w-1/2 py-4 justify-between px-12">
          <h1 className="text-4xl px-6 font-bold">Events</h1>
          <h4 className="px-6 mt-2">
            {events.length} Total , Proceed to resolve them
          </h4>
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
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-black text-white px-6 py-2 rounded-full text-lg hover:bg-white hover:text-black hover:border hover:border-black"
            >
              Add Event
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 mt-6 h-[300px] px-6 overflow-y-auto">
        <ListView events={events} onDelete={deleteEvent} />
      </div>

      {/* Modal */}
      <EventModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
      />
    </div>
  );
};

export default Tasks;
