import React from "react";
const Tabs = (props) => {
  // console.log("faci",props.props.desc)
    const [openTab, setOpenTab] = React.useState(1);
    return (
      <>
        <div className="flex mt-2 flex-wrap">
          <div className="w-full">
            <ul
              className="flex mb-0 list-none flex-wrap  pb-4 flex-row"
              role="tablist"
            >

              <li className="-mb-px mx-2 last:mr-0 flex-auto text-center my-2 ">

                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3  rounded block leading-normal " +
                    (openTab === 1
                      ? "text-white bg-gray-600"
                      : "text-gray-700 bg-white")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Overview
                </a>
              </li>
            
            
            </ul>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
              <div className="px-4 py-2 flex-auto">
                <div className="tab-content tab-space text-xl">
                  <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                    <p>
                      {props.props.desc}
                    </p>
                  </div>
                  <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                    <p>
                      {props.props.facilities}
                    </p>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default function TabsRender(props) {
    return (
      <>
         <Tabs props={props} />
      </>
    );
  }