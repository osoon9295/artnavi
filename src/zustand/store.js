import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist((set) => ({
    shows: [],
    setShows: (shows) => set((state) => ({ shows: [...state, shows] })),
    showInfo: {},
    setShowInfo: (info) => set(() => ({ showInfo: info }))
  }))
);

export default useStore;
