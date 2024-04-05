var jwt = require("jsonwebtoken");

const requireSignIn = (req, res, next) => {
  try {
    const decode = jwt.verify(token, "shhhhh");
    req.body.decode = decode;
    next();
  } catch (error) {
    console.log("Error");
    return res.send({ message: "Error in require sign in midddleware" });
  }
};
