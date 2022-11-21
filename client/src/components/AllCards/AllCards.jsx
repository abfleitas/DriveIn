import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { getVehicles } from "../../redux/actions/actions";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import Siguiente from "../../images/flechablancader.png";
import Anterior from "../../images/flechablancaizq.png";

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
      <Link to="/creation">
        <button className=" align-right flex-row bg-[#009A88] w-max self-center px-4 py-1 rounded-lg hover:bg-[#F97D67] text-white mt-1">
          Agregar Vehículo
        </button>
      </Link>
      <div className=" flex flex-wrap gap-x-16 gap-y-24 mt-10 mb-5 justify-center">
        {currentVehicles.length ? (
          currentVehicles.map((v, index) => (
            <div>
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
          ))
        ) : (
          <h1 className="text-[#009A88] underline decoration-4">
            No existen autos con las caracteristicas solicitadas
          </h1>
        )}
      </div>
      {currentVehicles.length ? (
        <footer className="mb-5  space-x-4 inline-block align-middle  ">
          {currentPage !== 1 ? (
            <button
              className="bg-[#009A88] hover:bg-[#72aca5] p-3 h-10 w-10 rounded-full "
              onClick={prevHandler}
            >
              <img src={Anterior} alt="anterior" />
            </button>
          ) : null}
          {pageNumbers.map((number) => (
            <button
              className={
                currentPage === number
                  ? "bg-[#009A88] hover:bg-[#72aca5]  focus:bg-[#2E3A46] p-2 h-10 w-10 rounded-full flex-1 text-white text-center justify-center"
                  : " bg-[#009A88] hover:bg-[#72aca5] p-2 h-10 w-10 rounded-full flex-1 text-white text-center justify-center"
              }
              key={number}
              onClick={() => Page(number)}
            >
              {number}
            </button>
          ))}
          {currentPage !== pageNumbers.length ? (
            <button
              className="bg-[#009A88] hover:bg-[#72aca5] p-3 h-10 w-10 rounded-full text-center justify-center "
              onClick={nextHandler}
            >
              <img src={Siguiente} alt="siguiente" />
            </button>
          ) : null}
        </footer>
      ) : null}
    </>
  );
}
