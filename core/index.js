const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

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


app.use("/api/user/aouth", require("./Routes/userLogin"));
app.use("/api/user/register", require("./Routes/userCreate"));

app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`);
});
