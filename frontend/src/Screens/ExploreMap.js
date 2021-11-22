import ReactMapGL, { Marker } from "react-map-gl";
import { useEffect, useState } from "react";
import SideBar from "./SideBar";

export default function ExploreMap() {
  const [modalStyle, setModalStyle] = useState("hidden");
  const [myLocation, setMyLocation] = useState({
    latitude: 10.850516,
    longitude: 76.27108,
  });
  navigator.geolocation.getCurrentPosition(function (position) {
    setMyLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  });
  const [viewport, setViewport] = useState({
    latitude: myLocation.latitude,
    longitude: myLocation.longitude,
    zoom: 8,
    pitch: 50,
    height: window.innerHeight,
    width: window.innerWidth,
  });
 const cla=className({
  //  visibility:${modalStyle}
 })
  return (
    <div className="grid grid-cols-8">
      <div className="col-start-1 col-end-1">
        <SideBar></SideBar>
      </div>

      <div className="col-start-2 col-span-2">
        {" "}
        <ReactMapGL
          mapboxApiAccessToken={
            "pk.eyJ1IjoiYW5rdXI4NzQiLCJhIjoiY2t3MXNkZmh5MWJ5bzJwbm9tZzBuM3Q4aCJ9._O6gqAm52rzHD1H_wMs_uA"
          }
          {...viewport}
          onViewportChange={(viewport) => setViewport(viewport)}
        >
          <div
          style={{display:"flex",flexDirection:"column",width:"13rem",justifyContent:"center",alignItems:"center"}
          className=
            
          >
            <img
              className="object-cover w-24 h-24  rounded-full shadow"
              src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col justify-center mt-2">
              <p className="text-lg font-bold">Marta Clermont</p>
              <p className="mb-4 text-xs text-gray-800">Design Team Lead</p>
              <p className="text-sm tracking-wide text-gray-800">
                Secondary fermentation degrees plato units of bitterness, cask
                conditioned ale ibu real ale pint glass craft beer. krausen
                goblet grainy ibu.
              </p>
            </div>
          </div>
          <div
          // onMouseEnter={}
          // onMouseLeave={}
          >
            <Marker
              latitude={myLocation.latitude}
              longitude={myLocation.longitude}
              width={viewport.zoom * 5}
              height={viewport.zoom * 5}
            >
              <i class="fas fa-map-marker"></i>
            </Marker>
          </div>
        </ReactMapGL>
      </div>
    </div>
  );
}
// function modalOnHover(){
//   return( );
// }
