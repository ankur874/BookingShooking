import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { listRestaurants } from "../actions/restaurantActions";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";

export default function Book() {
  const dispatch = useDispatch();
  const data1 = useSelector((state) => state.restaurantList);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, error } = userLogin;
  useEffect(() => {
    dispatch(listRestaurants());
  }, [dispatch]);
  const { restaurants, loading1 } = data1;
  const { id } = useParams();
  let result = [];
  if (restaurants.data != null) {
    result = restaurants.data.filter((restaurant) => restaurant._id == id);
    console.log(result, "result");
  }
  return <div className='relative'>
    
  </div>;
}
