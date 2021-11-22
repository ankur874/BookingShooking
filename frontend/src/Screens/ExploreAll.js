import { useState } from "react";
import SideBar from "./SideBar";

export default function ExploreAll() {
  const [showHotels, setHotels] = useState(false);

  return (
    <div className="grid sm:grid-cols-1 bg-gray-100 md:grid-cols-6">
      <div class="sm:grid-cols-0 col-start-1 col-end-2">
        <SideBar/>
      </div>
      <div
        style={{ backgroundColor: "#FFFFFF" }}
        className="col-start-2 mt-5  col-span-5 "
      >
        <header className="flex  flex-row justify-evenly w-screen  py-2">
          <div className="p-1 relative">
            <input
              style={{ backgroundColor: "" }}
              placeholder="Hotel,Restraunt"
              className=" sm:w-80 md:w-96  rounded-sm p-1.5 bg-blue-50 font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            ></input>
            <i className="fas absolute  fa-search right-2 p-1 rounded-r-sm top-3"></i>
          </div>

        </header>
        <div className="flex flex-row w-screen  justify-center p-2.5">
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
            className="bg-blue-50 rounded-md font-bold p-1.5 "
            type="date"
          ></input>
        </div>
        <i className="fas hover:scale-150 text-3xl fa-arrow-circle-right"></i>
      </div>
      <div className="grid  justify-items-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-cols-1 py-14 gap-4 ">
        {singleComponent()}
      </div>
    </>
  );
}
function singleComponent() {
  return (
    <div className="flex flex-col  justify-start w-56 ">
      <img
        alt="s"
        className="rounded-lg motion-safe:hover:scale-110"
        src="https://www.caterermiddleeast.com/2021/05/claviterrace.jpg"
      />
      <div className="flex flex-row justify-between ">
        <div className="font-bold text-black">Restaurant Name</div>
        <div>
          <i className="fas text-sm text-yellow-400 px-0.5 fa-star"></i>
          <span className="font-semibold text-sm  text-black">4.7</span>
          <span className="font-semibold text-sm  text-gray-400">(540)</span>
        </div>
      </div>
      <div className="text-gray-500 flex justify-start -my-1 font-semibold">
        Location
      </div>
    </div>
  );
}
