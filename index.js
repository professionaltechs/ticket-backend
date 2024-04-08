const express = require("express");
var cors = require("cors");

const app = express();
const port = 8080;

app.use(cors());
require("./db/db");

// ROUTES
const authRoues = require("./routes/auth");

app.use(express.json());
app.use("/auth", authRoues);

app.listen(port, () => {
  console.log("server running");
});
