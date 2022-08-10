const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const User = require("./Models/newUsers");

//Dotenv
require('dotenv').config();

const app = express();

//Inits
require("./DataBase/MongoDB");

//Settings
app.set("port", process.env.PORT || 4000);
app.use(cors());

//Middlewares
app.use(express.json());

//Routes

//Route -> GET
app.get("/", (req, res) => {
    res.send("Hello World");
});

//Route -> POST
app.post("/api/user", (req, res) => {
    console.log("Postter");
    const { id, pass, type } = req.body;

    console.log({ id, pass, type });

    const data = User.find({ document: id, password: pass, doctype: type } , (err, user) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error");
        } else {
            return user
        }
    });

    if (type === data._conditions.doctype && pass === data._conditions.password) {
        console.log("Login exitoso");
        res.json({
            validate: true,
        });
    } else {
        console.log("Login fallido");
        res.json({
            validate: false,
        });
    }
});

//Route -> PUT
app.put("/api/user", async (req, res) => {
    console.log("Putter");
    const { id, pass, type, nombre, apellido } = req.body;

    //create a new user
    const user = await User.create({
        name: nombre,
        lastName: apellido,
        doctype: type,
        document: id,
        password: pass,
    });

    user ? console.log({ user: user }) : console.log({ user: null });

});

app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`);
});
