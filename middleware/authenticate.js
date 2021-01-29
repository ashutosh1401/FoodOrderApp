const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/keys");
const Owner = require("../models/owner");

const authOwner = (req, res, next) => {
  const { authorization } = req.headers;
  //console.log(authorization, req.headers);
  if (!authorization) {
    return res.status(401).json({ error: "You must be logged in" });
  }
  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, JWT_SECRET, (err, payload) => {
    if (err) {
      return res.status(401).json({ error: "You must be logged in" });
    }

    const { _id } = payload;
    Owner.findById(_id).then((userdata) => {
      req.user = userdata;
      next();
    });
  });
};

module.exports = {
  authOwner,
};
