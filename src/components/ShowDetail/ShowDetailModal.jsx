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
      <div className="pr-10 pl-10 pt-10 pb-5 bg-white rounded w-[600px] min-h-[600px]">
        <ShowDetail />
        <button onClick={handleCloseButtonClick} className="w-full mt-5 ml-auto mr-auto">
          닫기
        </button>
      </div>
    </BackDrop>
  );
}

export default ShowDetailModal;
