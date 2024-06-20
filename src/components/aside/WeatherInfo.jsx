import axios from 'axios';
import { useEffect, useState } from 'react';

export default function WeatherInfo() {
  const [weatherData, setWeatherData] = useState(null);

  const API_KEY = 'a42d7ee85839a67d4fe350775f82d621';

  // 현재 위치
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
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(res.data);  
      } catch (err){ 
      console.error(err);
      }
  };
  
  // id 찾아서 매칭 후 description 한글 번역된 거 가져오기
  // const weatherId = res.data.weather[0].id;
  // const weatherKo = weatherDescKo[weatherId];
  
  if (!weatherData) {
      return (
        <div className="flex flex-col">
          <span className='flex items-center text-sm'>현재 날씨: 로딩 중...</span>
          <span className='text-sm'>온도: 로딩 중...</span>
        </div>
    )
  }

  // 날씨 아이콘 가져오기
  const { weather, main } = weatherData;
  const temperature = Math.round(main.temp);
  const weatherIcon = weather[0].icon;
  const weatherIconSrc = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

  return (
    <div className="flex flex-col">
      <span className="flex items-center m-1 w-10px h-10px">
        현재 날씨: <img src={weatherIconSrc} className="h-9 w-9" />
      </span>
      <span className="m-1">온도: {temperature}°C</span>
    </div>
  );
}
