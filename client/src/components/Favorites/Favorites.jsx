import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userFavorite } from "../../redux/actions/actions";
import { useNavigate, useLocation } from "react-router-dom";
import Card from "../Card/Card";
import Navbar from "../NavBar/Navbar";

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userFavorite());
  }, [dispatch]);

  const irAtras = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <>
      <div className="bg-[#D9D9D9] min-h-screen">
        <div>
          <Navbar />
        </div>
        <button
          onClick={irAtras}
          className="bg-[#2E3A46] text-white hover:bg-[#41D3C0] px-4 py-2 rounded-xl mt-4"
        >
          Ir Atras
        </button>
        <div className="w-3/5 flex flex-wrap gap-x-16 gap-y-24 mt-10 justify-around m-auto">
          {/* css maquetadores, son la mera verg.... */}
          {favorites.length
            ? favorites.map((v, index) => {
                return (
                  <div key={index}>
                    <Card
                      key={index + v.id}
                      id={v.id}
                      brand={v.brand}
                      model={v.model}
                      score={v.score}
                      airconditioning={v.airconditioning}
                      transmition={v.transmition}
                      seats={v.seats}
                      category={v.category}
                      photo={v.photo}
                      price={v.initialPrice}
                    />
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
}
