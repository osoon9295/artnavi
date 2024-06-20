import { useQuery } from '@tanstack/react-query';
import { kcisaApi } from '../../api/kcisa.api';
import useShowStore from '../../zustand/store';
import { useModal } from '../../contexts/modal.context';

const ExhibitList = ({inputValue}) => {
  console.log("test", inputValue)
  const modal = useModal();
  const museumTitle = useShowStore((state) => state.museumTitle);
  
  const { setShows, shows: zustandShows } = useShowStore();
  /**
   * @return {string[]} 박물관 데이터가 배열에 담겨서 객체형식으로 리턴
   */
  const { data: shows } = useQuery({
    queryKey: ['shows'],
    queryFn: async () => {
      const showsData = await kcisaApi.getShows("제주");
      setShows(showsData);
      return showsData;
    }
  });

  const setShowInfo = useShowStore((state) => state.setShowInfo);
  
  return (
    <div className="flex flex-col items-center h-screen p-4">
      <div className="flex flex-col items-center justify-center p-4 m-2 text-center text-white bg-green-500 border border-gray-300 rounded-lg shadow-md w-52">
        {museumTitle}
      </div>
      <div className="flex flex-col items-center w-full h-full overflow-y-auto">
        {shows?.map((card, index) => {
        const {
                CNTC_INSTT_NM: institutionName,
                EVENT_SITE: eventSite,
                TITLE: showTitle,
                EVENT_PERIOD: eventPeriod,
                DESCRIPTION: description,
                IMAGE_OBJECT: postImgUrl,
                URL: officialUrl
              } = card;
          return (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 m-2 text-center bg-white border border-gray-300 rounded-lg shadow-md h-36 w-52"
          >
            <div className="mb-2 cursor-pointer" onClick={() => {
              setShowInfo(card);
              modal.open();
            }}>{showTitle}</div>
          </div>
          )
        
        })}
      </div>
    </div>
  );
};

export default ExhibitList;
