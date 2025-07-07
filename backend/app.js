const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();

// Define Routes
const portfolioRoutes = require("./routes/portfolio");
const sequelize = require("./config/database");

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// For test, will delete later
app.get("/", (req, res) => {
  res.send("Hi");
});

app.use("/api/portfolio", portfolioRoutes);

// Start server
sequelize
  // .sync({ force: true })
  .sync()
  .then((result) => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  });
