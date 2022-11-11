import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites } from "../../redux/actions/actions";
import addFav from "../../images/fav.png";
import noFav from "../../images/fav1.png";

export default function Card({ id, photo, brand, model, price }) {
  const dispatch = useDispatch();
  const [fav, setFav] = useState(false);
  const favorites = useState([]);

  const handleClickFavorito = (e) => {};

  return (
    <div
      className="flex flex-col bg-white p-5 rounded-lg w-[300px] h-[400px] justify-around shadow-xl"
      value={id}
    >
      <button className="w-max" onClick={() => handleClickFavorito()}>
        <img src={fav ? addFav : noFav} className="w-[30px]" />
      </button>

      <img
        src={photo}
        alt="Loading Auto"
        className="flex items-center h-40 w-40 m-auto rounded-full border-[#009A88] border-2 p-1"
      />
      <p className="font-bold">{brand}</p>
      <p>{model}</p>
      <p className="font-bold text-[#F97D67]">$ {price}</p>

      <NavLink
        to={`/detail/${id}`}
        className="bg-[#009A88] w-max self-center p-4 rounded-3xl hover:bg-[#F97D67] text-white mt-2"
      >
        <span>Ver Oferta</span>
      </NavLink>
    </div>
  );
}
