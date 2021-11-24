import * as actions from '../constants/restuarantConstants';

const restaurantReducer = (state = { restaurants: [] }, action) => {
  switch (action.type) {
    case actions.RESTAURANT_LIST_REQUEST:
      return {
        loading: true,
        hotels: [],
      };
    case actions.RESTAURANT_LIST_SUCCESS:
      return {
        loading: false,
        hotels: action.payload,
      };
    case actions.RESTAURANT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { restaurantReducer };
