import React from "react";
import { Link } from "react-router-dom";
import "../Inicio/Inicio.css";
import Logo from "../../images/logoblanco.png";
import Insta from "../../images/InstBlanco.png";
import Face from "../../images/FaceBlanco.png";
import YT from "../../images/YTblanco.png";

//import image from "../componentes/image/poke-landing.png";

export default function Landing() {
  return (
    <div className="landing">
      <img className="logo" src={Logo} alt="" />
      <hr />
      <div className="titulo">
        <h1>UN RECORRIDO POR LOS SENTIDOS</h1>
      </div>
      <Link to="/home" style={{ color: "transparent" }}>
        <button className="button">INGRESAR</button>
      </Link>
      <div className="redes">
        <img src={Insta} alt="Insta" />
        <img src={Face} alt="Face" />
        <img src={YT} alt="YT" />
      </div>
    </div>
  );
}
