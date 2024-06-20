import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';
import { useState } from 'react';
import { kcisaApi } from '../../api/kcisa.api';
import { useModal } from '../../contexts/modal.context';
import useShowStore from '../../zustand/store';

const ExhibitList = () => {
  const modal = useModal();
  const museumTitle = useShowStore((state) => state.museumTitle);
  const { setShows, shows: zustandShows } = useShowStore();
  const [clickedItem, setClickedItem] = useState(0);
  /**
   * @return {string[]} 박물관 데이터가 배열에 담겨서 객체형식으로 리턴
   */
  const { data: shows, isLoading: queryLoading } = useQuery({
    queryKey: ['shows', museumTitle],
    queryFn: async () => {
      const showsData = await kcisaApi.getShows(museumTitle);
      setShows(showsData);
      return showsData;
    }
  });

  const setShowInfo = useShowStore((state) => state.setShowInfo);
  return (
    <div className="flex flex-col items-center h-5/6">
      <div className="flex flex-col items-center justify-center p-4 m-2 text-center text-white bg-green-500 border border-gray-300 rounded-lg shadow-md w-60">
        {museumTitle.title}
      </div>
      <div className="flex flex-col items-center w-full h-full overflow-y-auto">
        {queryLoading ? (
          <div className="mt-6 text-2xl text-black">로딩 중...</div>
        ) : shows?.length === 0 ? (
          <div className="mt-6 text-2xl text-black">데이터가 없습니다.</div>
        ) : (
          /* 카드에 호버효과넣기 */
          shows?.map((card, index) => {
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
                className={`${clsx(
                  index === clickedItem && 'bg-gray-300 shadow-outline'
                )} flex flex-col items-center justify-center p-4 m-2 text-center bg-white border border-gray-300 rounded-lg shadow-md h-36 w-52 hover:cursor-pointer`}
                onClick={() => {
                  setShowInfo(card);
                  setClickedItem(index);
                  modal.open();
                }}
              >
                <div className="mb-2">{showTitle}</div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ExhibitList;
