import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setVehicleDetailsState } from "../../redux/actions/actions";
import Aire from "../../images/aireVerde.png";
import Auto from "../../images/autoVerde.png";
import Dinero from "../../images/dineroVerde.png";
import Categoria from "../../images/generoVerde.png";
import Transmision from "../../images/transmisionVerde.png";

const VehicleDetails = (props) => {
  const dispatch = useDispatch();
  const vehicleDetailsState = useSelector((state) => state.vehicleDetailsState);

  console.log(vehicleDetailsState);
  const id = useParams();
  let urlRef = window.location.href; // busco el id en la url
  urlRef = window.location.href.toString();
  urlRef = urlRef.split("details/");
  urlRef = urlRef[1];

  useEffect(() => {
    dispatch(setVehicleDetailsState(id));
  }, [dispatch, id]);
  // useEffect(() => {
  //   async function fetchData() {
  //     let vehicleData = await axios.get(
  //       `http://localhost:3001/vehicles/${urlRef}`
  //     );
  //     vehicleData = vehicleData.data;
  //     console.log(vehicleData.photo);
  //     const vehicleDetails = [
  //       <div key={vehicleData.id}>
  //         <h1>{vehicleData.brand}</h1>
  //         <img src={vehicleData.photo} alt="car" />
  //         <p>Modelo: {vehicleData.model}</p>
  //         <p>Aire Acondicionado: {vehicleData.air ? "Si tiene" : "No tiene"}</p>
  //         <p>Transmision: {vehicleData.transmition}</p>
  //         <p>numero de asientos: {vehicleData.seats}</p>
  //         <p>Tipo de carro: {vehicleData.category}</p>
  //         <p>Precio: ${vehicleData.initialPrice}</p>
  //       </div>,
  //     ];
  //     dispatch(setVehicleDetailsState(vehicleDetails));
  //   }
  //   fetchData();
  // }, [urlRef]);

  return (
    <div>
      <div className="bg-slate-700 w-full py-10 px-10">
        <div>
          <div className="sm:flex space-x-7 md:items-start items-center">
            <div className="mb-4">
              <img
                className="rounded-md md:w-80"
                src="https://a.ccdn.es/cnet/contents/media/resources/2013/2/1000113.jpg//937x624cut/"
                alt="brad"
              />
            </div>
            <div>
              <h1 className="text-slate-100 text-4xl font-bold my-2">
                Marca de Auto
              </h1>
              <p className="text-slate-100 text-lg text-start tracking-wide mb-6 md:max-w-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <button className="border-2 px-6 py-4 rounded-md border-[#41D3C0] text-slate-100 hover:bg-[#41D3C0] hover:text-indigo-100 transition duration-75">
                ALQUILAR
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 sm:grid grid-cols-3 sm:space-x-4">
          <div className="bg-slate-600 p-6 rounded-md mb-4">
            <span className="text-slate-400 text-md">Modelo</span>
            <h2 className="text-slate-100 text-2xl font-semibold">
              Poner modelo
            </h2>
          </div>
          <div className="bg-slate-600 p-6 rounded-md mb-4">
            <span className="text-slate-400 text-md">Tipo de carro</span>
            <h2 className="text-slate-100 text-2xl font-semibold">categoría</h2>
          </div>
          {/* <div className="bg-slate-600 p-6 rounded-md mb-4">
            <span className="text-slate-400 text-md">Twitter</span>
            <h2 className="text-slate-100 text-2xl font-semibold">traversymedia</h2>
          </div> */}
        </div>
        <div className="sm:grid lg:grid-cols-4 grid-cols-2 sm:gap-x-4">
          <div className="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
            <div>
              <span className="text-md text-slate-400">Asientos</span>
              <h1 className="text-3xl font-bold text-slate-100">4</h1>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-cyan-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
            <div>
              <span className="text-md text-slate-400">Aire Acondicionado</span>
              <h1 className="text-3xl font-bold text-slate-100">si/no</h1>
            </div>
            <div>
              <img src={Aire} className="h-12 w-12 text-green-500" alt="aire" />
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg> */}
            </div>
          </div>
          <div className="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
            <div>
              <span className="text-md text-slate-400">Transmision</span>
              <h1 className="text-3xl font-bold text-slate-100">va acá</h1>
            </div>
            <div>
              <img
                src={Transmision}
                className="h-14 w-14 text-yellow-500"
                alt="auto"
              />
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-14 w-14 text-yellow-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg> */}
            </div>
          </div>
          <div className="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
            <div>
              <span className="text-md text-slate-400">Precio</span>
              <h1 className="text-3xl font-bold text-slate-100">US$400</h1>
            </div>
            <div>
              <img
                src={Dinero}
                className="h-14 w-14 text-yellow-500"
                alt="auto"
              />
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-14 w-14 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg> */}
            </div>
          </div>
        </div>
      </div>
      <div>{vehicleDetailsState}</div>
    </div>
  );
};

export default VehicleDetails;
