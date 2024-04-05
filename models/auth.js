const mongoose = require("mongoose");
const { Schema } = mongoose;

const userModel = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName : {
    type : String,
    required : true
  },
  lastName : {
    type : String,
    required : true
  }, 
  address : {
    type : String
  },
  phoneNumber : {
    type : String
  },
  postalCode : {
    type : Number
  },
  verified : {
    type : Boolean,
    default : false
  }
});


const userSchema = mongoose.model('user', userModel);
module.exports = userSchema