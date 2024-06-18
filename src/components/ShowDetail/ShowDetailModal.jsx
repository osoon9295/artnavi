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
      <div className="w-full p-10 bg-white rounded max-w-80">
        <ShowDetail />
        <button onClick={handleCloseButtonClick}>닫기</button>
      </div>
    </BackDrop>
  );
}

export default ShowDetailModal;
