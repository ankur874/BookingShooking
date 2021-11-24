import axios from 'axios';
import * as actions from '../constants/hotelConstants';

const listHotels = () => async (dispatch) => {
  try {
    dispatch({ type: actions.HOTEL_LIST_REQUEST });

    const { data } = await axios.get(`/api/hotels/`);

    dispatch({
      type: actions.HOTEL_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actions.HOTEL_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};


export { listHotels };
