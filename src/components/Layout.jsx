import React, { useState } from 'react';
import logoImage from '../logo/artnavi.png';
import { useEffect } from 'react';
import CardList from './ExhibitList';
import axios from 'axios';

const weatherAPIKey = "a42d7ee85839a67d4fe350775f82d621";

export default function Map() {
const [weather, setWeather] = useState({})
  
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };

    const map = new kakao.maps.Map(container, options);
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeather(lat, lon);
    });
  }, []);
  
  const getWeather = async(lat, lon) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${weatherAPIKey}`
      );

      // id 찾아서 매칭 후 description 한글 번역된 거 가져오기
      const weatherId = res.data.weather[0].id;
      // const weatherKo = weatherDescKo[weatherId];
      // 날씨 아이콘 가져오기
      const weatherIcon = res.data.weather[0].icon;
      const weatherIconAdrs = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
      // 소수점 버리기
      const temp = Math.round(res.data.main.temp);

      setWeather({
        description: weatherKo,
        name: cityName,
        temp: temp,
        icon: weatherIconAdrs,
      });
    } catch (err){ 
      console.error(err);
    }
  };
  
  console.log(weather);
  
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

