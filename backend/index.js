const express = require("express");
const mongoose = require("mongoose");
const cors = require ("cors");
const stripe = require ('stripe')
('sk_test_51Ks84lCxZUFoZxG0jp1QJLulUKM1b8xPAAlMpawNyDsW1qTWnf7BzhmI8KjZZgFiFBIobJ6QmjqlmcmKXoNYGNNk00D65wwbwp');

const user = require("./routes/user");
const auth = require("./routes/auth");
const task = require("./routes/task");


const app = express();
app.use (cors());
app.use(express.json());
app.use("/api/user", user);
app.use("/api/auth", auth);
app.use("/api/task", task);


app.post('/stripe_checkout', async (req, res) => {
  const stripeToken = req.body.stripeToken;
  const amount = req.body.amount;

  const amountInEur = Math.round(amount * 100);
  const chargeObject = await stripe.charges.create({
    amount: amountInEur,
    currency: 'eur',
    source: stripeToken,
    description: 'monedas internacionales',
    receipt_email: 'revolucionx888@gmail.com'
  });

  //confirmacion de pago y/o reembolso!!
  try {
    await stripe.charges.capture(chargeObject.id);
    res.json(chargeObject);
  } catch (error) {
      await stripe.refunds.create({ charge: chargeObject.id });
      res.json(chargeObject);
  }

})



const port = process.env.PORT || 3003;
app.listen(port, () => console.log("Escuchando Puerto: " + port));

mongoose
  .connect("mongodb://localhost/task", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado a Mongo DB"))
  .catch((error) => console.log("No se ha conectado a Mongo Db"));
