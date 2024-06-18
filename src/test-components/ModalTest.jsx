import { useModal } from './../contexts/modal.context';

function ModalTest() {
  const modal = useModal();

  function handllOpenButtonClick() {
    modal.open();
  }

  function handleCloseButtonClick() {
    modal.close();
  }
  return (
    <main>
      <button onClick={handllOpenButtonClick}>모달오픈</button>
      <button onClick={handleCloseButtonClick}>모달닫기</button>
    </main>
  );
}

export default ModalTest;
