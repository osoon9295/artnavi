import React, { useState } from 'react';
import logoImage from '../../../public/logo/artnavi.png';
import { useEffect } from 'react';
import CardList from './ExhibitList';
import axios from 'axios';

const API_KEY = "a42d7ee85839a67d4fe350775f82d621";

export default function MapAside() {
const [weather, setWeather] = useState(null)

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
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );

      // id 찾아서 매칭 후 description 한글 번역된 거 가져오기
      // const weatherId = res.data.weather[0].id;
      // const weatherKo = weatherDescKo[weatherId];
      
      // 날씨 아이콘 가져오기
      const weatherIcon = res.data.weather[0].icon;
      const weatherIconAdrs = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
      // 소수점 버리기
      const temp = Math.round(res.data.main.temp);

      setWeather(res.data);
      
    } catch (err){ 
      console.error(err);
    }
  };
  
  console.log(weather);
  
  return (
    <div className="w-[320px] h-[920px] bg-amber-200">
      <header className="flex items-center">
        <img src={logoImage} className="mr-4" />
        <div className="flex flex-col">
            <span>{`현재 날씨: ${weather ? weather.weather[0].main : '로딩중'}`}</span>
            <span>{`온도: ${weather ? weather.main.temp : '로딩중'}`}</span>
        </div>
      </header>
      <CardList />
      <footer>
        <p className="text-center text-green-500">@2024 all rights reserved</p>
      </footer>
    </div>
  );
}

