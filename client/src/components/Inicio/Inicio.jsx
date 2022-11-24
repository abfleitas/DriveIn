import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Inicio/Inicio.css";
import Logo from "../../images/LogoVerde.png";
import Insta from "../../images/InstBlanco.png";
import Face from "../../images/FaceBlanco.png";
import YT from "../../images/YTblanco.png";

//import image from "../componentes/image/poke-landing.png";
import { useDispatch, useSelector } from "react-redux";
import {
  getComments,
  getCountries,
  getVehicles,
  deleteStates
} from "../../redux/actions/actions";

export default function Landing() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(deleteStates())
    dispatch(getCountries());
    dispatch(getVehicles());
    dispatch(getComments());
  }, []);


  return (
    <div className="landing">
      <img className="logo" src={Logo} alt="" />
      {/* <hr /> */}
      {/* <div className="titulo">
        <h1>Alquilamos </h1>
      </div> */}
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
