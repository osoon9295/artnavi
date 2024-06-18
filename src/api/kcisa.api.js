import axios from 'axios';

const KCISA_URL = import.meta.env.VITE_KCISA_URL;
const KCISA_KEY = import.meta.env.VITE_KCISA_KEY;

const axiosInstance = axios.create({ baseURL: `${KCISA_URL}?serviceKey=${KCISA_KEY}` });

export const kcisaApi = {
  /**
   * @param {string} museum 박물관 이름
   * @returns 해당 박물관에서 진행중인 전시들이 [{전시 내용},...]형태로 리턴댐
   */
  async getShows(museum) {
    const res = await axiosInstance.get();
    const shows = res.data.response.body.items.item;
    const filteredShows = shows.filter((show) => show.CNTC_INSTT_NM.includes(museum));
    console.log(filteredShows);
    return filteredShows;
  }
};
