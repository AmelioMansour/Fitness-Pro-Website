//const express = require("express");
const path = require("path");
const ejs = require("ejs");
const { request } = require("express");

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));

//Nav routes
app.get("/", (req, res) => {
    res.render("index");
});