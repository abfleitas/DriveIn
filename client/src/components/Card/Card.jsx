import React from "react";
import { NavLink } from "react-router-dom";
import { ButtonFav } from "../ButtonFav/ButtonFav";

export default function Card({ id, photo, brand, model, price }) {
  const userLogin = JSON.parse(localStorage.getItem("UserLogin"));
  return (
    <div
      className="flex flex-col bg-white p-5 rounded-lg w-[300px] h-[400px] justify-around shadow-xl"
      value={id}
    >
      {userLogin && <ButtonFav id={id} />}
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

      <NavLink to={`/details/${id}`}>
        <span className="bg-[#2E3A46] text-white hover:bg-[#41D3C0] px-4 py-2 rounded-xl">
          Ver Oferta
        </span>
      </NavLink>
    </div>
  );
}
