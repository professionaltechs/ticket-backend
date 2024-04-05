const bcrypt = require("bcrypt");

const bcryptPassword = async (password) => {
  const newPassword = await bcrypt.hash(password, 10);
  return newPassword;
};

const comparePassword = async (password, hashedPassword) => {
  const passwordMatch = await bcrypt.compare(password, hashedPassword);
  return passwordMatch;
};

module.exports = { bcryptPassword, comparePassword };
