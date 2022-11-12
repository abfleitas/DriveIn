import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Inicio from "./components/Inicio/Inicio";
import VehicleDetails from "./components/Details/Details";
import Ciudad from "./components/Ciudad/Ciudad";
import Creation from "./components/Creation/Creation";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/home" element={<Home />} />
          <Route path="/ciudad/:id" element={<Ciudad />} />
          <Route path="/details/:id" element={<VehicleDetails />} />
          <Route path="/creation" element={<Creation />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
