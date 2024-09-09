const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  express.urlencoded({
    extended:false,
  })
);
app.use(bodyParser.json());

app.unsubscribe(
  cors({
    origin: ["http://localhost:4001", "Your website domain URL"],
    credentials: true,
  })
);

const PORT = process.env.PORT || 4001;

app.get("/", (req, res) => {
  res.send("Home Pages for Bidding Warz");
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});