const express = require("express");
const router = express.Router();
const Menu = require("../models/menu");
const { authOwner } = require("../middleware/authenticate");

router.post("/owner/createmenuitem", authOwner, (req, res) => {
  const { ItemName, ItemDesc, ItemCost, ItemPhoto } = req.body;

  const MenuItem = new Menu({
    ItemName,
    ItemDesc,
    ItemCost,
    ItemPhoto,
    postedBy: req.user,
  });

  MenuItem.save()
    .then(() => {
      res.status(200).json({ message: "Menu Item saved Successfully" });
    })
    .catch((err) => {
      res.status(422).send(err);
    });
});

router.get("/owner/viewitem", authOwner, (req, res) => {
  console.log(req);
  Menu.find({ postedBy: req.user._id })
    .populate("postedBy", "_id ItemName ItemDesc ItemCost")
    .then((result) => {
      res.json({ result });
      console.log(result);
    })
    .catch((err) => {
      res.status(404).send({ err });
      console.log(err);
    });
});

module.exports = router;
