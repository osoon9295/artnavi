import React from 'react';
import logoImage from '../../public/logo/artnavi.png';
import CardList from './ExhibitList';

const weatherAPIKey = 'a42d7ee85839a67d4fe350775f82d621';

export default function OnlyLayout() {
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
        <div className="w-[1120px] h-[920px] flex "></div>
      </div>
    </>
  );
}
