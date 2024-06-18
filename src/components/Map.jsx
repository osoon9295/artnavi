import React from 'react';
import logoImage from '../logo/artnavi.png';

export default function Map() {
  return (
    <>
      <div className="w-[1440px] h-[920px] flex m-auto">
        <div className="w-[320px] h-[920px] bg-amber-200">
          <img src={logoImage}></img>
        </div>
        <div className="w-[1120px] h-[920px] bg-lime-400 flex items-center justify-center flex-row">
          <p>지도</p>
        </div>
      </div>
    </>
  );
}
