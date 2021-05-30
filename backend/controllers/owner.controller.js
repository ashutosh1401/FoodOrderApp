const Owner = require('../models/owner')

exports.register = async (req, res) => {

    const inowner = await Owner.findOne({
        email: req.body.email,
    });
    if (inowner) {
        return new Error("User Already Exists");
    }
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 8);
        const owner = new Owner({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            avatar: req.body.avatar,
        });
        const newOwner = await owner.save();
        if (newOwner) {
            res.send({
                _id: newOwner._id,
                name: newOwner.name,
                email: newOwner.email,
                password: newOwner.password,
            });
        }
    } catch (e) {
        res.status(404).send(e);
        console.log(e);
    }
}