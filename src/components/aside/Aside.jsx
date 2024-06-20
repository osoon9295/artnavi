import React from 'react';
import WeatherInfo from './WeatherInfo';
import logoImage from '/public/logo/artnavi.png';
import ExhibitList from './ExhibitList';

function Aside() {
  return (
    <div className="w-[320px] h-full bg-amber-200 relative">
      <header className="flex items-center px-4">
        <img src={logoImage} className="mr-4" />
        <WeatherInfo />
      </header>
      <ExhibitList />
      <footer className='flex items-center justify-center bottom-0 h-20 bg-amber-200 absolute w-[320px]'>
        <p className="text-center text-green-500 ">@2024 all rights reserved</p>
      </footer>
    </div>
  );
}

export default Aside;
