import { useModal } from './../../contexts/modal.context';
import BackDrop from './BackDrop';
import ShowDetail from './ShowDetail';

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
      <div className="flex flex-col pt-16 pb-14  pr-20 pl-20 bg-white rounded w-[800px] h-[660px] overflow-auto relative">
        <button onClick={handleCloseButtonClick} className="absolute top-0 right-0 text-zinc-500">
          x
        </button>
        <ShowDetail />
        <button onClick={handleCloseButtonClick} className="mt-5 ml-auto mr-auto ">
          닫기
        </button>
      </div>
    </BackDrop>
  );
}

export default ShowDetailModal;
