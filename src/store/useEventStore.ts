// store/eventStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Event {
  name: string;
  date: string;
}

interface EventStore {
  events: Event[];
  addEvent: (event: Event) => void;
  deleteEvent: (name: string) => void;
}

export const useEventStore = create<EventStore>()(
  persist(
    (set) => ({
      events: [],
      addEvent: (event) =>
        set((state) => ({ events: [...state.events, event] })),
      deleteEvent: (name) =>
        set((state) => ({
          events: state.events.filter((e) => e.name !== name),
        })),
    }),
    {
      name: "event-storage", // key for localStorage
    }
  )
);
