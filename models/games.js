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
    required: true,
  },
});
