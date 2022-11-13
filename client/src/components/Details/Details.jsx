import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setVehicleDetailsState } from "../../redux/actions/actions";
import Aire from "../../images/aireVerde.png";
import Asientos from "../../images/asientosVerde.png";
import Dinero from "../../images/dineroVerde.png";

import Transmision from "../../images/transmisionVerde.png";

export default function Details() {
  const dispatch = useDispatch();
  const vehicleDetailsState = useSelector((state) => state.details);

  console.log(vehicleDetailsState);
  // const id = props.match.params.id;
  const { id } = useParams();

  useEffect(() => {
    dispatch(setVehicleDetailsState(id));
  }, [dispatch, id]);

  return (
    <div>
      {vehicleDetailsState && (
        <div className="bg-slate-700 h-full w-full py-10 px-10">
          <div>
            <div className="sm:flex space-x-7 md:items-start items-center">
              <div className="mb-4">
                <img
                  className="rounded-md object-cover h-48 w-96"
                  src={vehicleDetailsState.photo}
                  alt="brad"
                />
              </div>
              <div>
                <h1 className="text-slate-100 text-4xl font-bold my-2">
                  {vehicleDetailsState.brand}
                </h1>
                <p className="text-slate-100 text-lg text-start tracking-wide mb-6 md:max-w-lg">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <button className="border-2 px-8 py-3 rounded-md border-[#41D3C0] text-slate-100 hover:bg-[#41D3C0] hover:text-indigo-100 transition duration-75 relative">
                  ALQUILAR
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 sm:grid grid-cols-3 sm:space-x-4">
            <div className="bg-slate-600 p-6 rounded-md mb-4">
              <span className="text-slate-400 text-md">Modelo</span>
              <h2 className="text-slate-100 text-2xl font-semibold">
                {vehicleDetailsState.model}
              </h2>
            </div>
            <div className="bg-slate-600 p-6 rounded-md mb-4">
              <span className="text-slate-400 text-md">Tipo de carro</span>
              <h2 className="text-slate-100 text-2xl font-semibold">
                {vehicleDetailsState.category}
              </h2>
            </div>
          </div>
          <div className="sm:grid lg:grid-cols-4 grid-cols-2 sm:gap-x-4">
            <div className="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
              <div>
                <span className="text-md text-slate-400">Asientos</span>
                <h1 className="text-3xl font-bold text-slate-100">
                  {vehicleDetailsState.seats}
                </h1>
              </div>
              <div>
                <img
                  src={Asientos}
                  className="h-12 w-12 text-green-500"
                  alt="asientos"
                />
              </div>
            </div>
            <div className="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
              <div>
                <span className="text-md text-slate-400">
                  Aire Acondicionado
                </span>
                <h1 className="text-3xl font-bold text-slate-100">
                  {vehicleDetailsState.air}
                </h1>
              </div>
              <div>
                <img
                  src={Aire}
                  className="h-12 w-12 text-green-500"
                  alt="aire"
                />
              </div>
            </div>
            <div className="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
              <div>
                <span className="text-md text-slate-400">Transmision</span>
                <h1 className="text-3xl font-bold text-slate-100">
                  {vehicleDetailsState.transmition}
                </h1>
              </div>
              <div>
                <img
                  src={Transmision}
                  className="h-14 w-14 text-yellow-500"
                  alt="auto"
                />
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
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
