import React from 'react';
import Swal from 'sweetalert2';
import logoImage from '../../public/logo/artnavi.png';
import { kcisaApi } from '../api/kcisa.api';
import useShowStore from '../zustand/store';
import CardList from './Main/ExhibitList';

const weatherAPIKey = 'a42d7ee85839a67d4fe350775f82d621';

export default function OnlyLayout() {
  const { setShows } = useShowStore();

  const { mutate: getShows } = useMutation({
    mutationFn: (museum) => kcisaApi.getShows(museum),
    onSuccess: (data) => setShows(data),
    onError: (error) => Swal.fire({ title: error })
  });
  useEffect(() => {
    getShows('공주박물관');
  }, []);
  return (
    <>
      <div className="w-[1440px] h-[920px] flex m-auto">
        <div className="w-[320px] h-[920px] bg-amber-200">
          <header>
            <img src={logoImage}></img>
            <div>
              <span>현재 날씨</span>
              <span>온도</span>
            </div>
          </header>
          <CardList />
          <footer>
            <p className="text-center text-green-500 mt-14">@2024 all rights reserved</p>
          </footer>
        </div>
        <div className="w-[1120px] h-[920px] flex "></div>
      </div>
    </>
  );
}
