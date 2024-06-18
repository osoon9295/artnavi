import React from 'react'
import { useEffect } from 'react'

function Map() {
    useEffect(() => {
        const container = document.getElementById("map");
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3
        };

        const map = new kakao.maps.Map(container, options);
        
    }, []);
  return (
    <div
    id="map"
    className="w-full h-96"
    ></div>
  )
}

export default Map