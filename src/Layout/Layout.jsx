import Aside from '../components/aside/Aside';

export default function Layout({ children }) {
  return (
    <>
      <div className="flex justify-center w-screen h-screen m-auto bg-black bg-opacity-35">
        <Aside />
        {children}
      </div>
    </>
  );
}
