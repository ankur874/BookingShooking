import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listRestaurants } from "../actions/restaurantActions";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import table_1 from "../img/table_1.png";
import table_2 from "../img/table_2.png";
import table_3 from "../img/table_3.png";
import table_4 from "../img/table_4.png";

export default function Book() {
  const [selected,setSelected]=useState("");
  const [selectedColor,setSelectedColor]=useState("white");
  const dispatch = useDispatch();
  const data1 = useSelector((state) => state.restaurantList);
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    dispatch(listRestaurants());
  }, [dispatch]);
  const { restaurants } = data1;
  const { id } = useParams();
  let result = [];
  if (restaurants.data != null) {
    result = restaurants.data.filter((restaurant) => restaurant._id === id);
    console.log(result, "result");
  }
  const handleBooking = async () => {
    await axios.post(`/api/restraunts/book/${userInfo._id}`, { restaurantId: result[0]._id })
    navigate("/")
  }
  function onClick(clk,e){
    setSelected(e._id);
    setSelectedColor("sha");
    console.log(selected,"idddd");
  }

  if (result.length === 0) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <img
          height="200"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif"
          alt="some"
        />
      </div>
    );
  } else {
    return (
      <div className="relative text-center">
        {result[0].tableCoordinates.map((e) => (
          <div
            style={{
              position: "absolute",
              top: e.yCoordinate,
              left: e.xCoordinate,
              
            }}
          >
            {e.tableType === 1 && (
              <div onClick={(cl)=>onClick(cl,e)}
                style={{ border: "1px solid #F3F4F6", backgroundColor:selected==e._id?selectedColor:"white" }}
                className={ selected==e._id? "ring-4 ring-green-300 shadow-lg  ":" "}
              >
                <img height="220" width="220" src={table_1} alt="some" />
                <div className="rounded-full   bg-yellow-300 "> </div>

              </div>
            )}
            {e.tableType === 2 && (
              <div onClick={(cl)=>onClick(cl,e)}
                style={{ border: "1px solid #F3F4F6" ,backgroundColor:selected==e._id?selectedColor:"white"}}
                className={ selected==e._id? "ring-4 ring-green-300 shadow-lg  ":" "}
              >
                <img height="220" width="220" src={table_2} alt="some" />
                <div className="rounded-full bg-yellow-300"> </div>

              </div>
            )}
            {e.tableType === 3 && (
              <div onClick={(cl)=>onClick(cl,e)}
                style={{ border: "1px solid #F3F4F6" ,backgroundColor:selected==e._id?selectedColor:"white"}}
                className={ selected==e._id? "ring-4 ring-green-300 shadow-lg  ":" "}
              >
                <img height="220" width="220" src={table_3} alt="some" />
                <div className="rounded-full bg-yellow-300"> </div>
              </div>
            )}
            {e.tableType === 4 && (
              <div
              onClick={(cl)=>onClick(cl,e)}

                style={{ border: "1px solid #F3F4F6" ,backgroundColor:selected==e._id?selectedColor:"white"}}
                className={ selected==e._id? "ring-4 ring-green-300 shadow-lg  ":" "}
              >

                <img height="220" width="220" src={table_4} alt="some" />
                <div className="rounded-full bg-yellow-300"> </div>

              </div>
            )}
          </div>
        ))}
        <button onClick={() => handleBooking()} className='absolute bg-purple-800 text-white text-semibold rounded-sm shadow-sm hover:bg-purple-900  hover:-translate-y-1 transform p-2'>Book</button>

      </div>
    );
  }
}
