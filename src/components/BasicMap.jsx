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
      }
    })
  }, [map, keyword]);

  return (
    <>
      <div className="w-[1440px] h-[920px] flex m-auto">
        <div className="w-[320px] h-[920px] bg-amber-200">
          <img src={logoImage}></img>
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
