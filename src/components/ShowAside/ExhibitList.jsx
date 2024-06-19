import { useQuery } from '@tanstack/react-query';
import { kcisaApi } from '../../api/kcisa.api';
import useShowStore from '../../zustand/store';
import museumTitle from '../../zustand/store';

const ExhibitList = () => {
  const { setShows, shows: zustandShows } = useShowStore();
  /**
   * @return {string[]} 박물관 데이터가 배열에 담겨서 객체형식으로 리턴
   */
  const { data: shows } = useQuery({
    queryKey: ['shows'],
    queryFn: async () => {
      const showsData = await kcisaApi.getShows('공주박물관');
      setShows(showsData);
      return showsData;
    }
  });

  return (
    <div className="flex flex-col items-center h-screen p-4">
      <div className="flex flex-col items-center justify-center p-4 m-2 text-center text-white bg-green-500 border border-gray-300 rounded-lg shadow-md w-52">
        {museumTitle}
      </div>
      <div className="flex flex-col items-center w-full h-full overflow-y-auto">
        {zustandShows?.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 m-2 text-center bg-white border border-gray-300 rounded-lg shadow-md h-36 w-52"
          >
            <h3 className="mb-2">{card?.TITLE}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExhibitList;
