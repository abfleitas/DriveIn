import React from "React";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorites } from "../../redux/actions/actions";
import { useNavigate, Link } from "react-router-dom";

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites);
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
          {favorites &&
            favorites.map((favoriteItem) => {
              return (
                <div>
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
                  <button onClick={() => handleClickRemove(favorites.id)}>
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
