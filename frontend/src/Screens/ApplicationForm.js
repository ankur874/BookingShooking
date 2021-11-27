import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  createRestaurant,
  listRestaurants,
} from "../actions/restaurantActions";

const ApplicationFrom = () => {
  ////////////////////////////////////////////////////////////////////////////////
  const [coverPhoto, setCoverPhoto] = useState("");
  const [resName, setResName] = useState("");
  const [resId, setResId] = useState("");
  const [resAddress, setResAddress] = useState("");
  const [resLatitude, setResLatitude] = useState("");
  const [resLongitude, setResLongitude] = useState("");
  const [resDesc, setResDesc] = useState("");
  const [diningPrice, setDiningPrice] = useState(0);
  const [myLocation, setMyLocation] = useState({
    latitude: 0.0,
    longitude: 0.0,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data1 = useSelector((state) => state.restaurantList);
  // if (data1.restaurants.data != null) {
  //   console.log(
  //     "data",
  //     data1.restaurants.data[data1.restaurants.data.length - 1]._id
  //   );
  // }
  ////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    // dispatch(listHotels());
    dispatch(listRestaurants());
  }, [dispatch]);
  navigator.geolocation.getCurrentPosition(function (position) {
    setMyLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  });

  const coverpic = useRef(null);
  const profilepic = useRef(null);
  let form = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createRestaurant({
        name: resName,
        description: resDesc,
        location: resAddress,
        Dining_price: diningPrice,
        Tables: 0,
        rating: 4.5,
        images: [coverPhoto],
        reviews: [],
        coordinates: [myLocation.latitude, myLocation.longitude],
        booked_by: [],
      })
    );
    if ( data1.restaurants.data != null) {
      // console.log(
      //       "data",
      //       data1.restaurants.data[da]._id
      //     );
       
      navigate(`/tableselector/${data1.restaurants.data[data1.restaurants.data.length-1]._id}`);

      console.log("resid", data1.restaurants.data[data1.restaurants.data.length-1]._id);
    }
  };
  const onCoverClick = async (e) => {
    // const data=new FormData();
    // data.append('file',e.target.file[0]);
    // coverpic.current.click();
    const formData = new FormData();
    // if (e.target.files != null) {
    formData.append("image", e.target.files[0]);
    // console.log("sdfsdfs", e.target.files[0]);
    const data = await axios.post("/api/upload", formData);
    console.log(data.data.name.split("/")[2], "dfsdf");
    setCoverPhoto(data.data.name.split("/")[2]);
    // }
  };

  return (
    <div className="dark:bg-gray-800 pb-3 bg-gray-700">
      <div className="container pt-4 my-auto mx-auto dark:bg-gray-800 rounded">
        <div className="container mx-auto bg-white dark:bg-gray-800 rounded px-4">
          <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5 dark:bg-gray-800">
            <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
              <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">
                Booking Shooking Application Form
              </p>
            </div>
          </div>
          <div className="xl:w-full border-gray-300 dark:border-gray-700 py-5">
            <div className="rounded relative h-56">
              {coverPhoto == "" ? (
                <img
                  src="https://cdn.tuk.dev/assets/webapp/forms/form_layouts/form1.jpg"
                  alt
                  className="w-full h-full object-cover rounded absolute shadow"
                />
              ) : (
                <img
                  src={`http://localhost:3000/images/${coverPhoto}`}
                  alt
                  className="w-full h-full object-cover rounded absolute shadow"
                />
              )}

              <div className="absolute bg-black opacity-50 top-0 right-0 bottom-0 left-0 rounded" />
              <div className="flex items-center px-3 py-2 rounded bg-red-700 absolute right-0 mr-4 mt-4 cursor-pointer">
                <input
                  type="file"
                  id="coverfile"
                  className="bg-red-700"
                  onChange={onCoverClick}
                  // onClick={}
                  ref={coverpic}
                  // style={{ display: "hidden" }}
                />
                {/* <button
                  type="file"
                  // onClick={onCoverClick}
                  className="text-white"
                > */}
                {/* Change Cover Photo */}
                {/* </button> */}
               
              </div>
             
            </div>
            <div className="container mx-auto flex flex-row">
              <div className="mt-16 xl:w-1/2 lg:w-1/2 md:w-1/2 flex flex-col mb-6 pr-4">
                <label
                  htmlFor="username"
                  className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >
                  Restaurant Name
                </label>
                <input
                  type="text"
                  id="Rname"
                  name="rname"
                  value={resName}
                  onInput={(e) => setResName(e.target.value)}
                  required
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
                  placeholder
                />
              </div>
              <div className="mt-16 xl:w-1/2 lg:w-1/2 md:w-1/2 flex flex-col mb-6 pl-4">
                <label
                  htmlFor="StreetAddress"
                  className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >
                  Street Address
                </label>
                <input
                  type="text"
                  id="SAddress"
                  value={resAddress}
                  onInput={(e) => setResAddress(e.target.value)}
                  name="sAddress"
                  required
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                  placeholder
                />
              </div>
              <div className="mt-16 xl:w-1/2 lg:w-1/2 md:w-1/2 flex flex-col mb-6 pl-4">
                <label
                  htmlFor="StreetAddress"
                  className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >
                  Latitude
                </label>
                <input
                  type="text"
                  id="Latitude"
                  name="Latitude"
                  value={resLatitude}
                  onInput={(e) => setResLatitude(e.target.value)}
                  required
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                  placeholder={myLocation.latitude}
                />
              </div>
              <div className="mt-16 xl:w-1/2 lg:w-1/2 md:w-1/2 flex flex-col mb-6 pl-4">
                <label
                  htmlFor="StreetAddress"
                  className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >
                  Longitude
                </label>
                <input
                  type="text"
                  id="Longitude"
                  name="Longitude"
                  value={resLongitude}
                  onInput={(e) => setResLongitude(e.target.value)}
                  required
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                  placeholder={myLocation.longitude}
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col w-full">
              <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 flex flex-col mb-6 pr-4">
                <label
                  htmlFor="username"
                  className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >
                  Dining Price
                </label>
                <input
                  type="number"
                  id=""
                  name=""
                  min={0}
                  value={diningPrice}
                  onInput={(e) => setDiningPrice(e.target.value)}
                  required
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
                  placeholder="Dining Price"
                />
              </div>
              <label
                htmlFor="about"
                className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
              >
                Description
              </label>
              <textarea
                id="about"
                name="about"
                required
                value={resDesc}
                onInput={(e) => setResDesc(e.target.value)}
                className="bg-transparent border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 dark:text-gray-400"
                placeholder="Let the world know who you are"
                rows={5}
                defaultValue={""}
              />
              <p className="w-full text-right text-xs pt-1 text-gray-500 dark:text-gray-400">
                Character Limit: 200
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto w-11/12 xl:w-full">
        <div className="rounded w-full py-4 sm:px-0 bg-white dark:bg-gray-800 flex justify-end">
          <button className="bg-gray-200 focus:outline-none transition duration-150 ease-in-out hover:bg-gray-300 dark:bg-gray-700 rounded text-indigo-600 dark:text-indigo-600 px-6 py-2 text-xs mr-4">
            Cancel
          </button>

          <button
            onClick={(e) => handleSubmit(e)}
            className="bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white mr-4 px-8 py-2 text-sm"
            type="submit"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
export default ApplicationFrom;
