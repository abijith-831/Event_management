// components/EventModal.tsx
import React, { useState } from 'react';

interface EventModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (event: { name: string; date: string }) => void;
  }

const EventModal: React.FC<EventModalProps> = ({ isOpen, onClose, onSave }) => {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleSave = () => {
    if (name && date) {
      onSave({ name, date });
      setName('');
      setDate('');
      onClose();
    } else {
      alert('Please enter name and date');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 w-1/3 relative">
        <button onClick={onClose}className="absolute top-4 right-4 text-gray-500 hover:text-black" >   ✕ </button>
        <h2 className="text-2xl font-bold mb-4">Add Event</h2>
       
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}  placeholder="Event Name" className="border p-2 w-full mb-4 rounded" />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Event Name" className="border p-2 w-full mb-4 rounded" />
        <div className='flex flex-row justify-between'>
            <button onClick={onClose} className="bg-white text-black border border-black px-4 py-2 rounded hover:bg-gray-300"> close</button>
            <button  onClick={handleSave} className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"> Save</button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
