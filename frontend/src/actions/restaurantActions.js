import axios from 'axios';
import * as actions from '../constants/restuarantConstants';
import {API} from '../backend';

const listRestaurants = () => async (dispatch) => {
  try {
    dispatch({ type: actions.RESTAURANT_LIST_REQUEST });

    const { data } = await axios.get(`/api/restraunts/`);
    console.log("daaaaaaa",data);

    dispatch({
      type: actions.RESTAURANT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actions.RESTAURANT_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
const createRestaurant = (restraunt) => async (dispatch) => {
  try {
    dispatch({ type: actions.RESTAURANT_CREATE_REQUEST });

    const { data } = await axios.post(`/api/restraunts/`,restraunt);

    dispatch({
      type: actions.RESTAURANT_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actions.RESTAURANT_CREATE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};


export { listRestaurants,createRestaurant };

