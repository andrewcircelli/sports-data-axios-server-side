// Dependencies
// =============================================================
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const axios = require("axios");

// Express app
// =============================================================
const PORT = process.env.PORT || 8080;
const app = express();

// Express app - data parsing
// =============================================================
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// Services
// =============================================================
const sportsdata = require("./services");

// Routes
// =============================================================
app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "Navigate to /MLB/YYYY-MM-DD for pregame odds" });
});

app.get("/MLB/:date", sportsdata.getPreGameOddsByDate);

app.get("/ping", (req, res) => {
  res.status(200).send("successfull ping");
});

app.use((req, res) => {
  const err = new Error("Page Not Found!");
  err.status = 404;
  res.json({
    err: {
      message: err.message,
    },
  });
});

app.listen(PORT, () => {
  console.log(`app is now listening at PORT: ${PORT}`);
});
