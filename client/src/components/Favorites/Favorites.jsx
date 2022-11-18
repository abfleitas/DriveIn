import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorites } from "../../redux/actions/actions";
import { useNavigate, Link } from "react-router-dom";
import Card from "../Card/Card";

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites);
  const userLogin = JSON.parse(localStorage.getItem("UserLogin"))
  const dispatch = useDispatch();
  const handleClickRemove = (id) => {
    dispatch(removeFavorites(id));
  };

  const handleClickPurchase = () => {};

  return (
    <>
      <div>
        {/* css maquetadores, son la mera verg.... */}
        <div>
          {!userLogin ? favorites && favorites.map((v, index) => {
            return <Card
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
          }) : userLogin.vehicles.map((v, index) => {
            return <Card
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
          })}
        </div>
        <div>
          {favorites &&
            favorites.map((favoriteItem) => {
              return (
                <div key={favoriteItem.id}>
                  <div>
                    <Link to={`/details/${favoriteItem.id}`}>
                      <img src={favoriteItem.photo} alt="Auto" />
                    </Link>
                  </div>
                  <div>
                    <p>{favoriteItem.brand}</p>
                  </div>
                  <div>
                    <div>
                      <p>{favoriteItem.model}</p>
                    </div>

                    <div>
                      <p>{favoriteItem.price}</p>
                    </div>
                  </div>
                  <button onClick={() => handleClickRemove(favoriteItem.id)}>
                    Quitar Favorito
                  </button>
                  <button onClick={(event) => handleClickPurchase(event)}>
                    Hacer Reserva 
                    {/* Ir al formulario de compra, reserva "Call to action"*/}
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
