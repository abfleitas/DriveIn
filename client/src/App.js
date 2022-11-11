import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";

import Inicio from "./components/Inicio/Inicio";

import VehicleDetails from "./components/Details/Details";
import Ciudad from "./components/Ciudad/Ciudad";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/home" element={<Home />} />
          <Route path="/ciudad" element={<Ciudad />} />
          <Route path="/details/:id" element={<VehicleDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
