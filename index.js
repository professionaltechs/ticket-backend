const express = require("express");

const app = express();
const port = 8080;

require("./db/db");

// ROUTES
const authRoues = require("./routes/auth");

app.use(express.json());
app.use("/auth", authRoues);

app.listen(port, () => {
  console.log("server running");
});
