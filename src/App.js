import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import { useState } from "react";
import Home from "./pages/Home";
import Location from "./pages/Location";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addLocation, selectLocation } from "./redux/locationSlice";

function App() {
  const [isActiveSide, setIsActiveSide] = useState(false);
  const hideSidebar = (e) => {
    if (e.target.className == "sideBar") return;
    e.preventDefault();
    setIsActiveSide(false);
  };
  const dispatch = useDispatch();
  const location = useSelector(selectLocation);
  const submitCity = (e) => {
    e.preventDefault();
    dispatch(
      addLocation({
        city: e.target.cityname.value,
        zipcode: e.target.zipcode.value,
      })
    );
  };
  return (
    <Router>
      <form className="city-input" onSubmit={submitCity}>
        <label>
          City Name: <input type="text" name="cityname" required />
        </label>
        <label>
          Zip Code: <input type="text" name="zipcode" required />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {isActiveSide && (
        <div className="sideBar-background" onClick={hideSidebar}>
          <div className="sideBar">
            <button onClick={() => setIsActiveSide(false)}>&times;</button>
            {location.map((city) => (
              <Link to={`/location/${city.zipcode}`}>{city.city}</Link>
            ))}
          </div>
        </div>
      )}
      <button onClick={() => setIsActiveSide(true)}>&#9776;</button>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/location/:id" element={<Location />} />
      </Routes>
    </Router>
  );
}

export default App;
