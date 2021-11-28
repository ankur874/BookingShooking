import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { listHotels } from "../actions/hotelActions";
import { listRestaurants } from "../actions/restaurantActions";
// import Rating from "../components/Rating";
import TabsRender from "../Components/Tabs";
// import "./HomeScreen.css";
import SideBar from "./SideBar";
import Rating from "../Components/Rating";

export default function HomeScreen() {
  let [rightName, setRightName] = useState("");
  let [rightDesc, setRightDesc] = useState("");
  let [rightFaci, setRightFaci] = useState("");
  let [rightImages, setRightImages] = useState([]);
  let [openId, setOpenId] = useState("");
  // let rightImages = [];

  const dispatch = useDispatch();
  const data = useSelector((state) => state.hotelList);
  const data1 = useSelector((state) => state.restaurantList);

  const { hotels, loading } = data;
  const { restaurants, loading1 } = data1;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, error } = userLogin;

  let newarr = [];
  let newarr1 = [];
  if (restaurants.data != null) {

    console.log(
      data1.restaurants.data[data1.restaurants.data.length - 1].id,
      "resId"
    );

  }
  // console.log(userInfo, "vdfvdfv");

  useEffect(() => {
    dispatch(listHotels());
    dispatch(listRestaurants());
  }, [dispatch]);
  function changeRightDrawer(click, e) {
    setRightName(e.name);
    setRightDesc(e.description);
    setRightImages(e.images);
    // rightImages=e.images;
    console.log(e._id, e.name);
    setOpenId(e._id);
  }
  const navigate = useNavigate();
  function HandleClick(e) {
    navigate(`/hoteloverview/${openId}`);
  }
  if (hotels.data == null || restaurants.data == null) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <img height="200" src="loading.gif" alt="some" />
      </div>
    );
  } else {
    newarr = restaurants.data;
    newarr.splice(3);
    newarr1 = restaurants.data;
    newarr1.splice(4);
    console.log(restaurants.data, "afadfdsfsdf");
    return (
      <div class="grid sm:grid-cols-1 bg-gray-100 md:grid-cols-6 ">
        <div class="sm:grid-cols-0 col-start-1 col-end-2">
          <SideBar />
        </div>
        <div class="col-start-2 mt-5 col-span-3">
          <p className="text-3xl font-semibold">EXPLORE</p>
          <div className="my-7">
            <div className="flex  flex-row justify-between">
              <a className="pb-3 text-blue-400" href="/explore">
                View All
              </a>
            </div>

            <div className="mr-2 grid grid-cols-3  gap-5">
              {newarr.map((e) => {
                return (
                  <div
                    onClick={(click) => changeRightDrawer(click, e)}
                    className="hover:scale-110"
                  >
                    {SingleLargeComponent(e)}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="my-10">
            <div className="flex flex-row">
              <p class="text-3xl py-2 mb-2 font-medium">Most Popular </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {newarr1.map((e) => {
                return (
                  <div className="hover:scale-110">
                    {singleSmallComponent(e)}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className=" col-start-5 bg-white ml-4 col-end-7 flex  flex-col ">
          <div className="flex flex-row items-center mb-2 justify-evenly bg-gray-700 p-8">
            <img
              class="inline-block h-20 w-20 rounded-full ring-2 ring-white"
              src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"
              alt=""
            />

            <div>
              <p className="font-semibold text-white text-base">
                {userInfo == null ? "Please Login" : userInfo.name}
              </p>
              <p className="font-semibold text-sm text-white">
                {userInfo == null ? "" : userInfo.email}
              </p>
            </div>
          </div>
          <p className="text-3xl font-semibold ml-2 my-2">{rightName}</p>

          <div className="h-1/2">
            <TabsRender facilities={rightFaci} desc={rightDesc}></TabsRender>
          </div>

          <img src={`/images/${rightImages[0]}`} alt="s" />
        </div>

        {rightName == "" ? (
          <div></div>
        ) : (
          <button
            onClick={(e) => HandleClick(e)}
            className="w-100% text-white bg-blue-500 col-span-3 text-3xl px-3 py-4 my-6 hover:bg-blue-600 rounded"
          >
            Book Now
          </button>
        )}
      </div>

    );
  }
}

function SingleLargeComponent(e) {
  return (
    <div class="max-w-sm bg-white relative  h-56 flex flex-col justify-between rounded-sm transition-all duration-75 hover:shadow-md shadow-sm  transform hover:-translate-y-1 hover:scale-110  ">
      <Rating />
      <img className="h-3/4 p-2" src={`/images/${e.images[0]}`} />
      <div class="px-2  py-1">
        <p class=" text-md font-bold mb-2">{e.name}</p>
        <div class="flex flex-row ">
          <i class="fas text-blue-400 fa-map-marker-alt"></i>
          <p class="text-sm text-gray-400 pl-2">{e.location}</p>
        </div>
        <div>
          <p class="text-xl mt-1 font-bold">
            <i class="fas fa-dollar-sign"></i>
            {e.Dining_price}
            <span class="text-sm text-gray-400 inline-block align-baseline">
              /table
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
function singleSmallComponent(e) {
  return (
    <div
      id="app"
      class="bg-white w-128 h-20 relative rounded shadow-md flex card text-grey-darkest"
    >
      <Rating />
      <img
        alt="Room "
        className="w-2/5 p-1 h-full rounded-lg transition-all duration-75  transform  hover:scale-110"
        src={`/images/${e.images[0]}`}
      />
      <div class="w-full flex flex-col">
        <div class="p-4 pb-0 flex-1">
          <h3 class="font-light mb-1 text-grey-darkest">{e.name}</h3>
          <div class="text-xs flex items-center mb-4">
            <i class="fas fa-map-marker-alt mr-1 text-grey-dark"></i>
            {e.location}
          </div>
        </div>
      </div>
    </div>
  );
}
