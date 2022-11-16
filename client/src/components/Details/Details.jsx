import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
import { setVehicleDetailsState } from "../../redux/actions/actions";
import Aire from "../../images/aireVerde.png";
import Asientos from "../../images/asientosVerde.png";
import Dinero from "../../images/dineroVerde.png";
import Back from "../../images/backblanco.png";
import Transmision from "../../images/transmisionVerde.png";
import PaymentForm from "../PaymentForm/PaymentForm";
// import CheckOutForm from "../CheckoutForm/CheckOutForm";

// const stripePromise = loadStripe(
//   "pk_test_51LzLEhFe0h06NHhlterICFvudMvQM3gMYk3ovf0tFaq99Duy5IWvFsCBSUP0AJ2ap24m4Fkskh4oW2cSccosfuBG00g1BUYu08"
// );

export default function Details() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const vehicleDetailsState = useSelector((state) => state.details);

  const { id } = useParams();

  useEffect(() => {
    dispatch(setVehicleDetailsState(id));
  }, [dispatch, id]);

  return (
    <div>
      {vehicleDetailsState && (
        // <div className="bg-slate-700 h-full w-full py-10 px-10">
        <div className="bg-white h-full w-full py-10 px-10 ">
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
                {/* <h1 className="text-slate-100 text-4xl font-bold my-2"> */}
                <h1 className="text-[#2E3A46] text-4xl font-bold my-2">
                  {vehicleDetailsState.brand}
                </h1>
                <p className="text-[#2E3A46] text-lg text-start tracking-wide mb-6 md:max-w-lg">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>

                <button
                  onClick={() => setOpen(true)}
                  className="flex-row  flex border-2 px-8 py-3 rounded-md border-[#41D3C0] text-[#41D3C0] hover:bg-[#41D3C0] hover:text-indigo-100 transition duration-75 relative"
                >
                  ALQUILAR
                </button>
              </div>
            </div>
            {!open ? null : (
              <div>
                <PaymentForm />
              </div>
            )}
          </div>
          <div className="mt-8 sm:grid grid-cols-3 sm:space-x-4">
            {/* <div className="bg-slate-600 p-6 rounded-md mb-4"> */}
            <div className="bg-slate-100 p-6 rounded-md mb-4">
              <span className="text-slate-400 text-md">Modelo</span>
              {/* <h2 className="text-slate-100 text-2xl font-semibold"> */}
              <h2 className="text-[#F97D67] text-2xl font-semibold">
                {vehicleDetailsState.model}
              </h2>
            </div>
            {/* <div className="bg-slate-600 p-6 rounded-md mb-4"> */}
            <div className="bg-slate-100 p-6 rounded-md mb-4">
              {/* <span className="text-slate-400 text-md">Tipo de vehículo</span> */}
              <span className="text-slate-400 text-md">Tipo de vehículo</span>
              <h2 className="text-[#F97D67] text-2xl font-semibold">
                {vehicleDetailsState.category}
              </h2>
            </div>
          </div>
          <div className="sm:grid lg:grid-cols-4 grid-cols-2 sm:gap-x-4">
            <div className="flex justify-between items-center bg-slate-100 p-6 rounded-md mb-4">
              <div>
                <span className="text-md text-slate-400">Asientos</span>
                <h1 className="text-3xl font-bold text-[#F97D67]">
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
            <div className="flex justify-between items-center bg-slate-100 p-6 rounded-md mb-4">
              <div>
                <span className="text-md text-slate-400">
                  Aire Acondicionado
                </span>
                <h1 className="text-3xl font-bold text-[#F97D67]">
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
            <div className="flex justify-between items-center bg-slate-100 p-6 rounded-md mb-4">
              <div>
                <span className="text-md text-slate-400">Transmision</span>
                <h1 className="text-3xl font-bold text-[#F97D67]">
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
            <div className="flex justify-between items-center bg-slate-100 p-6 rounded-md mb-4">
              <div>
                <span className="text-md text-slate-400">Precio por dia</span>
                <h1 className="text-3xl font-bold text-[#F97D67]">{`US$ ${vehicleDetailsState.initialPrice}`}</h1>
              </div>

              <div>
                <img
                  src={Dinero}
                  className="h-14 w-14 text-yellow-500"
                  alt="auto"
                />
              </div>
            </div>
            <div>
              <Link to="/ciudad/:id">
                <button className=" flex-row  flex border-2 px-4 py-4 rounded-full border-[#41D3C0] bg-[#41D3C0] hover:bg-[#94d8cf] hover:border-[#94d8cf] hover:text-indigo-100 transition duration-75 relative">
                  <img className="w-5 h-5" src={Back} alt="" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
