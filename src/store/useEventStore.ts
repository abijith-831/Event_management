// store/useEventStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type MyEvent = {
  name: string;
  date: string;
};

type ViewType = "card" | "list" ;

type EventStore = {
  events: MyEvent[];
  addEvent: (event: MyEvent) => void;
  deleteEvent: (index: number) => void;

  viewType: ViewType;
  setViewType: (view: ViewType) => void;


};

export const useEventStore = create<EventStore>()(
  persist(
    (set) => ({
      events: [],
      addEvent: (event) =>
        set((state) => ({
          events: [...state.events, event],
        })),
      deleteEvent: (index) =>
        set((state) => ({
          events: state.events.filter((_, i) => i !== index),
        })),
        viewType: "card", // default
      setViewType: (view) => set({ viewType: view }),
    }),
    { name: "event-storage" }
  )
);
