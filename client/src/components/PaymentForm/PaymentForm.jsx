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
    console.log(e.target.value);
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
          text: "Fecha final debe ser mayor a la fecha de inicio",
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
            dateInit: fechaInicio,
            dateFinish: fechaFin
          };
          console.log(payload);
          dispatch(getPayment(payload));
        }
      }
    };
    handlePrice();
  };

  return (
    <>
      {!success ? (
        <>
          <div className="relative flex my-4 justify-center space-x-4">
            <div className="relative block">
              <label className="text-[#009A88] m-0">Desde</label>
              <input
                value={date.desde}
                onChange={handleChange}
                type="date"
                placeholder="FI"
                name="Desde"
                className="relative flex left-px w-50  h-10 cursor-default rounded-md border border-[#F97D67] bg-[#F97D67] py-2 pl-3 pr-3 text-left shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm"
              />
            </div>
            <div className="relative block">
              <label className="relative text-[#009A88]">Hasta</label>
              <input
                value={date.hasta}
                onChange={handleChange}
                type="date"
                placeholder="Hasta"
                name="Hasta"
                className="relative flex  left-[40px] bottom-[23px] w-50  h-10 cursor-default rounded-md border border-[#F97D67] bg-[#F97D67] py-2 pl-3 pr-3 text-left shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm my-6"
              />
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-[400px] border rounded-lg p-3"
          >
            <h3>Precio Final: </h3>
            <br></br>
            <div>
              <CardElement />
            </div>
            <br></br>
            <button type="submit">BUY</button>
          </form>
        </>
      ) : (
        <NavLink to="/home">Mi perfil</NavLink>
      )}
    </>
  );
};

export default function PaymentForm() {
  return (
    <Elements stripe={stripePromise}>
      <div className="m-0">
        <CheckOutForm />
      </div>
    </Elements>
  );
}
