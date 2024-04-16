const express = require("express");
var cors = require("cors");

const app = express();
const port = 8080;

app.use(cors());
require("./db/db");

// ROUTERS
const authRoues = require("./routes/auth");
const gamesRoutes = require("./routes/games");

// ROUTES
app.use(express.json());
app.use("/auth", authRoues);
app.use("/games", gamesRoutes);

app.listen(port, () => {
  console.log("server running");
});
