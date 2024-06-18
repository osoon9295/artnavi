import React from 'react';
import logoImage from '../logo/artnavi.png';
import { Map } from 'react-kakao-maps-sdk';
import useKakaoLoader from './KakaoLoader';

function BasicMap() {
  useKakaoLoader();

  return (
    <Map
      id="map"
      center={{
        lat: 37.564214,
        lng: 127.001699,
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "350px",
      }}
      level={3} // 지도의 확대 레벨
    />
  )
}

export default BasicMap;