import { useEffect, useState } from 'react';
import useShowStore from '../zustand/store';
import { kcisaApi } from './../api/kcisa.api';
import { useModal } from './../contexts/modal.context';

function ModalTest() {
  const modal = useModal();
  const [showList, setShowList] = useState(null);
  const setShowInfo = useShowStore((state) => state.setShowInfo);

  useEffect(() => {
    async function load() {
      const response = await kcisaApi.getShows('공주');

      setShowList(response);
    }

    load();
  }, []);

  function setShowInfoAndOpenModal(showInfo) {
    setShowInfo(showInfo);
    console.dir(modal);
    modal.open();
  }

  return (
    <main className="flex flex-col gap-10">
      아래 데이터 중 하나 선택시 Zustand에 해당전시정보가 저장되고, 모달에서 해당전시정보를 불러와서 모달을 표시하게
      됩니다.
      {showList ? (
        showList.map((show, idx) => {
          const {
            CNTC_INSTT_NM: institutionName,
            EVENT_SITE: eventSite,
            TITLE: showTitle,
            EVENT_PERIOD: eventPeriod,
            DESCRIPTION: description,
            IMAGE_OBJECT: postImgUrl,
            URL: officialUrl
          } = show;

          return (
            <button onClick={() => setShowInfoAndOpenModal(show)}>
              {idx}-{showTitle}
            </button>
          );
        })
      ) : (
        <div>'전시정보로딩중'</div>
      )}
    </main>
  );
}

export default ModalTest;
