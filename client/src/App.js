import "./App.css";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import VehicleDetails from "./components/Details/Details";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/details" element={<VehicleDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
