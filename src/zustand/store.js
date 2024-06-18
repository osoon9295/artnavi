import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useShowStore = create(
  persist(
    (set) => ({
      shows: [],
      /**
       * @param {shows[]} shows 전시 목록 입력
       */
      setShows: (shows) => set((state) => ({ shows: [...state.shows, shows] })),

      showInfo: {},
      /**
       * @param {{...}} info 전시에 대한 정보
       */
      setShowInfo: (info) => set(() => ({ showInfo: info })),

      isModalOpen: false,
      setIsModalOpen: (isOpen) => set(() => ({ isModalOpen: isOpen }))
    }),
    {
      name: 'my-storage',
      getStorage: () => localStorage
    }
  )
);

export default useShowStore;
