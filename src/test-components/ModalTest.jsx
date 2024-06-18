import { useModal } from './../contexts/modal.context';
import { kcisaApi } from './../api/kcisa.api';
import { useEffect, useState } from 'react';

function ModalTest() {
  const modal = useModal();
  const [showList, setShowList] = useState(null);

  function handllOpenButtonClick() {
    modal.open();
  }

  function handleCloseButtonClick() {
    modal.close();
  }

  function handleShowList() {
    console.log('showList ↓');
    console.dir(showList);
  }

  useEffect(() => {
    async function load() {
      const response = await kcisaApi.getShows('공주');

      setShowList(response);
    }
    load();
  }, []);
  return (
    <main className="flex flex-col">
      <button onClick={handllOpenButtonClick}>모달오픈</button>
      <button onClick={handleCloseButtonClick}>모달닫기</button>
      <button onClick={handleShowList}>전시 정보 콘솔에 출력</button>
    </main>
  );
}

export default ModalTest;
