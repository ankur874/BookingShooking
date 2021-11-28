import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { listHotels } from "../actions/hotelActions";
import { listRestaurants } from "../actions/restaurantActions";
// import Rating from "../components/Rating";
import TabsRender from "../components/Tabs";
// import "./HomeScreen.css";
import SideBar from "./SideBar";
import Rating from "../components/Rating";

export default function HomeScreen() {
  let [rightName, setRightName] = useState("");
  let [rightDesc, setRightDesc] = useState("");
  let [rightFaci, setRightFaci] = useState("");
  let [rightImages, setRightImages] = useState([]);
  let [openId, setOpenId] = useState("");
  // let rightImages = [];

  const dispatch = useDispatch();
  const data1 = useSelector((state) => state.restaurantList);
  const { restaurants, loading1 } = data1;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, error } = userLogin;

  useEffect(() => {

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
  if ( restaurants.data == null) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <img height="200" src="loading.gif" alt="some" />
      </div>
    );
  } else {
    console.log(restaurants.data, "afadfdsfsdf");
    return (
      <div class="grid sm:grid-cols-1 bg-gray-100 md:grid-cols-6 ">
        <div class="sm:grid-cols-0 col-start-1 col-end-2">
          <SideBar />
        </div>
        <div class="col-start-2 mt-5  col-span-3">
          <p className="text-2xl font-semibold">Booking That Matters</p>
          <div class="flex flex-row my-5">
            <div class="sm:grid-cols-1">
              <p class="text-xl font-medium">Date</p>
              <input
                className="placeholder-gray-500 placeholder-opacity-25 p-2 bg-white ml-0"
                type="date"
                placeholder="Jul 14 - Jul 16"
              />
            </div>
            <div class="sm:grid-cols-1">
              <p class="text-xl font-medium">Where To</p>
              <input
                type="text"
                className="placeholder-gray-500 ml-0 p-2 bg-white"
                placeholder="Location"
              ></input>
              <button
                class="bg-blue-500 hover:bg-blue-700 hover:scale-110 transform transition-all active:scale-105 hover:shadow-md active:shadow-sm
               text-white font-bold py-2 px-4 rounded-full"
              >
                Search
              </button>
            </div>
          </div>

          <div className="my-7">
            <div className="flex  flex-row justify-between">
              <p class="text-xl mb-2 font-medium">Explore </p>
              <a className=" text-blue-400" href="/explore">
                View All
              </a>
            </div>

            <div className="grid grid-cols-3  gap-5">
              {restaurants.data.map((e) => {
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
              <p class="text-xl mb-2 font-medium">Most Popular </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {singleSmallComponent()}
              {singleSmallComponent()}
              {singleSmallComponent()}
              {singleSmallComponent()}
            </div>
          </div>
        </div>

        <div className="col-start-5 bg-white ml-4 col-end-7 flex  flex-col">
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
          <p className="text-2xl font-semibold ml-5 ">{rightName}</p>

          <div className="">
            <TabsRender facilities={rightFaci} desc={rightDesc}></TabsRender>
          </div>
          <div class="grid-cols-3  p-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
            <div class="w-full rounded">
              {rightImages.length >= 2 ? (
                <img src={`/images/${rightImages[1]}`} alt="s" />
              ) : (
                <div></div>
              )}
            </div>
            <div class="w-full col-span-2 row-span-2 rounded">
              <img src={`/images/${rightImages[0]}`} alt="s" />
            </div>
            <div class="w-full rounded">
              {rightImages.length >= 3 ? (
                <img
                  src="https://cdn.venuelook.com/uploads/space_16878/1547448955_595x400.png"
                  alt="s"
                />
              ) : (
                <div></div>
              )}
            </div>
            {rightName == "" ? (
              <div></div>
            ) : (
              <button
                onClick={(e) => HandleClick(e)}
                className="w-100% bg-blue-500 col-span-3 text-3xl m-12 hover:bg-blue-600"
              >
                Book
              </button>
            )}
          </div>
        </div>
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
function singleSmallComponent() {
  return (
    <div
      id="app"
      class="bg-white w-128 h-20 relative rounded shadow-md flex card text-grey-darkest"
    >
      <Rating />
      <img
        alt="Room "
        className="w-2/5 p-1 h-full rounded-lg transition-all duration-75  transform  hover:scale-110"
        src="https://www.amritsruae.com/blog/wp-content/uploads/2019/12/Amritsr-Dubai-2.jpg"
      />
      <div class="w-full flex flex-col">
        <div class="p-4 pb-0 flex-1">
          <h3 class="font-light mb-1 text-grey-darkest">Tower Hotel</h3>
          <div class="text-xs flex items-center mb-4">
            <i class="fas fa-map-marker-alt mr-1 text-grey-dark"></i>
            Soho, London
          </div>
        </div>
      </div>
    </div>
  );
}
