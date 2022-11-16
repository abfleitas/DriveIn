import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Inicio from "./components/Inicio/Inicio";
import Details from "./components/Details/Details";
import { Register } from "./components/Register/Register";
import { Login } from "./components/Login/login";

import Administrador from "./components/Administrador/Administrador"

import Vehicles from "./components/Vehicles/Vehicles";


import Ciudad from "./components/Ciudad/Ciudad";
import Creation from "./components/Creation/Creation";
import Favorites from "./components/Favorites/Favorites";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/home" element={<Home />} />

          <Route path="/ciudad/:id" element={<Ciudad />} />

          <Route path="/register" element={<Register />} />
          <Route path="login"element={<Login/>}/>

          <Route path="/details/:id" element={<Details />} />

          <Route path="/creation" element={<Creation />} />

            <Route path="/admin/*" element={<Administrador />} />
            <Route path="/favorite" element={<Favorites />} />
        



          <Route path="/vehicles-list-test" element={<Vehicles />} /> 

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
