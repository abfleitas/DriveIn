import React, { useState } from "react";
// import { loadStripe } from "@stripe/stripe-js"; en componente a renderizar
import {
  // Elements en componente a renderizar
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { postPayment } from "../../redux/actions/actions";

// const stripePromise = loadStripe(
//   "pk_test_51LzLEhFe0h06NHhlterICFvudMvQM3gMYk3ovf0tFaq99Duy5IWvFsCBSUP0AJ2ap24m4Fkskh4oW2cSccosfuBG00g1BUYu08"
// ); en componente a renderizar

export default CheckOutForm = () => {
  const [success, setSuccess] = useState(false);
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
        amount: 1000,
        id,
      };
      const { data } = postPayment(payload);
      elements.getElement(CardElement).clear();
      console.log(data);
      setSuccess(true);
    }
  };

  return (
    <>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <img
            src="https://www.pngmart.com/files/1/Transparent-Computer-Keyboard-PNG.png"
            alt="keyboard"
          />
          <h3>Price: 10$</h3>
          <div>
            <CardElement />
          </div>
          <button type="submit">BUY</button>
        </form>
      ) : (
        <div>
          <h2>Compra exitosa</h2>
        </div>
      )}
    </>
  );
};
