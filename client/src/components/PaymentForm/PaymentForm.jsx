import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { GET_PAYMENT } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import axios from "axios";
import { NavLink } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51LzLEhFe0h06NHhlterICFvudMvQM3gMYk3ovf0tFaq99Duy5IWvFsCBSUP0AJ2ap24m4Fkskh4oW2cSccosfuBG00g1BUYu08"
);
const CheckOutForm = () => {
  const vehiclesDetail = useSelector((state) => state.details);
  const payment = useSelector((state) => state.payment);
  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      const { id } = paymentMethod;
      const payload = {
        id,
        amount: vehiclesDetail.initialPrice * 100,
        brand: vehiclesDetail.brand,
        model: vehiclesDetail.model,
        category: vehiclesDetail.category,
        vehicleId: vehiclesDetail.id,
        // userData
      };

      axios.post("/payment", payload).then(
        (response) => {
          dispatch({ type: GET_PAYMENT, payload: response.data });
          swal({
            title: "Pago aceptado",
            text: "Dirígite a tu perfil para mas informacion",
            icon: "success",
          });
          setSuccess(true);
        },
        (error) => {
          dispatch({ type: GET_PAYMENT, payload: error.response.data });
          swal({
            title: "Pago rechazado",
            text: `${error.response.data.raw.message}`,
            icon: "error",
          });
        }
      );
    }
  };

  return (
    <>
      {!success ? (
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
