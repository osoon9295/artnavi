import BackDrop from './BackDrop';
import ShowDetail from './ShowDetail';
import { useModal } from './../../contexts/modal.context';

function ShowDetailModal() {
  const modal = useModal();

  function handleCloseButtonClick() {
    modal.close();
  }

  function handleOutsideModalAreaClick(e) {
    if (e.target === e.currentTarget) {
      modal.close();
    }
  }

  return (
    <BackDrop onClick={handleOutsideModalAreaClick}>
      <div className="flex flex-col pt-16 pb-14  pr-20 pl-20 bg-white rounded w-[800px] h-[660px] overflow-auto">
        <ShowDetail />
        <button onClick={handleCloseButtonClick} className="mt-5 ml-auto mr-auto ">
          닫기
        </button>
      </div>
    </BackDrop>
  );
}

export default ShowDetailModal;
