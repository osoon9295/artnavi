import axios from 'axios';
import Swal from 'sweetalert2';

const KCISA_URL = import.meta.env.VITE_KCISA_URL;
const KCISA_KEY = import.meta.env.VITE_KCISA_KEY;

const axiosInstance = axios.create({ baseURL: `${KCISA_URL}?serviceKey=${KCISA_KEY}` });

export const kcisaApi = {
  /**
   * @param {string} museum 박물관 이름
   * @returns 해당 박물관에서 진행중인 전시들이 [{전시 내용},...]형태로 리턴댐
   */
  async getShows({ title, inputKeyword }) {
    try {
      const res = await axiosInstance.get();
      const shows = res.data.response.body.items.item;
      const filteredShows = shows.filter((show) => show.CNTC_INSTT_NM.includes(title));
      if (filteredShows.length === 0) {
        const newFilteredShow = shows.filter((show) => show.CNTC_INSTT_NM.includes(inputKeyword));
        return newFilteredShow;
      }
      return filteredShows;
    } catch (error) {
      Swal.fire({
        title: '미술관 정보 호출에 실패했습니다.',
        text: '다시 입력해주세요',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33'
      });
    }
  }
};
