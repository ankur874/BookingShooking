import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listHotels } from "../actions/hotelActions";
import { listRestaurants } from "../actions/restaurantActions";
import axios from "axios";
import { toast } from "react-toastify";

const HotelOverview = () => {
  // const data = useSelector((state) => state.hotelList);
  // const handleToken = async (token, addresses) => {
  //   const response = await axios.post("/checkout", { token });

  //   const { status } = response.data;
  //   console.log("Response:", response.data);
  //   if (status === "success") {
  //     toast("Success! Check email for details", { type: "success" });
  //   } else {
  //     toast("Something went wrong", { type: "error" });
  //   }
  // };

  // // const data1 = useSelector((state) => state.restaurantList);

  // const { hotels, loading } = data;
  // console.log(hotels);
  // const dispatch = useDispatch();
  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo, error } = userLogin;
  // console.log(userInfo, "vdfvdfv");
  // useEffect(() => {
  //   dispatch(listHotels());
  //   dispatch(listRestaurants());
  // }, [dispatch]);

  // return <div>hhh</div>;
}
export default HotelOverview();
