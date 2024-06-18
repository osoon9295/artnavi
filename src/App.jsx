import React from 'react';
import Map from './components/Map';

const App = () => {
  return (
    <div>
      <h2 className="my-4 text-2xl font-bold text-center">아트나비</h2>
      <div className="flex justify-center">
        <Map />
      </div>
    </div>
  );
};

export default App;