import express from "express";
import Menu from "../models/menu";
const router = express.Router();
const { isAuth } = require("../middleware/utils");

router.post("/createitem", isAuth, async (req, res) => {
  try {
    const menu = await Menu({
      ItemName: req.body.ItemName,
      ItemDesc: req.body.ItemDesc,
      ItemCost: req.body.ItemCost,
      ItemPhoto: req.body.ItemPhoto,
      postedBy: req.user,
    });
    const savedmenu = await menu.save();
    if (savedmenu) {
      res.send({
        _id: savedmenu._id,
        ItemName: savedmenu.ItemName,
        ItemDesc: savedmenu.ItemDesc,
        ItemCost: savedmenu.ItemCost,
        ItemPhoto: savedmenu.ItemPhoto,
        postedBy: savedmenu.postedBy,
      });
    }
  } catch (e) {
    res.send(e);
    console.log(e);
  }
});

router.get("/viewitem", isAuth, async (req, res) => {
  try {
    const menu = await Menu.find({
      postedBy: req.user._id,
    });
    if (menu) {
      res.send({
        menu,
      });
    }
  } catch (e) {
    res.status(404).send(e);
    console.log(e);
  }
  // Menu.find({ postedBy: req.user._id })
  //   .populate("postedBy", "_id ItemName ItemDesc ItemCost ItemPhoto")
  //   .then((result) => {
  //     res.json({ result });
  //     //console.log(result);
  //   })
  //   .catch((err) => {
  //     res.status(404).send({ err });
  //     //console.log(err);
  //   });
});

router.delete("/menu/:id", isAuth, async (req, res) => {
  //console.log(req.params);
  try {
    const delMenu = await Menu.findOneAndDelete({
      _id: req.params.id,
      postedBy: req.user.id,
    });

    if (delMenu) {
      res.send(delMenu);
    }
  } catch (e) {
    res.status(404).send(e);
  }

  // Menu.findOne({ _id: req.params.id })
  //   .populate("postedBy", "_id ItemName ItemDesc ItemCost ItemPhoto")
  //   .exec((err, menu) => {
  //     if (err || !menu) {
  //       return res.status(422).json({ error: err });
  //     }
  //     if (menu.postedBy._id.toString() === req.user._id.toString()) {
  //       menu
  //         .remove()
  //         .then((result) => {
  //           res.json(result);
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     }
  //   });
});

router.patch("/menu/:id", isAuth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["ItemName", "ItemDesc", "ItemCost"];
  const isAllowedUpdate = updates.forEach((update) => {
    allowedUpdates.includes(update);
  });
  console.log(updates, isAllowedUpdate);
  // if (!isAllowedUpdate) {
  //   return res.status(400).send({ error: "Invalid Update" });
  // }
  try {
    const menu = await Menu.findOne({ _id: req.params.id });

    if (!menu) {
      return res.status(404).send();
    }
    updates.forEach((update) => (menu[update] = req.body[update]));
    await menu.save();
    res.send(menu);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
