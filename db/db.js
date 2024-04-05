const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://user:ticketbackend@cluster0.8xiumv2.mongodb.net/mehzooz?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("database connected");
  })
  .catch((error) => handleError(error));
