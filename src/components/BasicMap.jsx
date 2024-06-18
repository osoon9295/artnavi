import { Map } from 'react-kakao-maps-sdk';
import logoImage from '../logo/artnavi.png';

export default function BasicMap() {
  return (
    <>
      <div className="w-[1440px] h-[920px] flex m-auto">
        <div className="w-[320px] h-[920px] bg-amber-200">
          <img src={logoImage}></img>
        </div>
        <div>
          <Map // 지도를 표시할 Container
            id="map"
            className="w-[1120px] h-[920px]"
            center={{
              // 지도의 중심좌표
              lat: 37.564214,
              lng: 127.001699
            }}
          />
        </div>
      </div>
    </>
  );
}
