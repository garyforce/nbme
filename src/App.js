import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import logo from "./logo.svg";
import Home from "./pages/Home";
import Location from "./pages/Location";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/favorites" element={<Location />} />
      </Routes>
    </Router>
  );
}

export default App;
