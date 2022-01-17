const Menu = require("../models/menu");

exports.createMenuItem = async (req, res) => {
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
            res.status(201).send({
                _id: savedmenu._id,
                ItemName: savedmenu.ItemName,
                ItemDesc: savedmenu.ItemDesc,
                ItemCost: savedmenu.ItemCost,
                ItemPhoto: savedmenu.ItemPhoto,
                postedBy: savedmenu.postedBy,
            });
        }
    } catch (e) {
        res.status(500).send(e);
        console.log(e);
    }
}

exports.getMenuItem = async (req, res) => {
    try {
        const menu = await Menu.find({
            postedBy: req.user._id,
        });
        if (menu) {
            res.status(200).send({
                menu,
            });
        }
    } catch (e) {
        res.status(500).send(e);
        console.log(e);
    }
}

exports.deleteItembyId = async (req, res) => {
    //console.log(req.params);
    try {
        const delMenu = await Menu.findOneAndDelete({
            _id: req.params.id,
            postedBy: req.user.id,
        });

        if (delMenu) {
            res.status(200).send(delMenu);
        }
    } catch (e) {
        res.status(500).send(e);
    }
}

exports.updateMenubyId = async (req, res) => {
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
}