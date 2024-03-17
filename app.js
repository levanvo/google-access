import express from "express";
import axios from "axios";
// import GoogleStrategy from "passport-google-oidc";
import GooglePlusTokenStrategy from "passport-google-plus-token"
import mongoose from "mongoose";
import modelEmail from "./model/email.js";
import passport from "passport";
import router from "./router/email.js";
import doten from "dotenv";
doten.config();

const app = express();
app.use(express.json());
app.use("/", router);

mongoose.connect("mongodb://127.0.0.1:27017/levanvo")
    .then(()=>{
        console.log("Connected mongoDB .");
    })
    .catch(()=>{
        console.log("Mongodb failed !!!");
    });

const port = process.env.URL;
app.listen(port, ()=>{
    console.log("running on gate: 3000.");
});