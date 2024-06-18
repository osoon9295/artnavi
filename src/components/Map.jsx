import React from 'react';
import logoImage from '../logo/artnavi.png';
import { useEffect } from 'react';
import CardList from './ExhibitList';

export default function Map() {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };

    const map = new kakao.maps.Map(container, options);
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
        <div className="w-[1120px] h-[920px] flex ">
          <span id="map" className="w-[1120px] h-[920px]">
            지도
          </span>
        </div>
      </div>
    </>
  );
}
