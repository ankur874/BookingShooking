import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { userLoginReducer, userRegisterReducer, userDetailsReducer } from './reducers/userReducers';
import { hotelReducer } from './reducers/hotelReducer';
import { createRestaurantReducer, restaurantReducer } from './reducers/restaurantReducer';

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  hotelList: hotelReducer,
  restaurantList:restaurantReducer,
  restaurantCreate:createRestaurantReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;


const initialState = {
  userLogin: {
    userInfo: userInfoFromStorage,
  },
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
