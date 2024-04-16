const createGameCards = (req, res) => {
  try {
    res.send("test");
  } catch (error) {
    console.log(error);
    res.stau(500).json({
      success: false,
      message: "Error creating game cards",
      error: error.message,
    });
  }
};

module.exports = {
  createGameCards,
};
