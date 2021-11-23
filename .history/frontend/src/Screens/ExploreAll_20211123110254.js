import { useState } from "react";
import Rating from "../Components/Rating";
import SideBar from "./SideBar";
import ReactSearchBox from "react-search-box";

export default function ExploreAll() {
  const [showHotels, setHotels] = useState(false);
  const data = [
    {
      key: "john",
      value: "Johnny Doe",
    },
    {
      key: "jane",
      value: "Jane Doe",
    },
    {
      key: "mary",
      value: "Mary Phillips",
    },
    {
      key: "robert",
      value: "Robert",
    },
    {
      key: "karius",
      value: "Karius",
    },
  ];
  return (
    <div className="grid grid-cols-8 bg-gray-100">
      <div className="col-start-1 col-end-1">
        <SideBar></SideBar>
      </div>

      <div className="col-start-2 col-span-7">
        <div>
          <header className="flex  flex-row justify-evenly   py-2">
            <div className="p-1 relative">
              <ReactSearchBox
                placeholder="Hotels , Restaurant"
                value="Doe"
                data={data}
                callback={(record) => console.log(record)}
              />
              {/* <input
                style={{ backgroundColor: "" }}
                placeholder="Hotel,Restraunt"
                className=" sm:w-80 md:w-96  rounded-sm p-1.5 bg-blue-50 font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              ></input> */}
              <i className="fas absolute  fa-search right-2 p-1 rounded-r-sm top-3"></i>
            </div>
          </header>
          <div className="flex flex-row  justify-center p-2.5">
            <button
              onClick={() => setHotels(true)}
              className={
                !showHotels
                  ? "p-3  font-medium border-b-2 "
                  : "p-3 font-semibold text-lg border-red-500 border-b-2"
              }
            >
              HOTELS
            </button>
            <button
              onClick={() => setHotels(false)}
              className={
                showHotels
                  ? "p-3  font-medium border-b-2 "
                  : "p-3 font-semibold text-lg border-red-500 border-b-2"
              }
            >
              RESTAURANTS
            </button>
          </div>
          <section className="p-3 ">
            {showHotels ? Hotels() : Restaurants()}
          </section>
        </div>
      </div>
    </div>
    // <div className="grid sm:grid-cols-1 bg-gray-100 md:grid-cols-6">
    //   <div
    //     style={{ backgroundColor: "#FFFFFF" }}
    //
    //   >
    //     <header className="flex  flex-row justify-evenly w-screen  py-2">
    //       <div className="p-1 relative">
    //         <input
    //           style={{ backgroundColor: "" }}
    //           placeholder="Hotel,Restraunt"
    //           className=" sm:w-80 md:w-96  rounded-sm p-1.5 bg-blue-50 font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
    //         ></input>
    //         <i className="fas absolute  fa-search right-2 p-1 rounded-r-sm top-3"></i>
    //       </div>

    //     </header>
    //     <div className="flex flex-row w-screen  justify-center p-2.5">
    //       <button
    //         onClick={() => setHotels(true)}
    //         className={
    //           !showHotels
    //             ? "p-3  font-medium border-b-2 "
    //             : "p-3 font-semibold text-lg border-red-500 border-b-2"
    //         }
    //       >
    //         HOTELS
    //       </button>
    //       <button
    //         onClick={() => setHotels(false)}
    //         className={
    //           showHotels
    //             ? "p-3  font-medium border-b-2 "
    //             : "p-3 font-semibold text-lg border-red-500 border-b-2"
    //         }
    //       >
    //         RESTAURANTS
    //       </button>
    //     </div>
    //     <section className="p-3 ">
    //       {showHotels ? Hotels() : Restaurants()}
    //     </section>
    //   </div>
    // </div>
  );
}
function Hotels() {
  console.log("hotelss");
  return <div>Hotels</div>;
}
function Restaurants() {
  console.log("resssssssss");
  return (
    <>
      <div className=" flex flex-row justify-evenly  items-center ">
        <div className="flex-col flex  justify-start  items-start w-1/4">
          <div className="font-bold text-gray-700">Book on</div>
          <input
            className="placeholder-gray-500 placeholder-opacity-25 p-2 bg-white ml-0"
            type="date"
            placeholder="Jul 14 - Jul 16"
          />
        </div>
        <i className="fas hover:scale-150 text-3xl fa-arrow-circle-right"></i>
      </div>
      <div className="grid  justify-items-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-cols-1 py-14 gap-4 ">
        {singleComponent()}
        {singleComponent()}
        {singleComponent()}
        {singleComponent()}
        {singleComponent()}
        {singleComponent()}
        {singleComponent()}
        {singleComponent()}
      </div>
    </>
  );
}
function singleComponent() {
  return (
    <div class="max-w-sm bg-white relative  h-56 flex flex-col justify-between rounded-sm transition-all duration-75 hover:shadow-md shadow-sm  transform hover:-translate-y-1 hover:scale-110  ">
      <Rating />
      <img
        className="h-3/4 p-2"
        src="https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2019-11/ISR.png"
        alt="Mountain"
      />
      <div class="px-2  py-1">
        <p class=" text-md font-bold mb-2">Shikara Hotel</p>
        <div class="flex flex-row ">
          <i class="fas text-blue-400 fa-map-marker-alt"></i>
          <p class="text-sm text-gray-400 pl-2">Jl Aston No. 72 Yogyakarta</p>
        </div>
        <div>
          <p class="text-xl mt-1 font-bold">
            <i class="fas fa-dollar-sign"></i>42
            <span class="text-sm text-gray-400 inline-block align-baseline">
              /night
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}