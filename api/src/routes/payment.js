const { Router } = require("express");
const router = Router();
const Stripe = require("stripe");
const { SK_TEST } = process.env;
const stripe = new Stripe(SK_TEST);
const { Users, Vehicles, Rent } = require("../db");
const { mails } = require("../middlewares/mails");

router.post("/", async (req, res) => {
  try {
    const {
      id,
      amount,
      brand,
      model,
      category,
      vehicleId,
      user,
      dateInit,
      dateFinish,
    } = req.body;

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
    const renta = await Rent.create({
      dateInit,
      dateFinish,
      totalPrice: amount / 100,
      userId: user.id,
      vehicleId,
    });

    const recibo = `<h1>Gracias por contratar nuestro servicio, ${user.name} !</h1>

    <h3>Detalles:</h3>

    <p>Alquilaste un ${payment.description} por un monto total de $USD ${renta.totalPrice}, desde el dia ${dateInit} 
    hasta ${dateFinish}</p>

    <p>En tu casilla de correo recibiste un correo de Stripe, nuestro intermediario en el cobro, 
    con la factura de la transaccion. Caso contrario contactate con nosotros en la solapa "Contacto" de la plataforma</p>

    <p>Para mas informacion sobre el vehiculo y ubicacion de retiro del mismo dirígete a tu Perfil en la plataforma<p>

    <p> Atentamente DriveIn & asoc. </p>`;

    const subject = "Alquiler de auto en DriveIn";

    await mails(recibo, user.email, subject);

    res.send(payment);
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
