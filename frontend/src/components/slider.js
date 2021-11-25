import * as React from "react";
import { Range } from "react-range";
// import ReactSlider from "react-slider";

export default function Slider() {
  const [values, setValues] = React.useState([0]);
  return (
    <div>
      
      <Range
        step={1}
        min={0}
        max={99}
        values={values}
        onChange={(values) => {
          setValues(values);
        }}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="w-full h-3 pr-2 my-4 bg-gray-200 rounded-md"
          > 
            {children}
            
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            className="w-5 h-5 text-center transform  translate-x-10 bg-indigo-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >{values}</div>
        )}
      ></Range>
    </div>
  );
}
