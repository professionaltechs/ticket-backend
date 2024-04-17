const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  aed: {
    type: Number,
    required: true,
  },
  para: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
  },
});


const gameModel = mongoose.model("Game", gameSchema);
module.exports = gameModel;