import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { getPayment } from "../../redux/actions/actions";

const stripePromise = loadStripe(
  "pk_test_51LzLEhFe0h06NHhlterICFvudMvQM3gMYk3ovf0tFaq99Duy5IWvFsCBSUP0AJ2ap24m4Fkskh4oW2cSccosfuBG00g1BUYu08"
);
const CheckOutForm = () => {
  const vehiclesDetail = useSelector((state) => state.details);
  const payment = useSelector((state) => state.payment);
  const [success, setSuccess] = useState(false);
  const [date, setDate] = useState({});
  const user = JSON.parse(localStorage.getItem("UserLogin"));

  const dispatch = useDispatch();

  const stripe = useStripe();
  const elements = useElements();

  const handleChange = async (e) => {
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
          dispatch(getPayment(payload));
          setSuccess(true);
        }
      }
    };
    handlePrice();
  };

  return (
    <>
      {!success ? (
        <div>
          <div className="flex mt-2 justify-center space-x-4">
            <div className="block">
              <label className="text-[#009A88] m-0">Desde</label>
              <input
                value={date.desde}
                onChange={handleChange}
                type="date"
                placeholder="FI"
                name="Desde"
                className="flex w-50  h-10 cursor-default rounded-md border border-[#F97D67] bg-[#F97D67] py-2 pl-3 pr-3 text-left shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm"
              />
            </div>
            <div className="block">
              <label className="relative text-[#009A88] ">Hasta</label>
              <input
                value={date.hasta}
                onChange={handleChange}
                type="date"
                placeholder="Hasta"
                name="Hasta"
                className="flex w-50  h-10 cursor-default rounded-md border border-[#F97D67] bg-[#F97D67] py-2 pl-3 pr-3 text-left shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm"
              />
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-[400px] border rounded-lg p-3 m-auto mt-2 bg-slate-100"
          >
            <h3>Precio Final:</h3>
            <br></br>
            <div>
              <CardElement />
            </div>
            <br></br>
            <button
              type="submit"
              className="border p-2 rounded-lg hover:bg-[#009A88] transition duration-75"
            >
              Pagar
            </button>
          </form>
        </div>
      ) : (
        <NavLink to="/user">Mi perfil</NavLink>
      )}
    </>
  );
};

export default function PaymentForm() {
  return (
    <Elements stripe={stripePromise}>
      <div>
        <CheckOutForm />
      </div>
    </Elements>
  );
}
