const express = require("express");
const router = express.Router();

// CONTROLLERS
const { registerUser, signIn } = require("../controllers/auth");

// ROUTES
router.post("/register-user", registerUser);
router.post("/sign-in", signIn);

module.exports = router;
