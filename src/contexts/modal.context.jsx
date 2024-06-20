import { createContext, useContext, useState } from 'react';
import ShowDetailModal from './../components/modal/ShowDetailModal';

const initalValue = {
  open: () => {},
  close: () => {}
};

const ModalContext = createContext(initalValue);

export const useModal = () => useContext(ModalContext);

function ModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const value = {
    open: () => {
      setIsModalOpen(true);
    },
    close: () => {
      setIsModalOpen(false);
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
