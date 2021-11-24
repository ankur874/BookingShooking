import * as actions from '../constants/hotelConstants';

const hotelReducer = (state = { hotels: [] }, action) => {
  switch (action.type) {
    case actions.HOTEL_LIST_REQUEST:
      return {
        loading: true,
        hotels: [],
      };
    case actions.HOTEL_LIST_SUCCESS:
      return {
        loading: false,
        hotels: action.payload,
      };
    case actions.HOTEL_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { hotelReducer };
