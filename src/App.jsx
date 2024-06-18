import React from 'react';
import MainMap from './components/MainMap';
import Map from './components/Map';

const App = () => {
  return (
    <div>
      <h2 className="my-4 text-2xl font-bold text-center">아트나비</h2>
      <div className="flex justify-center">
        <Map />
          <MainMap />
      </div>
    </div>
  );
};

export default App;