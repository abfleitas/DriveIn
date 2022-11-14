import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { getVehicles } from "../../redux/actions/actions";
import Card from "../Card/Card";

export default function AllCards() {
  const vehicles = useSelector((state) => state.vehiclesCopy);
  //Paginado inicio bloque...
  const [currentPage, setCurrentPage] = useState(1);
  const vehicleByPage = 8;
  const lastVehicle = currentPage * vehicleByPage;
  const firstVehicle = lastVehicle - vehicleByPage;
  const currentVehicles =
    vehicles !== undefined ? vehicles.slice(firstVehicle, lastVehicle) : [];
  const pageNumbers = [];
  const totalVehicles = vehicles && vehicles.length;

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

  return (
    <>
      <div className=" flex flex-wrap gap-x-16 gap-y-24 mt-10 mb-5 justify-center">
        {currentVehicles.length ? (
          currentVehicles.map((v, index) => (
            <div>
              <Card
                key={index}
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
          ))
        ) : (
          <h3>Error</h3>
        )}
      </div>
      <footer className="mb-5">
        {currentPage !== 1 ? (
          <button
            className="bg-[#009A88] p-3 rounded-full"
            onClick={prevHandler}
          >
            Anterior
          </button>
        ) : null}
        {pageNumbers.map((number) => (
          <button
            className={
              currentPage === number
                ? "bg-[#F97D67] p-3 rounded-full"
                : " p-3 rounded-full"
            }
            key={number}
            onClick={() => Page(number)}
          >
            {number}
          </button>
        ))}
        {currentPage !== pageNumbers.length ? (
          <button
            className="bg-[#009A88] p-3 rounded-full"
            onClick={nextHandler}
          >
            Siguiente
          </button>
        ) : null}
      </footer>
    </>
  );
}
