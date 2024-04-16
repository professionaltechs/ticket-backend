const express = require("express");
const router = express.Router();

// CONTROLLERS
const {createGameCards} = require("../controllers/games");

// GAMES ROUTES
router.get("/", createGameCards);

module.exports = router;
