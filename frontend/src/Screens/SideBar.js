import React, { useState } from "react";
import HomeScreen from "./HomeScreen";

export default function SideBar() {
  const [isSmallOpen, setSmallOpen] = useState(false);
  if (isSmallOpen === true) {
    return (
        <div></div>
        // <div onClick={()=>setSmallOpen(isSmallOpen=false)} className='bg-red-500 h-8 w-10'>{isSmallOpen}</div>
    //   <div class="flex flex-col items-center w-16 h-full overflow-hidden text-gray-400 bg-gray-900 ">
    //     <div
        
    //       class="flex items-center  justify-center mt-3"
    //       href="#"
    //     >
    //       <svg
    //         class="w-8 h-8 fill-current"
    //         xmlns="http://www.w3.org/2000/svg"
    //         viewBox="0 0 20 20"
    //         fill="currentColor"
    //       >
    //         <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
    //       </svg>
    //     </div>
    //     <div class="flex flex-col items-center mt-3 border-t border-gray-700">
    //       <div
    //         class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
    //         href="#"
    //       >
    //         <svg
    //           class="w-6 h-6 stroke-current"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="2"
    //             d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    //           />
    //         </svg>
    //       </div>
    //       <div
    //         class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
    //         href="#"
    //       >
    //         <svg
    //           class="w-6 h-6 stroke-current"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="2"
    //             d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    //           />
    //         </svg>
    //       </div>
    //       <div
    //         class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
    //         href="#"
    //       >
    //         <i className="fas text-2xl fa-map-marker-alt"></i>
    //       </div>
    //       <div
    //         class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
    //         href="#"
    //       >
    //         <svg
    //           class="w-6 h-6 stroke-current"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="2"
    //             d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
    //           />
    //         </svg>
    //       </div>
    //     </div>
    //     <div class="flex flex-col items-center mt-2 border-t border-gray-700">
    //       <div
    //         class="flex items-center justify-center w-16 h-16 mt-1 bg-gray-800 hover:bg-gray-700 hover:text-gray-300"
    //         href="#"
    //       >
    //         <svg
    //           class="w-6 h-6 stroke-current"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="2"
    //             d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    //           />
    //         </svg>
    //       </div>
    //     </div>
    //   </div>
    );
  } else {
    return (
        // <div onClick={()=>setSmallOpen(isSmallOpen=true)} className='bg-yellow-500 h-10 w-14'>{isSmallOpen}</div>
      <div  class="flex flex-col  items-center w-40 h-full overflow-hidden text-gray-400 bg-gray-900 ">
        <a
         
          class="flex items-center w-full px-3 mt-3"
          href="#"
        >
          <svg
            class="w-8 h-8 fill-current "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
          </svg>
          <div    class="ml-2 text-sm  font-bold">Booking Shooking</div>
        </a>
        <div  class="  w-full px-2">
          <div class="flex flex-col  items-center w-full mt-3 border-t border-gray-700">
            <a
              class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
              href="/"
            >
              <svg
                class="w-6 h-6 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span class="ml-2  text-sm font-medium">Dashboard</span>
            </a>
            <a 
              class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
              href="/explore"
            >
              <svg
                class="w-6 h-6 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span class="ml-2 text-sm font-medium">Explore All</span>
            </a>
            <a
              class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
              href="/map"
            >
              <i className="fas text-2xl fa-map-marker-alt"></i>
              <div className="w-2"></div>
              <span class="ml-2 text-sm font-medium">Maps</span>
            </a>

            <a
              class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
              href="/bookings"
            >
              <svg
                class="w-6 h-6 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                />
              </svg>
              <span class="ml-2 text-sm font-medium">Bookings</span>
            </a>
          </div>
          <div class="flex flex-col  items-center w-full mt-2 border-t border-gray-700">
            <a
              class="flex items-center justify-center  w-full h-16 mt-1 bg-gray-800 hover:bg-gray-700 hover:text-gray-300"
              href="#"
            >
              <svg
                class="w-6 h-6 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span class="ml-2 text-sm font-medium">Account</span>
            </a>
            <a
              class="flex items-center justify-center  w-full h-24 mt-1 bg-gray-800 hover:bg-gray-700 hover:text-gray-300"
              href="#"
            >
              <i class="fas fa-briefcase"></i>
              <span class="ml-2 text-sm font-medium">Make Me Listed</span>
            </a>
          </div>
        </div>
      </div>

    );
  }
}
