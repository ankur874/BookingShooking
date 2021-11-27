import React, { useState } from "react";
import table_1 from "../img/table_1.png";
import table_2 from "../img/table_2.png";
import table_3 from "../img/table_3.png";
import table_4 from "../img/table_4.png";
import Draggable from "react-draggable";
import { Router, useNavigate, useParams } from "react-router";
import axios from "axios";

const RoomEditor = () => {
  const [type1, setType1] = useState([]);
  const [type2, setType2] = useState([]);
  const [type3, setType3] = useState([]);
  const [type4, setType4] = useState([]);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const finalData = [];
  const { table1, table2, table3, table4, id } = useParams();
  console.log(id, "ididididid");

  for (var i = 0; i < table1; i++) {
    type1.push("table1");
  }
  for (var i = 0; i < table2; i++) {
    type2.push("table2");
  }
  for (var i = 0; i < table3; i++) {
    type3.push("table3");
  }
  for (var i = 0; i < table4; i++) {
    type4.push("table4");
  }
  const nav = useNavigate();
  function stopHandler(e, type, ele) {
    // console.log(e,"e");
    finalData.push({
      xCoordinate: e.clientX,
      yCoordinate: e.clientY,
      tableType: type,
    });
    // console.log(finalData);
  }
  async function submitHandler(e) {
    const data = await axios.post(`/api/restraunts/${id}`, {
      table: table1 + table2 + table3 + table4,
      tableCoordinates: finalData,
    });
    // setInterval(() => {
    // }, 2000);
    nav("/");
    console.log(data, "]4551final");
  }
  return (
    <div className="">
      <div className="bg-red-500 absolute top-1/2 h-20 w-2"></div>
      {type1.map((ele) => {
        return (
          <Draggable onStop={(e) => stopHandler(e, 1)}>
            <div className=" absolute top-1  right-0 ">
              <img
                className="transition duration-75 hover:shadow-md "
                height="250"
                width="250"
                src={table_1}
              />
            </div>
          </Draggable>
        );
      })}
      {type2.map((ele) => {
        return (
          <Draggable onStop={(e) => stopHandler(e, 2)}>
            <div className=" absolute top-40  right-0    ">
              <img
                className="transition duration-75 hover:shadow-md "
                height="260"
                width="260"
                src={table_2}
              />
            </div>
          </Draggable>
        );
      })}
      {type3.map((ele) => {
        return (
          <Draggable onStop={(e) => stopHandler(e, 3)}>
            <div className=" absolute top-80  right-0   ">
              <img
                className="transition duration-75 hover:shadow-md "
                height="270"
                width="270"
                src={table_3}
              />
            </div>
          </Draggable>
        );
      })}
      {type4.map((ele) => {
        return (
          <Draggable onStop={(e) => stopHandler(e, 4)}>
            <div className=" absolute bottom-1  right-0  ">
              <img
                className="transition duration-75 hover:shadow-md "
                height="150"
                width="150"
                src={table_4}
              />
            </div>
          </Draggable>
        );
      })}
      <button
        onClick={(e) => submitHandler(e)}
        className="absolute bottom-0 left-1/2 bg-purple-800 text-white text-semibold rounded-sm shadow-sm hover:bg-purple-900  hover:-translate-y-1 transform p-2"
      >
        Click to Finish
      </button>
      {/* <div style={{top:y,left:x}} className={`absolute `}>
      <img className='transition duration-75 hover:shadow-md ' height="250" width="250" src={table_1} />
      </div> */}
    </div>
  );
};
export default RoomEditor;
