import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setVehicleDetailsState } from "../../redux/actions/actions";
import cancel from "../../images/cancelacion.PNG";
import Aire from "../../images/aireVerde.png";
import Asientos from "../../images/asientosVerde.png";
import Dinero from "../../images/dineroVerde.png";
import Transmision from "../../images/transmisionVerde.png";
import PaymentForm from "../PaymentForm/PaymentForm";
import NavBar from "../NavBar/Navbar";

export default function Details() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const vehicleDetailsState = useSelector((state) => state.details);
  const user = JSON.parse(localStorage.getItem("UserLogin"));
  const navigate = useNavigate();

  const { id } = useParams();

  const handleOpen = (e) => {
    e.preventDefault();
    if (!user) {
      navigate("/login");
    } else {
      setOpen(true);
    }
  };

  const handleOnClose = () => setOpen(false);

  useEffect(() => {
    dispatch(setVehicleDetailsState(id));
  }, [dispatch, id]);

  return (
    <div className="bg-[#D9D9D9] min-h-screen">
      <div>
        <NavBar />
      </div>
      {vehicleDetailsState && (
        <div className=" h-full w-[990px] py-10 px-10 m-auto bg-white">
          <div>
            <div className="sm:flex space-x-7 md:items-start items-center ">
              <div className="mb-4 ">
                <img
                  className="rounded-md object-cover h-48 w-96 border-[#41D3C0] border-2"
                  src={vehicleDetailsState.photo}
                  alt="brad"
                />
              </div>

              <div>
                <h1 className="text-[#2E3A46] text-4xl font-bold my-2">
                  {vehicleDetailsState.brand}
                </h1>
                <p className="text-[#2E3A46] text-lg text-start tracking-wide mb-6 md:max-w-lg">
                  Nuestras tarifas incluyen vehículos nuevos en excelentes
                  condiciones equipados para la zona, silla para bebe, buster o
                  elevador, seguro, entrega y recepción de los vehículos en
                  aeropuerto, terminal, hoteles y conductores adicionales sin
                  cargo. El vehículo se debe devolver con la misma cantidad de
                  combustible que fue entregado, en caso contrario se cobrará la
                  diferencia. Los días de alquiler se contabilizan a partir de
                  que se entrega el vehículo y por 24 horas. Con 1 hora de
                  tolerancia en la devolución, de lo contrario se cobraran horas
                  extras.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex sm:space-x-4 justify-center items-center m-auto">
            <div className="bg-slate-100 p-6 rounded-md mb-4 w-[200px]">
              <span className="text-slate-400 text-md">Modelo</span>

              <h2 className="text-[#F97D67] text-2xl font-semibold">
                {vehicleDetailsState.model}
              </h2>
            </div>

            <div className="bg-slate-100 p-6 rounded-md mb-4 w-[200px]">
              <span className="text-slate-400 text-md">Tipo de vehículo</span>
              <h2 className="text-[#F97D67] text-2xl font-semibold">
                {vehicleDetailsState.category}
              </h2>
            </div>
            <div className="flex justify-between items-center bg-slate-100 p-6 rounded-md mb-4 gap-x-2">
              <div>
                <img
                  src={Asientos}
                  className="h-12 w-12 text-green-500"
                  alt="asientos"
                />
              </div>
              <div>
                <span className="text-md text-slate-400">Asientos</span>
                <h1 className="text-3xl font-bold text-[#F97D67]">
                  {vehicleDetailsState.seats}
                </h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center m-auto sm:gap-x-4">
            <div className="flex justify-between items-center bg-slate-100 p-6 rounded-md mb-4 gap-x-2">
              <div>
                <img
                  src={Aire}
                  className="h-12 w-12 text-green-500"
                  alt="aire"
                />
              </div>
              {vehicleDetailsState.air && (
                <div>
                  <span className="text-md text-slate-400">
                    Aire Acondicionado
                  </span>
                  <h1 className="text-3xl font-bold text-[#F97D67]">
                    {vehicleDetailsState.air}
                  </h1>
                </div>
              )}
            </div>
            <div className="flex justify-between items-center bg-slate-100 p-6 rounded-md mb-4 gap-x-2">
              <div>
                <img
                  src={Transmision}
                  className="h-14 w-14 text-yellow-500"
                  alt="auto"
                />
              </div>
              <div>
                <span className="text-md text-slate-400">Transmision</span>
                <h1 className="text-3xl font-bold text-[#F97D67]">
                  {vehicleDetailsState.transmition}
                </h1>
              </div>
            </div>
            <div className="flex justify-between items-center bg-slate-100 p-6 rounded-md mb-4 gap-x-2">
              <div>
                <img
                  src={Dinero}
                  className="h-14 w-14 text-yellow-500"
                  alt="auto"
                />
              </div>
              <div>
                <span className="text-md text-slate-400">Precio por dia</span>
                <h1 className="text-3xl font-bold text-[#F97D67]">{`$USD ${vehicleDetailsState.initialPrice}`}</h1>
              </div>
            </div>
          </div>
          <button
            onClick={handleOpen}
            className="flex-row  flex border-2 px-8 py-3 rounded-md border-[#41D3C0] text-[#41D3C0] hover:bg-[#41D3C0] hover:text-indigo-100 transition duration-75 relative m-auto"
          >
            ALQUILAR
          </button>
          <PaymentForm onClose={handleOnClose} visible={open} />
        </div>
      )}
    </div>
  );
}
