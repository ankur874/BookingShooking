import ReactMapGL, { Marker } from "react-map-gl";
import { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import { listRestaurants } from "../actions/restaurantActions";

export default function ExploreMap() {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [desc, setDesc] = useState("");

  const [modalStyle, setModalStyle] = useState(false);
  const [myLocation, setMyLocation] = useState({
    latitude: 10.850516,
    longitude: 76.27108,
  });
  const [viewport, setViewport] = useState({
    latitude: myLocation.latitude,
    longitude: myLocation.longitude,
    zoom: 8,
    pitch: 50,
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const dispatch = useDispatch();
  const data1 = useSelector((state) => state.restaurantList);
  const { restaurants, loading1 } = data1;
  if (restaurants.data != null) {
    console.log(restaurants.data, "maodata");

    // temp.push(restaurants.data[9]);
    // temp.push(restaurants.data[8]);
    // // temp.push(restaurants.data[2])
    // temp.map((e) => console.log(e.coordinates[0], e.coordinates[1]));
  }
  navigator.geolocation.getCurrentPosition(function (position) {
    setMyLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  });

  useEffect(() => {
    dispatch(listRestaurants());
  }, [dispatch]);
  if (restaurants.data == null) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <img height="200" src="loading.gif" alt="some" />
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-8">
        <div className="col-start-1 col-end-1">
          <SideBar></SideBar>
        </div>

        <div className="col-start-2 col-span-2">
          <ReactMapGL
            mapboxApiAccessToken={
              "pk.eyJ1IjoiYW5rdXI4NzQiLCJhIjoiY2t3MXNkZmh5MWJ5bzJwbm9tZzBuM3Q4aCJ9._O6gqAm52rzHD1H_wMs_uA"
            }
            {...viewport}
            onViewportChange={(viewport) => setViewport(viewport)}
          >
            {modalStyle ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "13rem",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="bg-gray-900 p-2 text-gray-100 rounded-lg"
              >
                <img
                  className="object-cover w-24 h-24  rounded-full shadow"
                  src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt="Person"
                />
                <div className="flex flex-col justify-center mt-2">
                  <p className="text-lg font-bold">{name}</p>
                  <p className="mb-4 text-xs text-gray-300">{location}</p>
                </div>
              </div>
            ) : (
              <div></div>
            )}

            <>
              {restaurants.data.map((e) => (
                <div
                  onMouseEnter={() => {
                    setImg(e.images[0]);
                    setName(e.name);
                    setLocation(e.location);
                    setModalStyle(true);
                  }}
                  onMouseLeave={() => {
                    setModalStyle(false);
                  }}
                >
                  <Marker
                    className="transition-all duration-75 hover:shadow-md  transform  hover:scale-110 "
                    latitude={e.coordinates[0]}
                    longitude={e.coordinates[1]}
                    width={viewport.zoom * 5}
                    height={viewport.zoom * 5}
                  >
                   <i className="text-sm fas fa-concierge-bell"></i>
                  </Marker>
                  )
                </div>
              ))}
            </>
          </ReactMapGL>
        </div>
      </div>
    );
  }
}
// function modalOnHover(){
//   return( );
// }
