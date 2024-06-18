import { Map, MapMarker } from 'react-kakao-maps-sdk';
import logoImage from '/logo/artnavi.png';
import { useEffect, useState } from 'react';
import useKaKaoLoader from '../kakao/useKaKaoLoader';

export default function BasicMap() {
  useKaKaoLoader();
  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();

  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch('서울 미술관', (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds();
        let markers = [];

        for (let i = 0; i < data.length; i++) {
          // @ts-ignore
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x
            },
            content: data[i].place_name
          });
          // @ts-ignore
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(markers);

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    });
  }, [map]);

  return (
    <>
      <div className="w-[1440px] h-[920px] flex m-auto">
        <div className="w-[320px] h-[920px] bg-amber-200">
          <img src={logoImage}></img>
        </div>
        <div className="relative">
          <Map // 지도를 표시할 Container
            id="map"
            className="w-[1120px] h-[920px] overflow-hidden"
            center={{
              // 지도의 중심좌표
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
                <form>
                  키워드 : <input type="text" size="15" className="p-1 border" />
                  <button type="submit" className="p-1 ml-1 text-white bg-blue-500 rounded">
                    검색하기
                  </button>
                </form>
              </div>
            </div>
            <hr className="my-3 border-t-2" />
            <ul>대림 미술관</ul>
            <div className="my-3 text-center ">서울 종로구 자하문로 4길 21</div>
          </div>
        </div>
      </div>
    </>
  );
}
