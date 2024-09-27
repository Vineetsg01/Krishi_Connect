const router = require("express").Router();
const User = require("../db/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
require('dotenv').config();


//REGISTER
router.post("/register", async (req, res) => {

    if (req.body.password !== req.body.cpassword) {
        console.log("Passwords do not match!");
        return res.status(401).json("Passwords do not match!");
    }

    else {
        const newUser = new User({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            mobile: req.body.mobile,
            password: CryptoJS.AES.encrypt(
                req.body.password,
                process.env.SECRET_KEY
            ).toString(),
        });
        try {
            const user = await newUser.save();
            const {password, ...info} = user._doc;
            res.status(201).json({ success: true, user: info });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
});


//LOGIN
router.post("/login", async (req, res) => {
    try {
        let user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.status(400).json("Login with correct credentials!");
        }

        const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);


        if (originalPassword !== req.body.password) {
            res.status(401).json("Login with correct credentials!");
        } else {
            const accessToken = jwt.sign(
                { id: user._id },
                process.env.SECRET_KEY,
                { expiresIn: "5d" }
            );
            const { password, ...info } = user._doc;

            res.status(200).json({ ...info, accessToken,success:true });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



module.exports = router;