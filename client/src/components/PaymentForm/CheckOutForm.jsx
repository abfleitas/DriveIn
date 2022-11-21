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

  const disableDates = () => {
    let today, dd, mm, yyyy;
    today = new Date();
    dd = today.getDate();
    mm = today.getMonth() + 1;
    yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  const diffDays = (from, to) => {
    if (!from || !to) {
      return "Miss info";
    } else {
      const fechaInicio = new Date(from).getTime();
      const fechaFin = new Date(to).getTime();
      const diff = fechaFin - fechaInicio;
      const days = diff / (1000 * 60 * 60 * 24);
      return days;
    }
  };
  const handlePrice = () => {
    // let algo = vehiclesDetail.initialPrice + AGREGADOS A DETERMINAR
    let finalPrice =
      diffDays(date.Desde, date.Hasta) * 100 * vehiclesDetail.initialPrice; // aqui iria el algo
    return finalPrice;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      const price = handlePrice();
      const { id } = paymentMethod;
      const payload = {
        id,
        amount: price,
        brand: vehiclesDetail.brand,
        model: vehiclesDetail.model,
        category: vehiclesDetail.category,
        vehicleId: vehiclesDetail.id,
        user: user,
        dateInit: date.Desde,
        dateFinish: date.Hasta,
      };
      const response = dispatch(getPayment(payload));
      swal({
        title: "Procesando pago",
        text: "Aguarde unos segundos, por favor",
        buttons: false,
        timer: 10000,
      });
      elements.getElement(CardElement).clear();
    }
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
              min={disableDates()}
              onChange={handleChange}
              type="date"
              name="Desde"
              className="flex w-50  h-10  bg-[#2E3A46] text-white  rounded-xl py-2 pl-3 pr-3 text-left shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm"
            />
          </div>
          <div className="block">
            <label className="relative text-black text-sm">Hasta</label>
            <input
              min={date.Desde}
              onChange={handleChange}
              type="date"
              name="Hasta"
              className="flex w-50  h-10  bg-[#2E3A46] text-white  rounded-xl py-2 pl-3 pr-3 text-left shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm"
            />
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-[400px] rounded-lg p-3 m-auto mt-2 bg-slate-100 ring-2 ring-[#2E3A46]"
        >
          <p>
            Precio Final:{" "}
            {isNaN(handlePrice() / 100)
              ? "Falta informacion"
              : `$USD ${handlePrice() / 100}`}
          </p>
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
