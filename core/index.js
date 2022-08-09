const express = require("express");
const cors = require("cors");

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
app.post("/api/user", (req, res) => {
    console.log("Postter");
    const { id, pass, type } = req.body;

    console.log(id, " - ", pass, " - ", type);

    if (id === "12345" && pass === "admin") {
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
})

app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`);
});
