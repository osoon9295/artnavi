import BackDrop from './BackDrop';
import ShowDetail from './ShowDetail';
import { useModal } from './../../contexts/modal.context';

function ShowDetailModal() {
  const modal = useModal();

  function handleCloseButtonClick() {
    modal.close();
  }

  return (
    <BackDrop>
      <ShowDetail />
      <button onClick={handleCloseButtonClick}>닫기</button>
    </BackDrop>
  );
}

export default ShowDetailModal;
