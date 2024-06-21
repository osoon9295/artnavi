function BackDrop({ children, onClick }) {
  return (
    <div
      onClick={onClick}
      className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      {children}
    </div>
  );
}

export default BackDrop;
