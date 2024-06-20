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

  museumTitle: '박물관 이름을 검색해주세요',
  setMuseumTitle: (museum) => set(() => ({ museumTitle: museum })),

  modalOptions: {},
  modalOpen: (newModalOptions) => set(() => ({ modalOptions: newModalOptions })),
  modalClose: () => set(() => ({ modalOptions: null }))
}));

export default useShowStore;
