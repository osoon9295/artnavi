import Aside from '../components/aside/Aside';

export default function Layout({ children }) {
  return (
    <>
      <div className="flex justify-center w-screen h-screen m-auto">
        <Aside />
        {children}
      </div>
    </>
  );
}
