import mongoose from "mongoose";
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { test } from "./Backend/controllers/alumno.controller.js"

dotenv.config()
mongoose.connect(process.env.urldb)
    .then(() => {
        console.log("Funciona la base de datos")
    })
    .catch((error) => {
        console.log("No funciona salio", error)
    })

const app = express();
app.use(cors());
app.listen(4000, () => {
    console.log("se escucha el servidor")
})


test()



















