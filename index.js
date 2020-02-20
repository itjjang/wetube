//const express = require('express');
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);
const handleHome = (req, res) => res.end("Hi from Home!!");
const handleProfile = (req, res) => res.send("You are on my profile");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));     // tiny, combined, common, short, dev

/*
const middleware = (req, res, next) => {
//    res.send("not happening");
    next();
}
*/

//app.get("/", middleware, handleHome);
app.get("/", handleHome);
app.get("/profile", handleProfile);
app.listen(PORT, handleListening);
