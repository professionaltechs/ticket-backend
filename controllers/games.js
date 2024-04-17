const GameModel = require("../models/games");

const createGameCards = async (req, res) => {
  try {
    const { name, aed, para, time } = req.body;
    if (!name || !aed || !para) {
      return res.status(400).send({
        success: false,
        message: "Fill the required fields",
      });
    }
    const game = new GameModel({
      name,
      aed,
      para,
      time: time || null,
    });
    await game.save();
    return res.send({
      success: true,
      data: game,
      messsage: "game created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error creating game cards",
      error: error.message,
    });
  }
};

const getGameCardDetails = async (req, res) => {
  try {
    const gameCardDetails = await GameModel.find({});
    res.send({
      success: true,
      data: gameCardDetails,
      message: "Game card details fetched successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error fetching game card details",
    });
  }
};

const deleteGameCard = async (req, res) => {
  try {
    const { id } = req.params;
    await GameModel.findByIdAndDelete(id);
    return res.send({
      success: true,
      message: "Game card deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error deleting game card",
      error: error.message,
    });
  }
};

module.exports = {
  createGameCards,
  getGameCardDetails,
  deleteGameCard
};
