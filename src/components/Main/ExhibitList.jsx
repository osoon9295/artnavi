import { useQuery, useMutation } from '@tanstack/react-query';
import React from 'react';
import { kcisaApi } from '../../api/kcisa.api';
import Swal from 'sweetalert2';
import useShowStore from '../../zustand/store';
import { useEffect } from 'react';

const CardList = () => {
  const { shows: zustandShows, museumTitle, setShows} = useShowStore();
  const { mutate: getShows } = useMutation({
    mutationFn: (museum) => kcisaApi.getShows(museum),
    onSuccess: (data) => setShows(data),
    onError: (error) => Swal.fire({ title: error })
  });
  useEffect(() => {
    getShows(museumTitle);
  }, [museumTitle]);
  return (
    <div className="flex flex-col items-center h-screen p-4">
      <div className="flex flex-col items-center justify-center p-4 m-2 text-center text-white bg-green-500 border border-gray-300 rounded-lg shadow-md w-52">
        {museumTitle}
      </div>
      <div className="flex flex-col items-center w-full h-full overflow-y-auto">
        {zustandShows?.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 m-2 text-center bg-white border border-gray-300 rounded-lg shadow-md h-36 w-52"
          >
            <h3 className="mb-2">{card?.TITLE}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
