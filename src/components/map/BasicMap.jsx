import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Map, MapMarker, MapTypeControl, ZoomControl } from 'react-kakao-maps-sdk';
import Swal from 'sweetalert2';
import { kcisaApi } from '../../api/kcisa.api';
import useShowStore from '../../zustand/store';
import useKaKaoLoader from './hook/UseKakaoLoader';

export default function BasicMap() {
  useKaKaoLoader();

  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();
  const [keyword, setKeyword] = useState('');
  const [places, setPlaces] = useState([]);
  const [inputKeyword, setInputKeyword] = useState('');

  const { setShows, shows, museumTitle, setMuseumTitle, setLocation, location } = useShowStore();

  const queryClient = useQueryClient();

  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(keyword, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds();
        let markers = [];
        let places = [];

        for (let i = 0; i < data.length; i++) {
          // @ts-ignore
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x
            },
            content: data[i].place_name
          });
          places.push({
            name: data[i].place_name,
            address: data[i].address_name,
            lat: data[i].y,
            lng: data[i].x
          });
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(markers);
        setPlaces(places);
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    });
  }, [map, keyword]);

  const { data: showsData } = useQuery({
    queryKey: ['shows'],
    queryFn: async () => {
      const showsData = await kcisaApi.getShows(museumTitle);
      setShows(showsData);

      return showsData;
    },
    onSuccess: () => queryClient.invalidateQueries('shows')
  });
  const handleSearch = (e) => {
    e.preventDefault();

    if (inputKeyword.includes('박물관') || inputKeyword.includes('뮤지엄') || inputKeyword.includes('미술관')) {
      setKeyword(inputKeyword);
      setInputKeyword(inputKeyword.split(' ').join(''));
    } else {
      Swal.fire({
        title: '박물관, 뮤지엄, 미술관을 포함하여 검색하셔야 합니다.',
        icon: 'warning'
      });
      return;
    }
  };

  const handleInputChange = (e) => {
    setInputKeyword(e.target.value);
  };

  return (
    <>
      <div className="relative">
        <Map // 지도를 표시할 Container
          id="map"
          className="w-[1120px] h-full overflow-hidden"
          center={{
            lat: 37.564214,
            lng: 127.001699
          }}
          onCreate={setMap}
        >
          <MapTypeControl position={'TOPRIGHT'} />
          <ZoomControl position={'RIGHT'} />
          {markers.map((marker) => (
            <MapMarker
              key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
              position={marker.position}
              onClick={() => setInfo(marker)}
            >
              {info && info.content === marker.content && <div style={{ color: '#000' }}>{marker.content}</div>}
            </MapMarker>
          ))}
        </Map>
        <div className="absolute top-0 left-0 bottom-0 w-[300px] h-[500px] my-[10px] ml-[10px] p-2.5 overflow-y-auto bg-black bg-opacity-70 z-10 text-sm rounded-lg ">
          <div className="text-center">
            <div>
              <form className="text-white" onSubmit={handleSearch}>
                키워드 :{' '}
                <input
                  type="text"
                  defaultValue={keyword}
                  onChange={handleInputChange}
                  name="keyword"
                  size="15"
                  className="p-1 text-black border"
                  placeholder="키워드 입력"
                />
                <button type="submit" className="p-1 ml-1 text-white bg-blue-500 rounded">
                  검색하기
                </button>
              </form>
            </div>
          </div>
          <hr className="my-3 border-b-2 border-solid" />
          <ul>
            {places.map((place, index) => (
              <li
                key={index}
                onClick={() => {
                  setLocation(place),
                    setMuseumTitle(place.name, inputKeyword.split(' ').join('')),
                    console.log('location', location);
                }}
                className="mb-2 hover:cursor-pointer"
              >
                <div className="p-2 mb-1 text-white border border-black rounded-md">{place.name}</div>
                <div className="text-gray-400 h-[40px] border-b-2 border-solid">{place.address}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
