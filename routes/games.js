const express = require("express");
const router = express.Router();

// CONTROLLERS
const {createGameCards, getGameCardDetails, deleteGameCard} = require("../controllers/games");

// GAMES ROUTES
router.post("/create-game", createGameCards);
router.get('/get-game-cards-details', getGameCardDetails);
router.delete('/delete-game-card/:id', deleteGameCard);

module.exports = router;
