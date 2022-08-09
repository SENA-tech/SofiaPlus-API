import express from "express";
import cors from "cors";

const app = express();

//Settings
app.set("port", process.env.PORT || 3000);
app.use(cors());

//Middlewares
app.use(express.json());
