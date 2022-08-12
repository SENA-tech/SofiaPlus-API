const express = require("express");
const router = express.Router();

//Elements
const User = require("../models/logUser");

//Route -> PUT
router.put("/", async (req, res) => {

    const { id, pass, type, nombre, apellido } = req.body;

    //create a new user
    const user = await User.create({
        name: nombre,
        lastName: apellido,
        doctype: type,
        document: id,
        password: pass,
    });

});

module.exports = router;