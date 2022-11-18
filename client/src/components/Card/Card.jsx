import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites, removeFavorites } from "../../redux/actions/actions";
import addFav from "../../images/fav.png";
import noFav from "../../images/fav1.png";
import { ButtonFav } from "../ButtonFav/ButtonFav";

export default function Card({ id, photo, brand, model, price }) {
  //Cambios abrir
  // const fav = useSelector(state => state.favorites);
  //console.log(fav);
  // const [favorito, setFavorito] = useState(fav ? fav.some(item => item.id === id) : false);
  //console.log("include ",fav.some(item => item.id));
  //const favorites = useState([]);
  // const dispatch = useDispatch();
  const userLogin = JSON.parse(localStorage.getItem("UserLogin"));

  // const handleClickFavorito = (event) => {
  //   const data = {
  //     id,
  //     photo,
  //     brand,
  //     model,
  //     price,
  //   };
  //   if (!favorito) {
  //     dispatch(addFavorites(data));
  //     setFavorito(true);
  //   } else {
  //     dispatch(removeFavorites(id));
  //     setFavorito(false);
  //   }
  // };
  //Cambios cerrar
  return (
    <div
      className="flex flex-col bg-white p-5 rounded-lg w-[300px] h-[400px] justify-around shadow-xl"
      value={id}
    >
      {/* <button className="w-max" onClick={(event) => handleClickFavorito(event)}>
        <img src={favorito ? addFav : noFav} className="w-[30px]" />
      </button> */}
      {userLogin && <ButtonFav id={id}/>}
      <img
        src={photo}
        alt="Loading Auto"
        className="flex items-center h-40 w-[250px] m-auto rounded-lg border-[#009A88] border-2 p-1"
      />
      <p className="font-bold">{brand}</p>
      <p>{model}</p>
      <br />
      <p className="font-bold text-[#41D3C0]">USD ${price}</p>
      <br />

      <NavLink
        to={`/details/${id}`}

      >
        <span className="bg-[#2E3A46] text-white hover:bg-[#41D3C0] px-4 py-2 rounded-xl">Ver Oferta</span>
      </NavLink>
    </div>
  );
}
