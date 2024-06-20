import Aside from '../components/aside/Aside';

export default function Layout({ children }) {
  return (
    <>
      <div className="flex justify-center w-screen m-auto h-4/5">
        <Aside />
        {children}
      </div>
    </>
  );
}
