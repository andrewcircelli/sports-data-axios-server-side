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
const getPreGameOddsByDate = async (req, res) => {
  const { data } = await axios.get(
    "https://api.sportsdata.io/v3/mlb/odds/json/GameOddsByDate/2022-05-20?key=7875bd8edadf408087c468444e78bd63"
  );
  res.status(200).send(data);
};

// Routes
// =============================================================
app.get("/MLB", getPreGameOddsByDate);

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
