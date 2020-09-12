const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "	sk_test_51HQL7AJM60LvxumcRNNW65goezrWj40wxz2aVs2znCaNrFvFoCL0EC3NmzQtPRz465ucdsHH9CiiUqCaMFpQBi2P00gKmuUf5k"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents
    .create({
      amount: total, // subunits of the currency
      currency: "usd",
    })
    .catch((err) => {
      console.log(err);
    });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);