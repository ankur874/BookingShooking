import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomeScreen from "./Screens/HomeScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import LoginScreen from "./Screens/LoginScreen";
import ExploreAll from "./Screens/ExploreAll";
import RoomEditor from "./Screens/RoomEditor";
import TableAskFromOwner from "./Screens/TableAskFromOwner";
import SideBar from "./Screens/SideBar";
import ExploreMap from "./Screens/ExploreMap";
import Bookings from "./Screens/Bookings";
import ApplicationFrom from "./Screens/ApplicationForm";
import HotelOverview from "./Screens/HotelOverview";


function App() {
  return (
    <>
      {/* <div className='inline-block bg-red-600'>
        <SideBar />
      </div> */}

      <Router>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route path="/signup" element={<SignUpScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/explore" element={<ExploreAll />} />
          <Route path="/explore/:id" element={<HotelOverview />} />
          <Route path="/tableselector" element={<TableAskFromOwner />} />
          <Route
            path="/roomeditor/:table1/:table2/:table3/:table4"
            element={<RoomEditor />}
          />
          <Route path="/map" element={<ExploreMap />} />
          {/* <Route path="/bookings" element={ */}
          // <Route path="/form" element={<ApplicationFrom />} />
          <Route path="/bookings" element={<HotelOverview />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
// function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
//   var R = 6371; // Radius of the earth in km
//   var dLat = deg2rad(lat2-lat1);  // deg2rad below
//   var dLon = deg2rad(lon2-lon1); 
//   var a = 
//     Math.sin(dLat/2) * Math.sin(dLat/2) +
//     Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
//     Math.sin(dLon/2) * Math.sin(dLon/2)
//     ; 
//   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
//   var d = R * c; // Distance in km
//   return d;
// }

// function deg2rad(deg) {
//   return deg * (Math.PI/180)
// }
