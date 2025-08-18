import React from 'react'
import { FiTrash2 } from 'react-icons/fi';

interface MyEvent {
    name: string;
    date: string;
}

interface CardViewProps {
    events: MyEvent[];
    onDelete: (idx: number) => void;
}

const CardView :React.FC<CardViewProps> = ({events, onDelete}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
        {events.map((ev, idx) => (
            <div key={idx} className="bg-gray-200 p-4 rounded shadow">
                <h2 className="font-bold">{ev.name}</h2>
                <p>{ev.date}</p>
                <button onClick={() => onDelete(idx)} className="text-red-500 mt-2" >   Delete </button>
            </div>
        ))}
    </div>       
  )
}

export default CardView
