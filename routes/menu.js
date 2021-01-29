const express = require("express");
const router = express.Router();
const Menu = require("../models/menu");
const { authOwner } = require("../middleware/authenticate");

router.post("/menu/createmenuitem", authOwner, (req, res) => {
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

router.get("/menu/viewitem", authOwner, (req, res) => {
  Menu.find({ postedBy: req.user._id })
    .populate("postedBy", "_id ItemName ItemDesc ItemCost ItemPhoto")
    .then((result) => {
      res.json({ result });
      //console.log(result);
    })
    .catch((err) => {
      res.status(404).send({ err });
      //console.log(err);
    });
});

router.delete("/menu/:id", authOwner, (req, res) => {
  //console.log(req.params);
  Menu.findOne({ _id: req.params.id })
    .populate("postedBy", "_id ItemName ItemDesc ItemCost ItemPhoto")
    .exec((err, menu) => {
      if (err || !menu) {
        return res.status(422).json({ error: err });
      }
      if (menu.postedBy._id.toString() === req.user._id.toString()) {
        menu
          .remove()
          .then((result) => {
            res.json(result);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
});

router.patch("/menu/:id", authOwner, (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["ItemName", "ItemDesc", "ItemCost"];
  const isAllowedUpdate = updates.forEach((update) => {
    allowedUpdates.includes(update);
  });
  console.log(updates, isAllowedUpdate);
  if (!isAllowedUpdate) {
    return res.status(400).send({ error: "Invalid Update" });
  }

  Menu.findOneAndUpdate(
    { _id: req.params.id },
    {
      $push: {},
    }
  );
});

module.exports = router;
