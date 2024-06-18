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
      <div className="flex flex-col items-center  pr-20 pl-20 pt-14 pb-10 bg-white rounded w-[800px] min-h-[660px] h-fit ">
        <ShowDetail />
        <button onClick={handleCloseButtonClick} className="w-full mt-5 ml-auto mr-auto">
          닫기
        </button>
      </div>
    </BackDrop>
  );
}

export default ShowDetailModal;
