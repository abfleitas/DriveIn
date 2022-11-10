import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addFavorites } from '../../redux/actions/actions';

export default function Card(props){
    const dispatch = useDispatch();
    
    //AGREGAR A FAVORITOS, llamada a la action addFavorites, toma el id del auto.
    const handleClickFavorito = (auto) => {
        dispatch(addFavorites(auto))
    } 

    const handleClickVerOferta = () => {

    }
    //Generar card de vehiculos, con marca y modelo, precio, imagen, boton fav, boton ver oferta
    return (
        <>
        {/* La maquetacion va por los chicos expertos en css */}
            <Link to={`/detail/${props.id}`}>
                <img src={props.image} alt="Loading Auto" />
                <p>Marca {props.brand}</p>
                <p>Modelo {props.model}</p>
                <p>Precio {props.price}</p>
            </Link>
            <span><button onClick={(() => handleClickFavorito({"id":props.id,"name":props.name,"image":props.image}))}>ADD FAVORITES</button></span>
            <span><button onClick={(() => handleClickVerOferta())}>Ver Oferta</button></span>
        </>
    );
}
