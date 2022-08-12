const express = require("express");
const router = express.Router();

//Elements
const User = require("../Models/logUser");

//Route -> POST
router.post("/", (req, res) => {

    const { id } = req.body;

    const data = async () => {
        const userd = await User.findById(id)
        return userd;
    };

    data().then(user => {
        console.log(user);
        res.json({
            _id: user.document,
            _name: user.name,
            _lastName: user.lastName,
            _type: user.doctype,
        });

    }).catch(err => {
        console.log(err);
    });

});

module.exports = router;