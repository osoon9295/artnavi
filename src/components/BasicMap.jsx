import { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import useKaKaoLoader from '../kakao/useKaKaoLoader';
import MapAside from './Main/MapAside';

export default function BasicMap() {
  useKaKaoLoader();
  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();
  const [keyword, setKeyword] = useState('박물관');
  const [places, setPlaces] = useState([]);
  const [inputKeyword, setInputKeyword] = useState('박물관');

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
            address: data[i].address_name
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

  const handleSearch = (e) => {
    e.preventDefault();
    const inputKeyword = e.target.keyword.value;
    if (inputKeyword.includes('박물관') || inputKeyword.includes('뮤지엄')) {
      setKeyword(inputKeyword);
    } else {
      alert('키워드에 "박물관, 뮤지엄"을 포함시켜야 합니다.');
    }
  };

  const handleInputChange = (e) => {
    setInputKeyword(e.target.value);
  };

  return (
    <>
      <div className="w-[1440px] h-[920px] flex m-auto">
        <MapAside />
        <div className="relative">
          <Map // 지도를 표시할 Container
            id="map"
            className="w-[1120px] h-[920px] overflow-hidden"
            center={{
              lat: 37.564214,
              lng: 127.001699
            }}
            onCreate={setMap}
          >
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
          <div className="absolute top-0 left-0 bottom-0 w-[300px] my-[10px] ml-[10px] p-2.5 overflow-y-auto bg-black bg-opacity-70 z-10 text-sm rounded-lg ">
            <div className="text-center">
              <div>
                <form onSubmit={handleSearch}>
                  키워드 :{' '}
                  <input
                    type="text"
                    defaultValue={keyword}
                    onChange={handleInputChange}
                    name="keyword"
                    size="15"
                    className="p-1 border"
                    placeholder="키워드 입력"
                  />
                  <button type="submit" className="p-1 ml-1 text-white bg-blue-500 rounded">
                    검색하기
                  </button>
                </form>
              </div>
            </div>
            <hr className="my-3 border-t-2" />
            <ul>
              {places.map((place, index) => (
                <li key={index} className="mb-2">
                  <div className="p-2 mb-1 text-white border border-black rounded-md">{place.name}</div>
                  <div className="text-gray-400">{place.address}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
