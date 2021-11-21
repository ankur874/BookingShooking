import ReactMapGL, { Marker } from "react-map-gl";
import { useState } from "react";

export default function ExploreMap() {
  const [viewport, setViewport] = useState({
    latitude: 28.615311,
    longitude: 76.982407,
    zoom: 8,
   
    height: window.innerHeight,
    width: window.innerWidth,
  });
  return (
    <div>
      <ReactMapGL
        mapboxApiAccessToken={
          "pk.eyJ1IjoiYW5rdXI4NzQiLCJhIjoiY2t3MXNkZmh5MWJ5bzJwbm9tZzBuM3Q4aCJ9._O6gqAm52rzHD1H_wMs_uA"
        }
        {...viewport}
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        <Marker latitude={22.0} longitude={86.2} width={viewport.zoom*5} height={viewport.zoom*5}><i class="fas fa-map-marker"></i></Marker>
      </ReactMapGL>
    </div>
  );
}
