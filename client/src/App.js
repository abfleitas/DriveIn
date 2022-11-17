import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Inicio from "./components/Inicio/Inicio";
import Details from "./components/Details/Details";
import { Register } from "./components/Register/Register";
import { Admin } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import Ciudad from "./components/Ciudad/Ciudad";
import Creation from "./components/Creation/Creation";
import Layout from "./components/Admin/Layout";
import TopSidebar from "./components/Admin/TopSidebar";
import Prueba from "./components/Admin/Prueba";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/home" element={<Home />} />

          <Route path="/ciudad/:id" element={<Ciudad />} />

          <Route path="/register" element={<Register />} />
          <Route path="login" element={<Login />} />

          <Route path="/details/:id" element={<Details />} />

          <Route path="/creation" element={<Creation />} />

          <Route path="/admin" element={<Prueba />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
