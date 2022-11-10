import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { getVehicles } from "../../redux/actions/actions";
import Card from "../Card/Card";
import "./AllCards.css";

export default function AllCards() {
  const vehicles = useSelector((state) => state.vehiclesCopy);
  const dispatch = useDispatch();

  //Paginado inicio bloque...
  const [currentPage, setCurrentPage] = useState(1);
  const vehicleByPage = 8;
  const lastVehicle = currentPage * vehicleByPage;
  const firstVehicle = lastVehicle - vehicleByPage;
  const currentVehicles =
    vehicles !== undefined ? vehicles.slice(firstVehicle, lastVehicle) : [];
  const pageNumbers = [];
  const totalVehicles = vehicles.length;

  //Realizar la división del total de vehículos disponibles y posterior asignación al arreglo.
  for (
    let index = 0;
    index < Math.ceil(totalVehicles / vehicleByPage);
    index++
  ) {
    pageNumbers.push(index + 1);
  }

  //Establecer el número de la página actual.
  const Page = (page) => {
    setCurrentPage(page);
  };

  //Botón primero, hacia atras.
  const prevHandler = () => {
    const prevPage = currentPage - 1;
    if (prevPage < 1) return;
    setCurrentPage(prevPage);
  };

  //Botón último, hacia adelante.
  const nextHandler = () => {
    const nextPage = currentPage + 1;
    if (nextPage > pageNumbers.length) return;
    setCurrentPage(nextPage);
  };

  /**
   * Establecer la página 1 con cada cambio por ordenamiento o filtración.
   * Agregar la línea siguiente, en cada función de filtración ú ordenamiento.
   * => setChange(event.target.value); <=
   **/
  const [change, setChange] = useState("");
  useEffect(() => {
    setCurrentPage(1);
  }, []);
  //Paginado fin bloque...

  useEffect(() => {
    dispatch({ type: "GET_VEHICLES" }); // hardcodeado
  }, []);

  return (
    <div className="container">
      {/* Nota cambiar vehicles en el map por currentVehicles */}
      {vehicles.length ? (
        vehicles.map((obj, i) => (
          <div key={i} className="width">
            <Card {...obj} />
          </div>
        ))
      ) : (
        <h3>Error</h3>
      )}
      {/* Inicia renderizado de botones de paginación
      El nombre de la clase para el css queda a discreción del maquetador, 
      en los button pasados por map */}
      <footer>
        {currentPage !== 1 ? (
          <button className="prev" onClick={prevHandler}>
            Previous
          </button>
        ) : null}
        {pageNumbers.map((number) => (
          <button
            className={
              currentPage === number
                ? "pagination_button active"
                : "pagination_button"
            }
            key={number}
            onClick={() => Page(number)}
          >
            {number}
          </button>
        ))}
        {currentPage !== pageNumbers.length ? (
          <button className="next" onClick={nextHandler}>
            Next
          </button>
        ) : null}
      </footer>
    </div>
  );
}
