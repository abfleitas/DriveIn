const { Router } = require("express");
const router = Router();
const Stripe = require("stripe");
const { SK_TEST } = process.env;
const stripe = new Stripe(SK_TEST);
const { Users, Vehicles, Rent } = require('../db');

router.post("/", async (req, res) => {
  try {
    const { id, amount, brand, model, category, vehicleId, user, dateInit, dateFinish } =
      req.body;
    //vehicleId para actualizar estado del vehiculo

    // Faltan datos de usuario para hacer las actualizaciones necesarias en su perfil

    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: `${brand}, ${model}, ${category}`,
      payment_method: id,
      confirm: true,
      receipt_email: user.email,
    });

    const vehicle = await Vehicles.findByPk(vehicleId);
    vehicle.availability = false;
    await Rent.create({
      dateInit,
      dateFinish,
      totalPrice: amount/100,
      userId: user.id,
      vehicleId
    })


    res.send(payment);
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
