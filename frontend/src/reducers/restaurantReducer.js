import * as actions from '../constants/restuarantConstants';

const restaurantReducer = (state = { restaurants: [] }, action) => {
  switch (action.type) {
    case actions.RESTAURANT_LIST_REQUEST:
      return {
        loading: true,
        restaurants: [],
      };
    case actions.RESTAURANT_LIST_SUCCESS:
      return {
        loading: false,
        restaurants: action.payload,
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

const createRestaurantReducer = (state = { }, action) => {
  switch (action.type) {
    case actions.RESTAURANT_CREATE_REQUEST:
      return {
        loading: true,
      };
    case actions.RESTAURANT_CREATE_SUCCESS:
      return {
        loading: false,
        restaurant: action.payload,
      };
    case actions.RESTAURANT_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { restaurantReducer ,createRestaurantReducer};
