import React from 'react';
import logoImage from '../logo/artnavi.png';
import { useEffect } from 'react';

export default function Map() {
  // 지도 생성
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };

    const map = new kakao.maps.Map(container, options);

    // 마커가 표시될 위치입니다
    const markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);

    // 마커를 생성합니다
    const marker = new kakao.maps.Marker({
      position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
  }, []);

  return (
    <>
      <div className="w-[1440px] h-[920px] flex m-auto">
        <div className="w-[320px] h-[920px] bg-amber-200">
          <img src={logoImage}></img>
        </div>
        <div className="w-[1120px] h-[920px] flex ">
          <span id="map" className="w-[1120px] h-[920px]">
            지도
          </span>
        </div>
      </div>
    </>
  );
}
