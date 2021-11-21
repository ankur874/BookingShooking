import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomeScreen from "./Screens/HomeScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import LoginScreen from "./Screens/LoginScreen";
import ExploreAll from "./Screens/ExploreAll";
import RoomEditor from "./Screens/RoomEditor";
import TableAskFromOwner from "./Screens/TableAskFromOwner";
import SideBar from "./Screens/SideBar";

function App() {
  return (
    <>
      {/* <SideBar/> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route path="/signup" element={<SignUpScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/explore" element={<ExploreAll />} />
          <Route path="/tableselector" element={<TableAskFromOwner />} />
          <Route
            path="/roomeditor/:table1/:table2/:table3/:table4"
            element={<RoomEditor />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
