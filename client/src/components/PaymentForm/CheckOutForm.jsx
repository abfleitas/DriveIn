import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import image from "../../images/stripe.png";
import { getPayment } from "../../redux/actions/actions";

export default function CheckOutForm() {
  const vehiclesDetail = useSelector((state) => state.details);
  const dispatch = useDispatch();
  const [date, setDate] = useState({});
  const user = JSON.parse(localStorage.getItem("UserLogin"));
  const stripe = useStripe();
  const elements = useElements();

  const handleChange = (e) => {
    e.preventDefault();
    setDate({
      ...date,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    const handlePrice = () => {
      if (!date.Desde && !date.Hasta) {
        swal({
          title: "Error",
          text: "Seleccione fecha de inicio y/o final",
          icon: "error",
        });
      } else {
        const fechaInicio = new Date(date.Desde).getTime();
        const fechaFin = new Date(date.Hasta).getTime();
        const diff = fechaFin - fechaInicio;
        let days = diff / (1000 * 60 * 60 * 24);
        if (fechaFin < fechaInicio) {
          swal({
            title: "Error",
            text: "Fecha final debe ser posterior a la fecha de inicio",
            icon: "error",
          });
        } else {
          if (!error) {
            const { id } = paymentMethod;
            const payload = {
              id,
              amount: vehiclesDetail.initialPrice * 100 * days,
              brand: vehiclesDetail.brand,
              model: vehiclesDetail.model,
              category: vehiclesDetail.category,
              vehicleId: vehiclesDetail.id,
              user: user,
              dateInit: date.Desde,
              dateFinish: date.Hasta,
            };
            swal({
              title: "Procesando pago",
              text: "Aguarde unos segundos, por favor...",
              buttons: false,
              timer: 10000,
            });
            return payload;
          }
        }
      }
    };
    const payload = handlePrice();
    const response = dispatch(getPayment(payload));
    elements.getElement(CardElement).clear();
  };

  return (
    <>
      <div>
        <img src={image} alt="stripe" />
        <p className="text-xs">
          mas informacion en{" "}
          <a
            href="https://www.stripe.com/"
            target="_blank"
            className="text-blue"
          >
            Stripe.com
          </a>
        </p>
        <h1 className="mt-4">Seleccione la fecha</h1>
        <div className="flex mt-2 justify-center space-x-4">
          <div className="block">
            <label className="relative text-black text-sm">Desde</label>
            <input
              value={date.desde}
              onChange={handleChange}
              type="date"
              placeholder="FI"
              name="Desde"
              className="flex w-50  h-10  bg-[#2E3A46] text-white  rounded-xl py-2 pl-3 pr-3 text-left shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm"
            />
          </div>
          <div className="block">
            <label className="relative text-black text-sm">Hasta</label>
            <input
              value={date.hasta}
              onChange={handleChange}
              type="date"
              placeholder="Hasta"
              name="Hasta"
              className="flex w-50  h-10  bg-[#2E3A46] text-white  rounded-xl py-2 pl-3 pr-3 text-left shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm"
            />
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-[400px] rounded-lg p-3 m-auto mt-2 bg-slate-100 ring-2 ring-[#2E3A46]"
        >
          <p>Precio Final:</p>
          <br></br>
          <div className=" p-3 ring-2 rounded">
            <CardElement />
          </div>
          <br></br>
          <button
            type="submit"
            className="bg-[#2E3A46] text-white  rounded py-2 px-3 hover:bg-green"
          >
            Pagar
          </button>
        </form>
      </div>
    </>
  );
}
