import { create } from 'zustand';

const useShowStore = create((set) => ({
  shows: [],
  /**
   * @param {shows[]} shows 전시 목록 입력
   */
  setShows: (totalShows) => set(() => ({ shows: totalShows })),

  showInfo: {},
  /**
   * @param {{...}} info 전시에 대한 정보
   */
  setShowInfo: (info) => set(() => ({ showInfo: info })),

  museumTitle: { title: '박물관 이름을 검색해주세요', inputKeyword: ' ' },
  setMuseumTitle: (museum, inputKeyword) => set(() => ({ museumTitle: { title: museum, inputKeyword: inputKeyword } })),

  location: {},

  setLocation: ({ lat, lng }) => set(() => ({ location: { lat: lat, lng: lng } })),

  modalOptions: {},
  modalOpen: (newModalOptions) => set(() => ({ modalOptions: newModalOptions })),
  modalClose: () => set(() => ({ modalOptions: null }))
}));

export default useShowStore;
