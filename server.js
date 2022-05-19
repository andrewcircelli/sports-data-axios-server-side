// Dependencies
// =============================================================
const express = require("express");

// Express app
// =============================================================
const PORT = process.env.PORT || 8080;
const app = express();

// Express app - data parsing
// =============================================================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
// =============================================================
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/api", (req, res) => {
  res.send("API Pending");
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
  console.log(`API Pending at PORT ${PORT}`);
});
