import table_1 from "../img/table_1.png";
import table_2 from "../img/table_2.png";
import table_3 from "../img/table_3.png";
import table_4 from "../img/table_4.png";
import CounterInput from "react-counter-input";
import { useState } from "react";
import { Link } from "react-router-dom";
import RoomEditor from "./RoomEditor";
// import CounterInput from "react-native-counter-input";

export default function TableAskFromOwner() {
  const [table1, setTable1] = useState(0);
  const [table2, setTable2] = useState(0);
  const [table3, setTable3] = useState(0);
  const [table4, setTable4] = useState(0);
  const [nextPagePath, setNextPagePath] = useState("/tableselector");
  function onClick() {
    if (
      (table1 === 0 && table2 === 0 && table3 === 0 && table4 === 0) ||
      table1 + table2 + table3 + table4 < 5
    ) {
      alert("Please select atleast 5 tables");
    } else {
      setNextPagePath(() => {
        return `/roomeditor/${table1}/${table2}/${table3}/${table4}`;
      });
    }
  }
  return (
    <div className="bg-gray-200">
      <div className="bg-white px-0 py-1 text-center ">
        Please select the table counter you want for your restaurant!
      </div>
      <div className="grid  gap-5 grid-cols-2">
        <div className=" flex flex-col justify-center items-center">
          {" "}
          <img height="250" width="250" src={table_1} />
          <div className="rounded-full bg-yellow-300">
            {" "}
            <CounterInput
              className="text-red-700"
              min={0}
              max={10}
              onCountChange={(val) => setTable1(val)}
            />
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center">
          {" "}
          <img height="250" width="250" src={table_2} />
          <div className="text-white bg-gray-600 rounded-full">
            {" "}
            <CounterInput
              min={0}
              max={10}
              onCountChange={(val) => setTable2(val)}
            />
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center">
          {" "}
          <img height="250" width="250" src={table_3} />
          <div className="rounded-full bg-yellow-800">
            {" "}
            <CounterInput
              min={0}
              max={10}
              onCountChange={(val) => setTable3(val)}
            />
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <img height="180" width="180" src={table_4} />
          <div className="rounded-full bg-pink-700">
            {" "}
            <CounterInput
              min={0}
              max={10}
              onCountChange={(val) => setTable4(val)}
            />
          </div>
        </div>
        <Link to={nextPagePath}>
          <button
            onClick={onClick}
            className="w-screen p-2 absolute bottom-0 bg-blue-600 hover:bg-blue-700 font-bold text-2xl "
          >
            Double-click to set layout
          </button>
        </Link>
      </div>
    </div>
  );
}
