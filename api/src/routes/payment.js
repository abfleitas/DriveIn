const { Router } = require("express");
const router = Router();
const Stripe = require("stripe");

const stripe = new Stripe(
  "sk_test_51LzLEhFe0h06NHhl4RTg4HNB7KiQaoRWISyscoBjFqcgM0Y4LFNEnvbpcCat054GvKnSYTuO2t5LjAnJIVKgShZ700hWpgz17T"
); // deberia ir en un .env
router.post("/", async (req, res) => {
  try {
    const { id, amount } = req.body;
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Keyboard",
      payment_method: id,
      confirm: true,
    });
    console.log(payment);
    res.send({ message: "Succesfully payment" });
  } catch (error) {
    console.log(error);
    res.send({ message: error.row.message });
  }
});

module.exports = router;
