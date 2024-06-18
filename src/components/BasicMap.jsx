import { Map, MapMarker } from 'react-kakao-maps-sdk';
import logoImage from '../logo/artnavi.png';
import useKakaoLoader from './UseKakaoLoader';
import { useState } from 'react';
import { useEffect } from 'react';

export default function BasicMap() {
  useKakaoLoader();

  const [info, setInfo] = useState(null); 
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState(null);
  const [keyword, setKeyword] = useState("서울 미술관");
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    if(!map) return; 

    const ps = new kakao.maps.services.Places();

    ps.keywordSearch("서울 미술관", (data, status, _pagination) => {
      if(status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();
        let markers = [];

        for (let i = 0; i < data.length; i++) {
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          })
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
        }
        setMarkers(markers);
        map.setBounds(bounds);
        setPlaces(places);
      }
    })
  }, [map, keyword]);

  const handleSearch = (e) => {
    e.preventDefault();
    const keywordInput = e.target.keyword.value;
    setKeyword(keywordInput);
  }

  return (
    <>
      <div className="w-[1440px] h-[920px] flex m-auto">
        <div className="w-[320px] h-[920px] bg-amber-200">
          <img src={logoImage} alt="logo" className="mb-4"/>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              name="keyword"
              placeholder="키워드 입력"
              className="w-full p-2 mb-2 border"
            />
            <button type="submit" className="w-full p-2 text-white bg-blue-500">
              검색
            </button>
          </form>
        </div>
        <div>
          <Map
            id="map"
            className="w-[1120px] h-[920px]"
            level={3}
            onCreate={setMap}
            center={{
              lat: 37.564214,
              lng: 127.001699
            }}
          >
             {markers.map((marker) => (
        <MapMarker
          key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
          position={marker.position}
          onClick={() => setInfo(marker)}
        >
          {info &&info.content === marker.content && (
            <div style={{color:"#000"}}>{marker.content}</div>
          )}
        </MapMarker>
      ))}
    </Map>
        </div>
      </div>
    </>
  );
}
