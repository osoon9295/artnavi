import { useScrollLock } from '@yoojinyoung/usescrolllock';
import { createContext, useContext, useState } from 'react';
import ShowDetailModal from './../components/ShowDetail/ShowDetailModal';

const initalValue = {
  open: () => {},
  close: () => {}
};

const ModalContext = createContext(initalValue);

export const useModal = () => useContext(ModalContext);

function ModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollLock = useScrollLock();

  const value = {
    open: () => {
      setIsModalOpen(true);
      scrollLock.lock();
    },
    close: () => {
      setIsModalOpen(false);
      scrollLock.release();
    }
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      {isModalOpen && <ShowDetailModal />}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
