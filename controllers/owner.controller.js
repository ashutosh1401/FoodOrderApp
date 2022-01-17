const Owner = require('../models/owner')
const { isValidEmail, isPasswordStrong } = require('../utlis/validations')

exports.register = async (req, res) => {
    if (!isValidEmail(req.body.email))
        return res.status(400).send({ error: "Invalid Email" });
    if (!isPasswordStrong(req.body.password))
        return res.status(400).send({ error: "Password is not strong" });
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
        res.status(500).send(e);
        console.log(e);
    }
}

exports.login = async (req, res) => {
    const siginowner = await Owner.findOne({
        email: req.body.email,
    });
    if (!siginowner) {
        return res.status(400).send({ error: "User is not registered" })
    }
    try {
        if (siginowner) {
            const isMatch = await bcrypt.compare(
                req.body.password,
                siginowner.password
            );
            if (isMatch) {
                res.status(201).send({
                    _id: siginowner._id,
                    name: siginowner.name,
                    email: siginowner.email,
                    token: getToken(siginowner),
                });
            } else {
                res.status(401).send({ error: "Invalid Credentials" });
            }
        }
    } catch (e) {
        res.status(500).send(e)
    }

}