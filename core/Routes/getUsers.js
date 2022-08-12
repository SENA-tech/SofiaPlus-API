const express = require("express");

//Elements
const User = require("../models/logUser");

const router = express.Router();

//Route -> POST
router.post("/", (req, res) => {

    const { id } = req.body;

    const data = async () => {
        const user = await User.findById({ document: id }, (err, user) => {
            if (err) {
                console.log(err);
            } else {
                return user;
            }
        }
        )
    };

    data().then(user => {
        if (type === user[0].doctype && pass === user[0].password) {
            console.log("Login exitoso");
            res.json({
                _id: user[0].document,
                _name: user[0].name,
                validate: true,
            });
        } else {
            console.log("Login fallido");
            res.json({
                _id: ' ',
                _name: ' ',
                validate: false,
            });
        }
    }).catch(err => {
        console.log(err);
    });

});

module.exports = router;