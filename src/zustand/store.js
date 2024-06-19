import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useShowStore = create(
  persist(
    (set) => ({
      shows: [],
      /**
       * @param {shows[]} shows 전시 목록 입력
       */
      setShows: (shows) => set((state) => (state.shows = [...shows])),

      showInfo: {},
      /**
       * @param {{...}} info 전시에 대한 정보
       */
      setShowInfo: (info) => set(() => ({ showInfo: info })),

      museumTitle: "박물관을 선택해주세요.",
      setMuseumTitle: (museum) => set(() => ({ museumTitle: museum })),


      modalOptions: {},
      modalOpen: (newModalOptions) => set(() => ({ modalOptions: newModalOptions })),
      modalClose: () => set(() => ({ modalOptions: null }))
    }),

    {
      name: 'my-storage',
      getStorage: () => localStorage
    }
  )
);

export default useShowStore;
