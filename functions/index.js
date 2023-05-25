const functions = require("firebase-functions");
const express = require('express')
const cors = require('cors')
const stripe = require("stripe")(
    'sk_test_51LHcubCb56Gy9W6XLkN4TtNa3Tx4TF1nTAR0EBZfH9Z7WxBK3mtsTLmXBSL6rbLRu6zgGWXgnZIBQ29Y4Evh85rC00qbPv5zAF'
  );

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

// eslint-disable-line
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });

});

// - Listen command
exports.api = functions.https.onRequest(app);

// http://127.0.0.1:5001/fir-b528c/us-central1/ap