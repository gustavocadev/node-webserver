const express = require("express");
const hbs = require("hbs");
require("dotenv").config();

const app = express();

// middlewares
app.use(express.static("public"));

// configs
app.set("view engine", "hbs");

// partials
hbs.registerPartials(__dirname + "/views/partials");

// methods
app.get("/", (req, res) => {
    res.render("home", {
        name: "Helle world",
        title: "Nodejs",
    });
});

app.get("/hola-mundo", (req, res) => {
    res.send("hello from XD", {
        name: "Helle world",
        title: "Nodejs",
    });
});

app.get("/generic", (req, res) => {
    res.render("generic", {
        name: "Helle world",
        title: "Nodejs",
    });
});

app.get("/elements", (req, res) => {
    res.render("elements", {
        name: "Helle world",
        title: "Nodejs",
    });
});

app.get("*", (req, res) => {
    res.sendFile(__dirname + "/public/404.html");
});

const port = process.env.PORT;

app.listen(port);
