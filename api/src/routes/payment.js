const { Router } = require("express");
const router = Router();
const Stripe = require("stripe");
const { SK_TEST } = process.env;
const stripe = new Stripe(SK_TEST);
router.post("/", async (req, res) => {
  try {
    const { id, amount, brand, model, category, vehicleId, userEmail } =
      req.body;
    //vehicleId para actualizar estado del vehiculo

    // Faltan datos de usuario para hacer las actualizaciones necesarias en su perfil

    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: `${brand}, ${model}, ${category}`,
      payment_method: id,
      confirm: true,
      receipt_email: userEmail,
    });

    res.send(payment);
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
