var jwt = require("jsonwebtoken");

// HELPERS
const { bcryptPassword, comparePassword } = require("../helpers/auth");

// MODELS
const userSchema = require("../models/auth");

const registerUser = async (req, res) => {
  try {
    const {
      email,
      password,
      confirmPassword,
      firstName,
      lastName,
      address,
      phoneNumber,
      postalCode,
    } = req.body;

    const newPassword = await bcryptPassword(password);
    const user = new userSchema({
      email,
      password: newPassword,
      confirmPassword,
      firstName,
      lastName,
      address,
      phoneNumber,
      postalCode,
    });
    await user.save();
    res.status(201).send({ message: "User registered successfully", user });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ message: "error in registering user controller", error });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email) {
      const user = await userSchema.findOne({ email });
      if (user) {
        const matchPassword = await comparePassword(password, user.password);
        if (matchPassword) {
          const token = jwt.sign(
            { id: user._id, email: user.email },
            "mehzooz"
          );
          return res
            .status(200)
            .send({
              user: { email, token, verified: user.verified },
              message: "Login successfull",
            });
        }
      }
      return res.send({ message: "Invalid credentials" });
    }
    return res.send({ message: "Provide all details" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error in login controller", error });
  }
};

module.exports = { registerUser, signIn };
