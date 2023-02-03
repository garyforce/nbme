import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useState } from "react";
import Home from "./pages/Home";
import Location from "./pages/Location";
import "./App.css";

function App() {
  const [isActiveSide, setIsActiveSide] = useState(false);
  const hideSidebar = (e) => {
    if (e.target.className == "sideBar") return;
    e.preventDefault();
    setIsActiveSide(false);
  };
  return (
    <Router>
      <input type="text" name="search" placeholder="Input City ZipCode" />
      {isActiveSide && (
        <div className="sideBar-background" onClick={hideSidebar}>
          <div className="sideBar">
            <button onClick={() => setIsActiveSide(false)}>&times;</button>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      )}
      <button onClick={() => setIsActiveSide(true)}>&#9776;</button>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </Router>
  );
}

export default App;
