import React from 'react'
import './HomeScreen.css';
// import '@themesberg/flowbite';
import SideBar from './SideBar';

export default function HomeScreen() {

  return (
    <div class="grid sm:grid-cols-1 md:grid-cols-6 md:gap-4">
      <div class="sm:grid-cols-0 col-start-1 col-end-2">
        <SideBar />
      </div>

      <div class="col-start-2 col-span-3">

        <p className="text-3xl font-extrabold">Find Home to Stay</p>
        <div class="flex flex-row my-10">
          <div class="sm:grid-cols-1">
            <p class="text-3xl font-semibold">Date</p>
            <input className="placeholder-gray-500 placeholder-opacity-25 shadow-xl ml-0" type="date" placeholder="Jul 14 - Jul 16" />
          </div>
          <div class="sm:grid-cols-1">
            <p class="text-3xl font-semibold">Where To</p>
            <input type="text" className="placeholder-gray-500 placeholder-opacity-25 shadow-xl ml-0" placeholder="Location"></input>
            <button>Search</button>
          </div>
        </div>

        <div className="my-10">

          <div className="flex flex-row">
            <p class="text-4xl mb-10 font-semibold">Lodgings Available</p>
          </div>

          <div className="grid grid-cols-3 gap-10">
            <div>
              {/* <!--Card 1--> */}
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src="https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg" alt="Mountain" />
                <div class="px-6 py-4">
                  <p class="font-bold text-3xl mb-2">Shikara Hotel</p>
                  <div class="flex flex-row ">
                    <i class="fas fa-map-marker-alt"></i><p class="text-sm text-opacity-0 pl-2">Jl Aston No. 72 Yogyakarta</p>
                  </div>
                  <div>
                    <p class="text-3xl font-bold"><i class="fas fa-dollar-sign"></i>42<span class="text-sm inline-block align-baseline">/night</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* <!--Card 1--> */}
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src="https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg" alt="Mountain" />
                <div class="px-6 py-4">
                  <p class="font-bold text-3xl mb-2">Shikara Hotel</p>
                  <div class="flex flex-row ">
                    <i class="fas fa-map-marker-alt"></i><p class="text-sm text-opacity-0 pl-2">Jl Aston No. 72 Yogyakarta</p>
                  </div>
                  <div>
                    <p class="text-3xl font-bold"><i class="fas fa-dollar-sign"></i>42<span class="text-sm inline-block align-baseline">/night</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* <!--Card 1--> */}
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src="https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg" alt="Mountain" />
                <div class="px-6 py-4">
                  <p class="font-bold text-3xl mb-2">Shikara Hotel</p>
                  <div class="flex flex-row ">
                    <i class="fas fa-map-marker-alt"></i><p class="text-sm text-opacity-0 pl-2">Jl Aston No. 72 Yogyakarta</p>
                  </div>
                  <div>
                    <p class="text-3xl font-bold"><i class="fas fa-dollar-sign"></i>42<span class="text-sm inline-block align-baseline">/night</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-10">

          <div className="flex flex-row">
            <p class="text-4xl mb-10">Most Popular</p>
          </div>

          <div className="grid grid-cols-2 gap-4">

            <div id="app" class="bg-white w-128 h-60 rounded shadow-md flex card text-grey-darkest">
              <img alt="Room " class="w-1/2 h-full rounded-l-sm" src="https://bit.ly/2EApSiC" />
              <div class="w-full flex flex-col">
                <div class="p-4 pb-0 flex-1">
                  <h3 class="font-light mb-1 text-grey-darkest">Tower Hotel</h3>
                  <div class="text-xs flex items-center mb-4">
                    <i class="fas fa-map-marker-alt mr-1 text-grey-dark"></i>
                    Soho, London
                  </div>
                  <span class="text-5xl text-grey-darkest">£63.00<span class="text-lg">/PPPN</span></span>
                  <div class="flex items-center mt-4">
                    <div class="pr-2 text-xs">
                      <i class="fas fa-wifi text-green"></i> Free WiFi
                    </div>
                    <div class="px-2 text-xs">
                      <i class="text-grey-darker far fa-building"></i> 2mins to center
                    </div>
                  </div>
                </div>
                <div class="bg-grey-lighter p-3 flex items-center justify-between transition hover:bg-grey-light">
                  Book Now
                  <i class="fas fa-chevron-right"></i>
                </div>
              </div>
            </div>

            <div id="app" class="bg-white w-128 h-60 rounded shadow-md flex card text-grey-darkest">
              <img class="w-1/2 h-full rounded-l-sm" src="https://bit.ly/2EApSiC" alt="Room " />
              <div class="w-full flex flex-col">
                <div class="p-4 pb-0 flex-1">
                  <h3 class="font-light mb-1 text-grey-darkest">Tower Hotel</h3>
                  <div class="text-xs flex items-center mb-4">
                    <i class="fas fa-map-marker-alt mr-1 text-grey-dark"></i>
                    Soho, London
                  </div>
                  <span class="text-5xl text-grey-darkest">£63.00<span class="text-lg">/PPPN</span></span>
                  <div class="flex items-center mt-4">
                    <div class="pr-2 text-xs">
                      <i class="fas fa-wifi text-green"></i> Free WiFi
                    </div>
                    <div class="px-2 text-xs">
                      <i class="text-grey-darker far fa-building"></i> 2mins to center
                    </div>
                  </div>
                </div>
                <div class="bg-grey-lighter p-3 flex items-center justify-between transition hover:bg-grey-light">
                  Book Now
                  <i class="fas fa-chevron-right"></i>
                </div>
              </div>
            </div>

            <div id="app" class="bg-white w-128 h-60 rounded shadow-md flex card text-grey-darkest">
              <img class="w-1/2 h-full rounded-l-sm" src="https://bit.ly/2EApSiC" alt="Room " />
              <div class="w-full flex flex-col">
                <div class="p-4 pb-0 flex-1">
                  <h3 class="font-light mb-1 text-grey-darkest">Tower Hotel</h3>
                  <div class="text-xs flex items-center mb-4">
                    <i class="fas fa-map-marker-alt mr-1 text-grey-dark"></i>
                    Soho, London
                  </div>
                  <span class="text-5xl text-grey-darkest">£63.00<span class="text-lg">/PPPN</span></span>
                  <div class="flex items-center mt-4">
                    <div class="pr-2 text-xs">
                      <i class="fas fa-wifi text-green"></i> Free WiFi
                    </div>
                    <div class="px-2 text-xs">
                      <i class="text-grey-darker far fa-building"></i> 2mins to center
                    </div>
                  </div>
                </div>
                <div class="bg-grey-lighter p-3 flex items-center justify-between transition hover:bg-grey-light">
                  Book Now
                  <i class="fas fa-chevron-right"></i>
                </div>
              </div>
            </div>

            <div id="app" class="bg-white w-128 h-60 rounded shadow-md flex card text-grey-darkest">
              <img class="w-1/2 h-full rounded-l-sm" src="https://bit.ly/2EApSiC" alt="Room " />
              <div class="w-full flex flex-col">
                <div class="p-4 pb-0 flex-1">
                  <h3 class="font-light mb-1 text-grey-darkest">Tower Hotel</h3>
                  <div class="text-xs flex items-center mb-4">
                    <i class="fas fa-map-marker-alt mr-1 text-grey-dark"></i>
                    Soho, London
                  </div>
                  <span class="text-5xl text-grey-darkest">£63.00<span class="text-lg">/PPPN</span></span>
                  <div class="flex items-center mt-4">
                    <div class="pr-2 text-xs">
                      <i class="fas fa-wifi text-green"></i> Free WiFi
                    </div>
                    <div class="px-2 text-xs">
                      <i class="text-grey-darker far fa-building"></i> 2mins to center
                    </div>
                  </div>
                </div>
                <div class="bg-grey-lighter p-3 flex items-center justify-between transition hover:bg-grey-light">
                  Book Now
                  <i class="fas fa-chevron-right"></i>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>



      <div className="col-start-5 col-end-7">
        <div className="flex flex-row p-8">
          <img class="inline-block h-20 w-20 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          <div>
            <p className="font-semibold text-base" >Lorem Epsum </p>
            <p className="font-semibold text-sm text-gray-400">Lorem ipsum dolor sit</p>
          </div>
        </div>
        <p className="text-3xl font-semibold ml-5 ">Shikara Hotel</p>
        <div class="container mx-auto">
          <div class="grid-cols-3 p-20 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
            <div class="w-full rounded">
              <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                alt="s" />
            </div>
            <div class="w-full col-span-2 row-span-2 rounded">
              <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                alt="s" />
            </div>
            <div class="w-full rounded">
              <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                alt="s" />
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}
